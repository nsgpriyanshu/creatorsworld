"use client";

import Link from "next/link";
import Image from "next/image";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";

// Lucide icons
import {
  Package,
  Sword,
  PlayCircle,
  Network,
  Info,
  Mail,
  Lock,
  Scale,
  Palette,
  BookMarked,
  Cog,
} from "lucide-react";

// External icons
import { FaDiscord, FaGithub } from "react-icons/fa";

type FooterLink = {
  label: string;
  href: string;
  icon: React.ElementType;
};

/* ================= QUICK LINKS ================= */

const QUICK_LINKS: FooterLink[] = [
  { label: "Products", href: "/product", icon: Package },
  { label: "Services", href: "/services", icon: Cog },
  { label: "Blog", href: "/blog", icon: BookMarked },
  { label: "Contact", href: "/contact", icon: Mail },
];

/* ================= PARTNERS ================= */

const PARTNER_LINKS: FooterLink[] = [
  {
    label: "Shadow fight fanclub",
    href: "https://discord.gg/CEgXHFZSM9",
    icon: Sword,
  },
  {
    label: "Shadow Fighter's",
    href: "https://www.youtube.com/@shadow_fighters_3",
    icon: PlayCircle,
  },
  {
    label: "Nexus",
    href: "https://discord.gg/M24WCrSbkg",
    icon: Network,
  },
];

/* ================= COMPANY ================= */

const COMPANY_LINKS: FooterLink[] = [
  { label: "About Us", href: "/legal/about", icon: Info },
  { label: "Privacy Policy", href: "/legal/privacy", icon: Lock },
  { label: "Terms of Service", href: "/legal/terms", icon: Scale },
  { label: "Branding Guidelines", href: "/legal/brand", icon: Palette },
];

/* ================= SOCIAL ================= */

const SOCIAL_LINKS: FooterLink[] = [
  { label: "Discord", href: "https://discord.gg/VUMVuArkst", icon: FaDiscord },
  { label: "GitHub", href: "https://github.com/nsgpriyanshu", icon: FaGithub },
];

const Footer = () => {
  return (
    <footer className="border-border relative w-full overflow-hidden border-t pt-16 pb-8 md:pb-0">
      <Wrapper>
        {/* Glow */}
        <AnimationContainer animation="scaleUp" delay={0.1}>
          <div className="bg-accent/30 absolute inset-x-0 -top-1/4 mx-auto h-1/3 w-2/3 rounded-full blur-[8rem] lg:-top-1/2 lg:h-1/2 lg:blur-[16rem]" />
        </AnimationContainer>

        <AnimationContainer animation="scaleUp" delay={0.2}>
          <div className="from-accent/0 via-accent/50 to-accent/0 absolute inset-x-0 top-0 mx-auto h-px w-4/5 bg-linear-to-r" />
        </AnimationContainer>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 gap-8 xl:grid-cols-4 xl:gap-8">
          {/* Brand */}
          <AnimationContainer animation="fadeRight" delay={0.3}>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/dark/android-chrome-512x512.png"
                  alt="CW Icon"
                  width={32}
                  height={32}
                  className="-mt-1 dark:hidden"
                />
                <Image
                  src="/icons/light/android-chrome-512x512.png"
                  alt="CW Icon"
                  width={32}
                  height={32}
                  className="-mt-1 hidden dark:block"
                />
                <span className="text-foreground text-lg font-semibold lg:text-xl">
                  Creator&apos;s World
                </span>
              </div>

              <p className="text-foreground mt-3 text-xs tracking-wide">
                India
              </p>

              <div className="mt-6 flex items-center gap-3">
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <AnimationContainer
                      key={index}
                      animation="scaleUp"
                      delay={0.4 + index * 0.1}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        className="text-foreground transition-all duration-300 hover:scale-110 hover:text-[#f10a0a]"
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    </AnimationContainer>
                  );
                })}
              </div>
            </div>
          </AnimationContainer>

          {/* Quick Links */}
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <div>
              <h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="text-foreground mt-4 space-y-3 text-sm">
                {QUICK_LINKS.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <AnimationContainer
                      key={index}
                      animation="fadeLeft"
                      delay={0.4 + index * 0.1}
                    >
                      <li>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-[#f10a0a]"
                        >
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </Link>
                      </li>
                    </AnimationContainer>
                  );
                })}
              </ul>
            </div>
          </AnimationContainer>

          {/* Partners */}
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <div>
              <h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
                Partners
              </h3>
              <ul className="text-foreground mt-4 space-y-3 text-sm">
                {PARTNER_LINKS.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <AnimationContainer
                      key={index}
                      animation="fadeLeft"
                      delay={0.4 + index * 0.1}
                    >
                      <li>
                        <Link
                          href={link.href}
                          target="_blank"
                          className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-[#f10a0a]"
                        >
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </Link>
                      </li>
                    </AnimationContainer>
                  );
                })}
              </ul>
            </div>
          </AnimationContainer>

          {/* Company Guidelines */}
          <AnimationContainer animation="fadeUp" delay={0.3}>
            <div>
              <h3 className="text-foreground text-sm font-semibold tracking-wider uppercase">
                Company
              </h3>
              <ul className="text-foreground mt-4 space-y-3 text-sm">
                {COMPANY_LINKS.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <AnimationContainer
                      key={index}
                      animation="fadeLeft"
                      delay={0.4 + index * 0.1}
                    >
                      <li>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-[#f10a0a]"
                        >
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </Link>
                      </li>
                    </AnimationContainer>
                  );
                })}
              </ul>
            </div>
          </AnimationContainer>
        </div>

        {/* Footer bottom */}
        <AnimationContainer animation="fadeUp" delay={0.5}>
          <div className="border-border/40 mt-16 border-t py-8 text-center">
            <p className="text-foreground text-xs tracking-wider">
              © {new Date().getFullYear()} Creator&apos;s World. All rights
              reserved.
            </p>
          </div>
        </AnimationContainer>
      </Wrapper>
    </footer>
  );
};

export default Footer;
