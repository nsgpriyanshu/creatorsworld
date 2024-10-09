// 'use client'

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
//         <MenuItem setActive={setActive} active={active} item="Creations">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/projects">Projects</HoveredLink>
//             <HoveredLink href="/products">Products</HoveredLink>
//           </div>
//         </MenuItem>
//         <Link href={'/blog'}>
//           <MenuItem setActive={setActive} active={active} item="Blog"></MenuItem>
//         </Link>
//       </Menu>
//     </div>
//   )
// }

// export default Navbar

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

'use client'

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar'
import { Kbd } from '@nextui-org/kbd'
import { Link } from '@nextui-org/link'
import { Input } from '@nextui-org/input'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import clsx from 'clsx'
import { SearchIcon } from '@/components/global/icons'
import { ThemeSwitch } from '@/components/global/theme-switch'
import { siteConfig } from '@/config/siteconfig'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'

const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-neutral-400" />
      }
      type="search"
    />
  )

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <Image
              as={NextImage}
              isBlurred
              width={70}
              height={70}
              src="https://raw.githubusercontent.com/nsgpriyanshu/creatorsworld/main/public/assets/cwlogo.png"
              alt="cw"
            />
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-4 lg:flex">
          {siteConfig.navItems.map(item => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:font-medium data-[active=true]:text-primary',
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden basis-1/5 sm:flex sm:basis-full" justify="end">
        <ThemeSwitch />
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      {/* Mobile View */}
      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 5
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 0
                      ? 'danger'
                      : 'foreground'
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}

export default Navbar
