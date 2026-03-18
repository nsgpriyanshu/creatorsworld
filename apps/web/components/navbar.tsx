"use client";

import { Button } from "@repo/ui/components/ui/button";
import { NAV_LINKS } from "../constants/nav_links";
import { useClickOutside } from "@repo/ui/hooks/use-click-outside";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Package, Cog, BookMarked, Mail, HandHeart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AnimationContainer from "./global/animation-container";
import Wrapper from "./global/wrapper";
import { cn } from "@repo/ui/lib/utils";
import { ModeToggle } from "./global/theme-toggle";
import Image from "next/image";

const ICON_MAP: Record<string, React.ComponentType<{ size: number }>> = {
  Package,
  Cog,
  BookMarked,
  Mail,
};

/* ---------------------------------------------
   Animated Hamburger (Minimal)
---------------------------------------------- */
const HamburgerButton = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={open}
      aria-controls="mobile-navigation"
      className="relative h-6 w-6 text-foreground"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-1 left-0 h-[2px] w-full bg-current"
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-3 left-0 h-[2px] w-full bg-current"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-5 left-0 h-[2px] w-full bg-current"
      />
    </button>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const mobileMenuRef = useClickOutside(() => {
    if (open) setOpen(false);
  });

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 80);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* Desktop Navbar */}
      <motion.div
        animate={{
          width: visible ? "46%" : "100%",
          y: visible ? 18 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 35,
        }}
        style={{ minWidth: "760px" }}
        className={cn(
          "relative mx-auto hidden w-full items-center justify-between",
          "rounded-md backdrop-blur-xl",
          "lg:flex",
          visible && "bg-background/50 border border-border/40",
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Creator's World home">
            <Image
              src="/icons/dark/android-chrome-512x512.png"
              alt="Creator's World logo"
              width={26}
              height={26}
              className="dark:hidden"
            />
            <Image
              src="/icons/light/android-chrome-512x512.png"
              alt="Creator's World logo"
              width={26}
              height={26}
              className="hidden dark:block"
            />
          </Link>

          {/* Nav Links */}
          <nav
            aria-label="Primary"
            className="absolute inset-0 mx-auto hidden w-max items-center gap-1 text-sm font-medium text-muted-foreground lg:flex"
          >
            <AnimatePresence>
              {NAV_LINKS.map((link, index) => {
                const isActive =
                  pathname === link.link ||
                  pathname.startsWith(`${link.link}/`);
                const IconComponent = ICON_MAP[link.icon];

                return (
                  <AnimationContainer
                    key={index}
                    animation="fadeDown"
                    delay={0.08 * index}
                  >
                    <Link
                      href={link.link}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5",
                        "transition-colors duration-200",
                        "rounded-md",
                        "hover:bg-muted/40",
                        "hover:text-foreground",
                        isActive
                          ? "text-foreground bg-muted/40"
                          : "text-muted-foreground",
                      )}
                    >
                      {IconComponent && <IconComponent size={15} />}
                      {link.name}
                    </Link>
                  </AnimationContainer>
                );
              })}
            </AnimatePresence>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ModeToggle />

            <Button
              size="sm"
              variant="default"
              className="gap-2 rounded-md"
              render={
                <Link
                  href="https://discord.gg/VUMVuArkst"
                  rel="noopener noreferrer"
                  target="_blank"
                />
              }
            >
              <HandHeart className="h-4 w-4" />
              Join
            </Button>
          </div>
        </Wrapper>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        animate={{ y: visible ? 12 : 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 30 }}
        className={cn(
          "mx-auto mt-4 w-[92%] lg:hidden",
          "rounded-md",
          "border border-border/40",
          "bg-background/60 backdrop-blur-xl overflow-hidden",
        )}
      >
        <Wrapper className="flex items-center justify-between px-4 py-3">
          <Link href="/" aria-label="Creator's World home">
            <Image
              src="/icons/dark/android-chrome-512x512.png"
              alt="Creator's World logo"
              width={26}
              height={26}
              className="dark:hidden"
            />
            <Image
              src="/icons/light/android-chrome-512x512.png"
              alt="Creator's World logo"
              width={26}
              height={26}
              className="hidden dark:block"
            />
          </Link>

          <div className="flex items-center gap-3">
            <ModeToggle />

            <Button
              size="sm"
              variant="default"
              className="gap-2 rounded-md"
              render={
                <Link
                  href="https://discord.gg/VUMVuArkst"
                  rel="noopener noreferrer"
                  target="_blank"
                />
              }
            >
              <HandHeart className="h-4 w-4" />
              Join
            </Button>

            <HamburgerButton open={open} onClick={() => setOpen(!open)} />
          </div>
        </Wrapper>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="px-3 pb-5"
            >
              <nav aria-label="Mobile primary" className="mt-3 flex flex-col gap-1">
                {NAV_LINKS.map((link, idx) => {
                  const isActive =
                    pathname === link.link ||
                    pathname.startsWith(`${link.link}/`);
                  const Icon = ICON_MAP[link.icon];

                  return (
                    <Link
                      key={idx}
                      href={link.link}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 text-sm",
                        "rounded-md transition-colors",
                        "hover:bg-muted/40",
                        isActive
                          ? "bg-muted/40 text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {Icon && <Icon size={16} />}
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
