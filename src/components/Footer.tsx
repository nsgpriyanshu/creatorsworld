'use client'

import React from 'react'
import Link from 'next/link'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'

function Footer() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <footer className="relative z-10 flex flex-col bg-black py-12 text-gray-400">
        <div className="mx-auto my-5 flex justify-start">
          <Image
            as={NextImage}
            isBlurred
            width={70}
            height={70}
            src="/assets/cwlogo.png"
            alt="cw"
          />
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">About Us</h2>
            <p className="mb-4">
              We are working hard to bring you more features for a better user experience.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link href="/" className="transition-colors duration-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/projects" className="transition-colors duration-300 hover:text-white">
                  Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/products" className="transition-colors duration-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="transition-colors duration-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Social Handles</h2>
            <ul>
              <li className="mb-2">
                <Link
                  href="https://discord.gg/7SAcEv7MDd"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Discord
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://github.com/nsgpriyanshu"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Our Partners</h2>
            <ul>
              <li className="mb-2">
                <Link
                  href="https://discord.gg/CEgXHFZSM9"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Shadow fight fanclub
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="transition-colors duration-300 hover:text-white">
                  Shadow Fighter's
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://discord.gg/M24WCrSbkg"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Nexus
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
