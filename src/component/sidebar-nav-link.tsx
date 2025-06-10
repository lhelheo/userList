'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface SidebarNavLinkProps {
  label: string
  icon: ReactNode
  href: string
}

export const SidebarNavLink = (props: SidebarNavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === props.href

  return (
    <Link
      href={props.href}
      className={`flex items-center gap-2 px-8 py-3 w-full uppercase transition-all
        ease-linear hover:cursor-pointer text-white ${isActive ? 'bg-primary-500' : 'bg-primary-400'} hover:bg-primary-500`}
    >
      <div className={`${isActive ? 'text-orange-500' : 'text-white'}`}>
        {props.icon}
      </div>
      <div className="md:block hidden">{props.label}</div>
    </Link>
  )
}
