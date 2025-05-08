import React from 'react'
import { Home } from 'lucide-react'

function Sidbar() {
  return (
    <div className="flex flex-col w-64 bg-gray-700 h-screen">
        <nav className="flex flex-col py-4 px-6">
            <ul>
                <li className="py-2">
                    <a href="" className="flex items-center">
                        <Home className="h-6 w-6" />
                        <span className="text-white ml-2">Home</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidbar