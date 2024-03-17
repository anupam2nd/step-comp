import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SubReport from '../../Component/Sub-Report/SubReport'

export default function Home() {
  return (
    <div>
      <nav className="bg-gradient-to-b from-slate-100 to-sky-500 w-full animate-fadeinfast">
        <div className="max-w-7xl p-2 sm:px-6 lg:px-8">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <Link to={'/profile'} class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Profile</Link>
                <Link to={'/faqs'} class="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Faqs</Link>
                <Link to={'/counter'} class="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Counter</Link>
                <a href="#" class="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                <a href="#" class="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  )
}
