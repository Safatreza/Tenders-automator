# Deployment Guide for Tender Automator

Complete production deployment guide for the Tender Automator system on Vercel and other platforms.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ Vercel account (recommended platform)
- ✅ PostgreSQL database (Neon, Vercel Postgres, or self-hosted)
- ✅ Email service for authentication (Gmail, SendGrid, etc.)
- ✅ GitHub repository access
- ✅ Domain name (optional but recommended)

## 🚀 Vercel Deployment (Recommended)

### Step 1: Repository Setup

1. **Fork or clone the repository**:
   ```bash
   git clone https://github.com/Safatreza/Tenders-automator.git
   cd Tenders-automator
   ```

2. **Push to your GitHub account** (if not already there):
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/Tenders-automator.git
   git push -u origin main
   ```

### Step 2: Vercel Project Setup

1. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select "Next.js" framework (should auto-detect)

2. **Configure Build Settings**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install`

### Step 3: Database Setup

#### Option A: Vercel Postgres (Recommended)
```bash
# In Vercel dashboard:
# 1. Go to Storage tab
# 2. Create new Postgres database
# 3. Copy connection strings
```

#### Option B: Neon (Serverless PostgreSQL)
```bash
# 1. Visit neon.tech
# 2. Create new project
# 3. Get connection string
# 4. Create database: tender_automator
```

#### Option C: External PostgreSQL
```bash
# Ensure your PostgreSQL instance:
# - Accepts external connections
# - Has SSL enabled
# - Database 'tender_automator' exists
```

### Step 4: Environment Variables

In your Vercel project dashboard, add these environment variables:

#### Database Configuration
```bash
DATABASE_URL="postgresql://username:password@host:5432/tender_automator"
# For Vercel Postgres, this will be auto-populated
```

#### Authentication
```bash
NEXTAUTH_URL="https://your-app-name.vercel.app"
NEXTAUTH_SECRET="your-super-secret-nextauth-key-min-32-chars"
# Generate with: openssl rand -base64 32
```

#### Email Service (Choose one)

**Gmail/Google Workspace:**
```bash
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-specific-password"
EMAIL_FROM="your-email@gmail.com"
```

**SendGrid:**
```bash
EMAIL_SERVER_HOST="smtp.sendgrid.net"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="apikey"
EMAIL_SERVER_PASSWORD="your-sendgrid-api-key"
EMAIL_FROM="noreply@yourdomain.com"
```

**AWS SES:**
```bash
EMAIL_SERVER_HOST="email-smtp.us-east-1.amazonaws.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-ses-access-key"
EMAIL_SERVER_PASSWORD="your-ses-secret-key"
EMAIL_FROM="noreply@yourdomain.com"
```

#### File Storage (Vercel Blob)
```bash
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_xxxxxxxxxxxxx"
# Get from Vercel dashboard > Storage > Blob
```

#### Application Configuration
```bash
MAX_FILE_SIZE="52428800"  # 50MB in bytes
ALLOWED_MIME_TYPES="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,text/plain"
```

#### Optional: Analytics & Monitoring
```bash
# Add if you want additional tracking
NEXT_PUBLIC_ANALYTICS_ID="your-analytics-id"
SENTRY_DSN="your-sentry-dsn"
```

### Step 5: Deploy and Initialize

1. **Trigger Deployment**:
   - Push to main branch or click "Deploy" in Vercel dashboard
   - Wait for build to complete (~3-5 minutes)

2. **Initialize Database**:
   ```bash
   # After successful deployment, run database setup:

   # Option A: Using Vercel CLI locally
   npx vercel env pull .env.local
   npm run db:push
   npm run db:seed

   # Option B: Using deployment URL with API endpoint
   curl -X POST https://your-app.vercel.app/api/admin/init-db \
     -H "Content-Type: application/json" \
     -d '{"secret":"your-admin-secret"}'
   ```

3. **Verify Deployment**:
   - Visit your Vercel URL
   - Try signing in with `admin@demo.com`
   - Check email for magic link
   - Upload a test document

### Step 6: Domain Configuration (Optional)

1. **Add Custom Domain**:
   ```bash
   # In Vercel dashboard:
   # 1. Go to Domains tab
   # 2. Add your domain
   # 3. Configure DNS records as shown
   ```

2. **Update Environment Variables**:
   ```bash
   NEXTAUTH_URL="https://yourdomain.com"
   EMAIL_FROM="noreply@yourdomain.com"
   ```

## 🐳 Docker Deployment

For self-hosted deployments using Docker:

### Step 1: Prepare Environment

1. **Create `.env.production`**:
   ```bash
   # Copy environment variables as above
   # Ensure DATABASE_URL points to your PostgreSQL instance
   # Use appropriate EMAIL_SERVER_* settings
   ```

2. **Create `docker-compose.yml`**:
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       env_file:
         - .env.production
       depends_on:
         - postgres
         - redis

     postgres:
       image: postgres:15
       environment:
         POSTGRES_DB: tender_automator
         POSTGRES_USER: postgres
         POSTGRES_PASSWORD: your-secure-password
       volumes:
         - postgres_data:/var/lib/postgresql/data

     redis:
       image: redis:7-alpine
       volumes:
         - redis_data:/data

   volumes:
     postgres_data:
     redis_data:
   ```

### Step 2: Build and Deploy

```bash
# Build and start services
docker-compose up -d --build

# Initialize database
docker-compose exec app npm run db:push
docker-compose exec app npm run db:seed

# View logs
docker-compose logs -f app
```

## 🏗️ Manual Server Deployment

For deployment on VPS or dedicated servers:

### Step 1: Server Preparation

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Install PM2 for process management
sudo npm install -g pm2
```

### Step 2: Application Setup

