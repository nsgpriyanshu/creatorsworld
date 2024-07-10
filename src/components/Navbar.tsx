'use client'

import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu'
import { cn } from '@/utils/cn'
import Link from 'next/link'

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn('fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl', className)}>
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Creations">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects">Projects</HoveredLink>
            <HoveredLink href="/products">Products</HoveredLink>
          </div>
        </MenuItem>
        <Link href={'/blog'}>
          <MenuItem setActive={setActive} active={active} item="Blog"></MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar

// import React, { useState } from 'react'
// import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu'
// import { cn } from '@/utils/cn'
// import Link from 'next/link'

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null)
//   return (
//     <div className={cn('fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl', className)}>
//       <Menu setActive={setActive}>
//         <Link href={'/'}>
//           <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
//         </Link>
//         <Link href={'/projects'}>
//           <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
//         </Link>
//         <Link href={'/products'}>
//           <MenuItem setActive={setActive} active={active} item="Products"></MenuItem>
//         </Link>
//         <Link href={'/blog'}>
//           <MenuItem setActive={setActive} active={active} item="Blog"></MenuItem>
//         </Link>
//       </Menu>
//     </div>
//   )
// }

// export default Navbar
