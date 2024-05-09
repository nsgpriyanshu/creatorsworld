'use client'
import React from 'react'
import { SparklesCore } from './ui/sparkles'
import Link from 'next/link'

function Footer() {
  return (
    <div className="h-auto relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              We are working hard to bring you more features for a better user experience.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <div className="flex space-x-4">
              <ul>
                <li>
                  <Link href="/" className="hover:text-white transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors duration-300">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Join Us</h2>
            <div className="flex space-x-4">
              <ul>
                <li>
                  <Link
                    href="https://discord.gg/7SAcEv7MDd"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/nsgpriyanshu"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Our Partners</h2>
            <div className="flex space-x-4">
              <ul>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Shadow Fighter's
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    Nexus
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