```bash
# Clone repository
git clone https://github.com/Safatreza/Tenders-automator.git
cd Tenders-automator

# Install dependencies
npm ci --production

# Build application
npm run build

# Set up environment variables
cp .env.example .env
# Edit .env with your production values
```

### Step 3: Database Configuration

```bash
# Create PostgreSQL user and database
sudo -u postgres psql
CREATE USER tender_user WITH PASSWORD 'secure_password';
CREATE DATABASE tender_automator OWNER tender_user;
GRANT ALL PRIVILEGES ON DATABASE tender_automator TO tender_user;
\q

# Update DATABASE_URL in .env
DATABASE_URL="postgresql://tender_user:secure_password@localhost:5432/tender_automator"

# Initialize database
npm run db:push
npm run db:seed
```

### Step 4: Process Management

```bash
# Create PM2 ecosystem file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'tender-automator',
    script: 'npm',
    args: 'start',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Step 5: Reverse Proxy (Nginx)

```bash
# Install Nginx
sudo apt install -y nginx

# Create site configuration
sudo tee /etc/nginx/sites-available/tender-automator << EOF
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 86400;
    }
}
EOF

# Enable site
sudo ln -s /etc/nginx/sites-available/tender-automator /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 6: SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## 📊 Production Monitoring

### Health Checks

Add health check endpoints for monitoring:

```bash
# Check application health
curl https://your-app.vercel.app/api/health

# Expected response:
{
  "status": "ok",
  "timestamp": "2024-01-20T10:00:00.000Z",
  "version": "1.0.0",
  "database": "connected",
  "storage": "accessible"
}
```

### Monitoring Stack

For comprehensive monitoring, consider:

1. **Application Performance**:
   - Vercel Analytics (built-in)
   - Sentry for error tracking
   - New Relic or DataDog

2. **Database Monitoring**:
   - Built-in database metrics
   - Custom Prisma metrics
   - Query performance tracking

3. **Infrastructure**:
   - Vercel dashboard
   - Uptime monitoring (UptimeRobot)
   - Log aggregation (Logtail)

### Backup Strategy

```bash
# Database backup script
#!/bin/bash
pg_dump $DATABASE_URL > "backup-$(date +%Y%m%d-%H%M%S).sql"

# Upload to cloud storage
aws s3 cp backup-*.sql s3://your-backup-bucket/

# Schedule with cron:
# 0 2 * * * /path/to/backup-script.sh
```

## 🔧 Environment-Specific Configurations

### Development
```bash
NODE_ENV=development
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=postgresql://localhost:5432/tender_automator_dev
```

### Staging
```bash
NODE_ENV=production
NEXTAUTH_URL=https://staging-tender-automator.vercel.app
DATABASE_URL=postgresql://staging-db-url
```

### Production
```bash
NODE_ENV=production
NEXTAUTH_URL=https://tender-automator.vercel.app
DATABASE_URL=postgresql://production-db-url
```

## 🛡️ Security Considerations

### Production Security Checklist

- [ ] **Environment Variables**: All secrets in environment variables, not code
- [ ] **HTTPS Only**: Enforce HTTPS in production
- [ ] **Database Security**: Use connection pooling and SSL
- [ ] **File Upload Limits**: Enforce file size and type restrictions
- [ ] **Rate Limiting**: Implement API rate limiting
- [ ] **CORS Configuration**: Restrict origins in production
- [ ] **Content Security Policy**: Configure CSP headers
- [ ] **Session Security**: Secure cookie settings
- [ ] **Input Validation**: All user inputs validated
- [ ] **Error Handling**: No sensitive information in error messages

### Security Headers

Add to `next.config.js`:
```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      }
    ]
  }
}
```

## 🚨 Troubleshooting

### Common Deployment Issues

#### Build Failures
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check TypeScript errors
npm run type-check

# Verify environment variables
vercel env ls
```

#### Database Connection Issues
```bash
# Test database connection
npm run db:generate
npx prisma db pull

# Check connection string format
# postgresql://[user[:password]@][host][:port][/database]
```

#### Email Authentication Problems
```bash
# Test email configuration
curl -X POST https://your-app.vercel.app/api/auth/signin/email \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Check SMTP settings
# - Gmail: Enable 2FA and use App Password
# - Ensure EMAIL_FROM matches EMAIL_SERVER_USER for Gmail
```

#### File Upload Issues
```bash
# Check Vercel Blob configuration
vercel env ls | grep BLOB

# Verify file size limits
# Default: 50MB (adjust MAX_FILE_SIZE)
```

### Performance Optimization

```bash
# Enable gzip compression in vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}

# Optimize images
# - Use next/image component
# - Configure Vercel image optimization
# - Compress PDFs before upload
```

### Monitoring Logs

```bash
# View deployment logs
vercel logs your-deployment-url

# Function logs
vercel logs --follow

# Database query logs
# Enable in database provider dashboard
```

## 📞 Support

If you encounter issues during deployment:

1. **Check Documentation**: Review this guide and README.md
2. **GitHub Issues**: https://github.com/Safatreza/Tenders-automator/issues
3. **Vercel Support**: https://vercel.com/support
4. **Community**: GitHub Discussions for the project

## 🎯 Post-Deployment Checklist

After successful deployment:

- [ ] **Verify all pages load correctly**
- [ ] **Test user registration and login flow**
- [ ] **Upload and process a test document**
- [ ] **Check email delivery**
- [ ] **Verify approval workflow**
- [ ] **Test file storage and retrieval**
- [ ] **Monitor error logs for 24 hours**
- [ ] **Set up monitoring and alerts**
- [ ] **Schedule regular backups**
- [ ] **Document access credentials**

---

**🚀 Your Tender Automator system is now ready for production use!**

For ongoing maintenance and updates, follow the deployment process to push changes to your production environment.