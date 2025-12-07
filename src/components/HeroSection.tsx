import { TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react'

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm">Research Project - Academic Study</span>
        </div>
        <h2 className="text-white mb-4">
          Detect Fake & Ghost GitHub Repositories
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg">
          Our AI-powered system analyzes repository patterns, commit history, contributor behavior, 
          and code quality to identify potentially fraudulent or abandoned GitHub repositories.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-blue-500/20">
            <CheckCircle className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-white mb-2">AI Detection</h3>
          <p className="text-slate-400">
            Advanced machine learning algorithms analyze multiple signals to determine repository authenticity.
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-amber-500/20">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
          </div>
          <h3 className="text-white mb-2">Pattern Analysis</h3>
          <p className="text-slate-400">
            Detects suspicious commit patterns, fake contributors, and automated activity indicators.
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-green-500/20">
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-white mb-2">Comprehensive Report</h3>
          <p className="text-slate-400">
            Detailed analysis with confidence scores, risk factors, and authenticity metrics.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
