/* eslint-disable @next/next/no-img-element */
'use client'
import { ReactNode } from 'react'
import { SidebarNavLink } from './sidebar-nav-link'

interface SidebarProps {
  options: {
    label: string
    icon: ReactNode
    href: string
  }[]
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <aside className="flex flex-col items-center justify-center w-1/6 h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-start w-full h-full">
        <div className="flex justify-center w-full">
          {/* <img
            src="/radarsociallogo-hzt.png"
            alt="Logo"
            width={200}
            className="py-16"
          /> */}
        </div>
        <nav className="flex flex-col w-full items-start justify-center">
          {props.options.map((option, index) => (
            <SidebarNavLink
              key={index}
              href={option.href}
              icon={option.icon}
              label={option.label}
            />
          ))}
        </nav>
      </div>
    </aside>
  )
}
