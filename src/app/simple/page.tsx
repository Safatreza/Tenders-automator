export default function SimpleDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🚀 Tender Automator
          </h1>
          <p className="text-lg text-gray-600">
            Demo Dashboard - Transform tender processing with AI automation
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
            <div className="text-gray-600">Total Tenders</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
            <div className="text-gray-600">Processing</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">5</div>
            <div className="text-gray-600">Ready for Review</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15</div>
            <div className="text-gray-600">Approved</div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => alert('Upload Tender - Demo Feature')}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-2">Upload New Tender</h3>
              <p className="text-gray-600">Start processing documents</p>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => alert('View Tenders - Demo Feature')}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">View All Tenders</h3>
              <p className="text-gray-600">Manage existing tenders</p>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => alert('Pipeline Runs - Demo Feature')}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Pipeline Runs</h3>
              <p className="text-gray-600">Monitor processing</p>
            </div>
          </div>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              ⚠️ Items Requiring Attention
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="font-medium text-yellow-800">5 tenders ready for review</div>
                <div className="text-yellow-700 text-sm">Processing completed, approval needed</div>
                <button
                  className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  onClick={() => alert('Review Tenders - Demo Feature')}
                >
                  Review Now
                </button>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <div className="font-medium text-blue-800">2 active pipeline runs</div>
                <div className="text-blue-700 text-sm">Documents currently being processed</div>
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => alert('Monitor Pipeline - Demo Feature')}
                >
                  Monitor
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              📈 System Status
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Pipeline System</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  ✅ Operational
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Document Storage</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  ✅ Operational
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>AI Processing</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  ✅ Operational
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Documents Processed</span>
                <span className="text-gray-600">67 total</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-blue-100 border border-blue-300 rounded-lg p-6">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">ℹ️</span>
            <h3 className="text-lg font-semibold text-blue-800">Demo Mode Active</h3>
          </div>
          <p className="text-blue-700">
            This is a demonstration interface with static data. All interactive elements show demo alerts.
            The actual application would connect to real data sources and processing pipelines.
          </p>
        </div>
      </div>

      <script>
        {`
          // Add some interactivity
          document.addEventListener('DOMContentLoaded', function() {
            console.log('Tender Automator Demo Loaded Successfully!');

            // Add click handlers for demo
            const cards = document.querySelectorAll('[onClick]');
            cards.forEach(card => {
              card.style.cursor = 'pointer';
            });
          });
        `}
      </script>
    </div>
  )
}