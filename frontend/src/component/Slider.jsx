// src/components/Sidebar.jsx

import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()

  const navLinks = [
    { to: '/dashboard/books', label: 'Books', icon: BookIcon },
    { to: '/dashboard/issued', label: 'Issued Books', icon: CheckIcon },
  ]

  return (
    <div className="h-screen w-56 bg-[#1a3c5e] flex flex-col flex-shrink-0">

      {/* Logo */}
      <div className="px-5 py-6 border-b border-white/10">
        <h1 className="text-white font-serif text-lg font-semibold tracking-wide leading-tight">
          LibraryOS
        </h1>
        <p className="text-white/40 text-[11px] uppercase tracking-widest mt-1">
          Management System
        </p>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 py-4">
        <p className="text-white/40 text-[10px] uppercase tracking-widest px-5 mb-2">
          Main
        </p>
        {navLinks.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-5 py-2.5 text-[13.5px] border-l-2 transition-all
                ${isActive
                  ? 'border-[#c8a96e] text-[#c8a96e] bg-[#c8a96e]/10'
                  : 'border-transparent text-white/70 hover:text-white hover:bg-white/5'
                }`}
            >
              <Icon />
              {label}
            </Link>
          )
        })}

        {/* Settings section */}
        <p className="text-white/40 text-[10px] uppercase tracking-widest px-5 mb-2 mt-6">
          Settings
        </p>
        <Link
          to="/dashboard/settings"
          className={`flex items-center gap-3 px-5 py-2.5 text-[13.5px] border-l-2 transition-all
            ${location.pathname === '/dashboard/settings'
              ? 'border-[#c8a96e] text-[#c8a96e] bg-[#c8a96e]/10'
              : 'border-transparent text-white/70 hover:text-white hover:bg-white/5'
            }`}
        >
          <SettingsIcon />
          Settings
        </Link>
      </nav>

      {/* User chip at bottom */}
      <div className="px-5 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#c8a96e] flex items-center justify-center text-[#1a3c5e] text-xs font-semibold flex-shrink-0">
            AD
          </div>
          <div>
            <p className="text-white text-sm font-medium leading-none">Admin</p>
            <p className="text-white/40 text-[11px] mt-0.5">Librarian</p>
          </div>
        </div>
      </div>

    </div>
  )
}

// SVG Icons
function BookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4"/>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
    </svg>
  )
}