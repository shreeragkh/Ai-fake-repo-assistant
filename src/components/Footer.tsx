import { BookOpen, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="mb-3">About RepoGuard</h4>
            <p className="text-slate-400 text-sm">
              An AI-powered research project focused on detecting fake and ghost GitHub repositories 
              using machine learning and pattern analysis techniques.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3">Research Project</h4>
            <p className="text-slate-400 text-sm">
              This tool is developed as part of academic research to study repository authenticity 
              patterns and contribute to open source security.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>research@repoguard.example</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Academic Research Paper</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>© 2025 RepoGuard - AI Repository Authenticity Detection System</p>
          <p className="mt-2">For research and educational purposes</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
