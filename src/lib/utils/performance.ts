// Performance Utilities
// Collection of performance optimization utilities and helpers

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(undefined, args), delay)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(undefined, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Memoization utility for expensive computations
export function memoize<T extends (...args: any[]) => any>(
  fn: T,
  getKey?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = getKey ? getKey(...args) : JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = fn(...args)
    cache.set(key, result)
    return result
  }) as T
}

// Performance monitoring utilities
export class PerformanceMonitor {
  private marks = new Map<string, number>()
  private measures = new Map<string, number[]>()

  startTiming(name: string): void {
    this.marks.set(name, performance.now())
  }

  endTiming(name: string): number {
    const start = this.marks.get(name)
    if (!start) {
      console.warn(`No start mark found for: ${name}`)
      return 0
    }

    const duration = performance.now() - start

    if (!this.measures.has(name)) {
      this.measures.set(name, [])
    }
    this.measures.get(name)!.push(duration)

    this.marks.delete(name)
    return duration
  }

  getStats(name: string): {
    count: number
    average: number
    min: number
    max: number
    total: number
  } | null {
    const measurements = this.measures.get(name)
    if (!measurements || measurements.length === 0) {
      return null
    }

    return {
      count: measurements.length,
      average: measurements.reduce((sum, val) => sum + val, 0) / measurements.length,
      min: Math.min(...measurements),
      max: Math.max(...measurements),
      total: measurements.reduce((sum, val) => sum + val, 0)
    }
  }

  clear(name?: string): void {
    if (name) {
      this.marks.delete(name)
      this.measures.delete(name)
    } else {
      this.marks.clear()
      this.measures.clear()
    }
  }

  logStats(name: string): void {
    const stats = this.getStats(name)
    if (stats) {
      console.log(`Performance stats for "${name}":`, {
        ...stats,
        average: `${stats.average.toFixed(2)}ms`,
        min: `${stats.min.toFixed(2)}ms`,
        max: `${stats.max.toFixed(2)}ms`,
        total: `${stats.total.toFixed(2)}ms`
      })
    } else {
      console.log(`No performance data found for: ${name}`)
    }
  }
}

// Global performance monitor instance
export const perfMonitor = new PerformanceMonitor()

// Image loading optimization
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

export async function preloadImages(srcs: string[]): Promise<void> {
  await Promise.all(srcs.map(preloadImage))
}

// Intersection Observer utilities
export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  }

  return new IntersectionObserver(callback, defaultOptions)
}

// Lazy loading utility
export function useLazyLoad<T extends HTMLElement>(
  callback: (element: T) => void,
  options?: IntersectionObserverInit
) {
  const observer = createIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target as T)
          observer.unobserve(entry.target)
        }
      })
    },
    options
  )

  return {
    observe: (element: T) => observer.observe(element),
    unobserve: (element: T) => observer.unobserve(element),
    disconnect: () => observer.disconnect()
  }
}

// Memory management utilities
export function createCleanupManager() {
  const cleanupTasks: (() => void)[] = []

  return {
    add: (task: () => void) => {
      cleanupTasks.push(task)
    },
    cleanup: () => {
      cleanupTasks.forEach(task => {
        try {
          task()
        } catch (error) {
          console.error('Cleanup task failed:', error)
        }
      })
      cleanupTasks.length = 0
    }
  }
}

// Batch processing utility for large datasets
export async function processBatch<T, R>(
  items: T[],
  processor: (item: T) => Promise<R> | R,
  batchSize = 10,
  delay = 0
): Promise<R[]> {
  const results: R[] = []

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize)
    const batchResults = await Promise.all(
      batch.map(item => processor(item))
    )

    results.push(...batchResults)

    // Optional delay between batches to prevent blocking
    if (delay > 0 && i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }

  return results
}

// Performance-aware scroll handling
export function createPerformantScrollHandler(
  callback: (scrollTop: number, scrollHeight: number, clientHeight: number) => void,
  throttleMs = 16 // ~60fps
) {
  let ticking = false

  const throttledCallback = throttle(callback, throttleMs)

  return (event: Event) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const target = event.target as HTMLElement
        if (target) {
          throttledCallback(
            target.scrollTop,
            target.scrollHeight,
            target.clientHeight
          )
        }
        ticking = false
      })
      ticking = true
    }
  }
}

// Bundle size optimization helpers
export function dynamicImport<T>(importFn: () => Promise<{ default: T }>): Promise<T> {
  return importFn().then(module => module.default)
}

// Resource hints for better loading performance
export function addResourceHints(urls: string[], rel: 'preload' | 'prefetch' = 'prefetch') {
  urls.forEach(url => {
    const link = document.createElement('link')
    link.rel = rel
    link.href = url
    document.head.appendChild(link)
  })
}