import { Github, Shield } from "lucide-react"


const Navbar = () => {
    return (
        <div className="bg-slate-900/95 fixed top-0 w-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center px-8 py-4">
                        <div className="text-white flex items-center gap-3 cursor-pointer">
                            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <span>Ai Fake Repo Assistant</span>
                            </div>
                        </div>
                    </div>
                    <a href="/"> 
                    <div className="ml-4 rounded-lg border border-slate-700 text-white flex items-center gap-1 hover:text-white cursor-pointer px-4 py-2 bg-slate-800 hover:bg-slate-800 transition hover:scale-105">
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
