'use client'

import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import blogData from '@/data/blog.json'

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <Link href={'/#getting-started'}>
          <MenuItem setActive={setActive} active={active} item="Getting Started"></MenuItem>
        </Link>
        <Link href={'/projects'}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/projects">nstypocolors</HoveredLink>
              <HoveredLink href="/projects">powerop</HoveredLink>
              {/* <HoveredLink href="/projects">Soon</HoveredLink> */}
            </div>
          </MenuItem>
        </Link>
        <Link href={'/blog'}>
          <MenuItem setActive={setActive} active={active} item="Blog">
            <div className="flex flex-col space-y-4 text-sm">
              {blogData.blogs.map(blog => (
                <HoveredLink key={blog.slug} href={`/blog/posts#${blog.slug}`}>
                  {blog.section}
                </HoveredLink>
              ))}
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
