"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import Wrapper from "./global/wrapper";
import AnimationContainer from "./global/animation-container";

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
  ShieldCheck,
  CogIcon,
} from "lucide-react";

import { FaDiscord, FaGithub } from "react-icons/fa";

type FooterLink = {
  label: string;
  href: string;
  icon: React.ElementType;
};

const QUICK_LINKS: FooterLink[] = [
  { label: "Products", href: "/product", icon: Package },
  { label: "Services", href: "/service", icon: Cog },
  { label: "Blog", href: "/blog", icon: BookMarked },
  { label: "Contact", href: "/contact", icon: Mail },
];

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

const COMPANY_LINKS: FooterLink[] = [
  { label: "About Us", href: "/legal/about", icon: Info },
  { label: "Privacy Policy", href: "/legal/privacy", icon: Lock },
  { label: "Terms of Service", href: "/legal/terms", icon: Scale },
  {
    label: "Community Rules",
    href: "/legal/community-rules",
    icon: ShieldCheck,
  },
  { label: "Branding Guidelines", href: "/legal/brand", icon: Palette },
];

const SOCIAL_LINKS: FooterLink[] = [
  { label: "Discord", href: "https://discord.gg/VUMVuArkst", icon: FaDiscord },
  { label: "GitHub", href: "https://github.com/nsgpriyanshu", icon: FaGithub },
];

type SystemStatus = {
  label: string;
  color: string;
};

const SYSTEM_STATUS: Record<
  "stable" | "development" | "unusable",
  SystemStatus
> = {
  stable: {
    label: "WEBSITE IN STABLE MODE",
    color: "text-blue-500",
  },
  development: {
    label: "WEBSITE IN DEVELOPMENT MODE",
    color: "text-yellow-500",
  },
  unusable: {
    label: "WEBSITE IN UNUSABLE MODE",
    color: "text-red-500",
  },
};

const ACTIVE_STATUS: keyof typeof SYSTEM_STATUS = "development";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="w-full border-t border-dashed border-border overflow-hidden">
      {" "}
      <Wrapper className="overflow-hidden">
        {/* BRAND SECTION */}
        <div className="py-8 border-b border-dashed border-border">
          <AnimationContainer animation="fadeUp">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/brand/cw-font-dark-3000x500.png"
                    alt="Creator's World wordmark"
                    width={250}
                    height={250}
                    className="dark:hidden"
                  />

                  <Image
                    src="/assets/brand/cw-font-light-3000x500.png"
                    alt="Creator's World wordmark"
                    width={250}
                    height={250}
                    className="hidden dark:block"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </AnimationContainer>
        </div>

        {/* LINKS GRID */}
        <div className="py-10 border-b border-dashed border-border grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 xl:gap-12">
          <AnimationContainer animation="fadeUp">
            <div>
              <h3 className="text-sm font-semibold">Quick Links</h3>

              <ul className="mt-4 space-y-3 text-sm">
                {QUICK_LINKS.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <li key={index}>
                      <Link
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimationContainer>

          <AnimationContainer animation="fadeUp">
            <div>
              <h3 className="text-sm font-semibold">Company</h3>

              <ul className="mt-4 space-y-3 text-sm">
                {COMPANY_LINKS.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimationContainer>
        </div>

        {/* PARTNERS SECTION */}
        <div className="py-10 border-b border-dashed border-border">
          <AnimationContainer animation="fadeUp">
            <div>
              <h3 className="text-sm font-semibold">Partners</h3>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                {PARTNER_LINKS.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <li key={index}>
                      <Link
                        href={link.href}
                        target="_blank"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimationContainer>
        </div>

        {/* SYSTEM STATUS */}
        <div className="py-6 border-b border-dashed border-border">
          <AnimationContainer animation="fadeUp">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <CogIcon
                className={`h-3.5 w-3.5 ${SYSTEM_STATUS[ACTIVE_STATUS].color}`}
              />
              <p className={SYSTEM_STATUS[ACTIVE_STATUS].color}>
                {SYSTEM_STATUS[ACTIVE_STATUS].label}
              </p>
            </div>
          </AnimationContainer>
        </div>

        {/* COPYRIGHT */}
        <div className="py-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {year} Creator's World. All rights reserved.
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
