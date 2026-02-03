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
import { Package, Cog, BookMarked, Mail } from "lucide-react";
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
   Animated Hamburger (Mobile)
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
      onClick={onClick}
      aria-label="Toggle menu"
      className="text-foreground relative h-6 w-6"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute top-1 left-0 h-0.5 w-full rounded-full bg-current"
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-3 left-0 h-0.5 w-full rounded-full bg-current"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute top-5 left-0 h-0.5 w-full rounded-full bg-current"
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
    setVisible(latest > 100);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* Desktop */}
      <motion.div
        animate={{
          width: visible ? "40%" : "100%",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
        style={{ minWidth: "800px" }}
        className={cn(
          "relative z-50 mx-auto hidden w-full items-center justify-between rounded-full py-4 backdrop-blur-xl lg:flex",
          visible && "bg-background/40 py-2",
        )}
      >
        <Wrapper className="flex items-center justify-between lg:px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/dark/android-chrome-512x512.png"
              alt="CW Icon"
              width={28}
              height={28}
              className="-mt-1 dark:hidden"
            />
            <Image
              src="/icons/light/android-chrome-512x512.png"
              alt="CW Icon"
              width={28}
              height={28}
              className="-mt-1 hidden dark:block"
            />
          </Link>

          <div className="text-muted-foreground absolute inset-0 mx-auto hidden w-max items-center justify-center gap-x-2 text-sm font-medium lg:flex">
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
                    delay={0.1 * index}
                  >
                    <Link
                      href={link.link}
                      className={cn(
                        "text-foreground relative flex items-center gap-2 px-2 py-1 font-medium",
                        "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#f10a0a] after:transition-transform after:duration-300",
                        "hover:after:scale-x-100",
                        isActive && "after:scale-x-100",
                      )}
                    >
                      {IconComponent && <IconComponent size={16} />}
                      {link.name}
                    </Link>
                  </AnimationContainer>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-x-4">
            <ModeToggle />
            <Link href="https://discord.gg/VUMVuArkst">
              <Button size="sm">Join</Button>
            </Link>
          </div>
        </Wrapper>
      </motion.div>

      {/* ---------------- MOBILE ---------------- */}
      <motion.div
        animate={{
          y: visible ? 12 : 0,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className={cn(
          "mx-auto mt-4 w-[92%] lg:hidden",
          "rounded-2xl",
          "bg-background/40 overflow-hidden backdrop-blur-xl",
        )}
      >
        <Wrapper className="flex items-center justify-between px-4 py-3">
          <Link href="/">
            <Image
              src="/icons/dark/android-chrome-512x512.png"
              alt="CW Icon"
              width={28}
              height={28}
              className="dark:hidden"
            />
            <Image
              src="/icons/light/android-chrome-512x512.png"
              alt="CW Icon"
              width={28}
              height={28}
              className="hidden dark:block"
            />
          </Link>

          <div className="flex items-center gap-x-3">
            <ModeToggle />
            <Button size="sm">
              <Link href="https://discord.gg/VUMVuArkst">Join</Link>
            </Button>
            <HamburgerButton open={open} onClick={() => setOpen(!open)} />
          </div>
        </Wrapper>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="px-4 pb-6"
            >
              <div className="mt-4 flex flex-col gap-2">
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
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium",
                        "text-foreground/80 hover:bg-white/5",
                        isActive && "text-[#f10a0a]",
                      )}
                    >
                      {Icon && <Icon size={16} />}
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
