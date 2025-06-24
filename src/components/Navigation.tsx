import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="fixed top-0 right-0 p-6 z-10">
      <div className="bg-white rounded-lg shadow-md px-6 py-3">
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/chat" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Chat Home
          </Link>
          <Link 
            to="/it-team" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Your IT Team
          </Link>
        </div>
      </div>
    </nav>
  )
}