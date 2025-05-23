import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AnimationContainer from './global/animation-container'
import Wrapper from './global/wrapper'

const PRODUCT_LINKS = [{ label: 'Notes', href: 'dashboard/notes' }]

const RESOURCES_LINKS = [
  { label: 'DSA & Algorithms', href: 'https://www.geeksforgeeks.org/data-structures/' },
  { label: 'Operating Systems', href: 'https://cs50.harvard.edu/' },
  { label: 'Computer Networks', href: 'https://www.studytonight.com/computer-networks/' },
  { label: 'DBMS (Database Systems)', href: 'https://www.javatpoint.com/dbms-tutorial' },
  { label: 'System Design', href: 'https://roadmap.sh/system-design' },
  {
    label: 'Machine Learning',
    href: 'https://www.coursera.org/specializations/machine-learning-introduction',
  },
]

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: 'https://contact-priyanshu-ps.vercel.app/' },
  { label: 'Privacy Policy', href: '/policy' },
  { label: 'Terms of Service', href: '/terms' },
]

const SOCIAL_LINKS = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Youtube, href: '#' },
]

const Footer = () => {
  return (
    <footer className="border-border relative w-full overflow-hidden border-t pt-16 pb-8 md:pb-0">
      <Wrapper className="">
        <AnimationContainer animation="scaleUp" delay={0.2}>
          <div className="bg-primary/50 lg:bg-primary/70 absolute inset-x-0 -top-1/8 mx-auto h-1/4 w-1/2 rounded-full blur-[6rem] lg:-top-1/2 lg:blur-[12rem]"></div>
        </AnimationContainer>

        <AnimationContainer animation="scaleUp" delay={0.3}>
          <div className="from-primary/0 via-primary/80 to-primary/0 absolute inset-x-0 top-0 mx-auto h-px w-4/5 bg-gradient-to-r"></div>
        </AnimationContainer>

        <div className="grid gap-8 xl:grid-cols-3 xl:gap-8">
          <AnimationContainer animation="fadeRight" delay={0.4}>
            <div className="flex flex-col items-start justify-start md:max-w-[300px]">
              <div className="flex items-center gap-2">
                <img src="icons/cwicon_dark.png" alt="cwicon" className="-mt-1 h-7 w-max" />
                <span className="text-lg font-medium lg:text-xl">Creator's World</span>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">India</p>
              {/* <div className="mt-6 flex items-center gap-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <AnimationContainer key={index} animation="fadeUp" delay={0.6 + index * 0.1}>
                    <Link
                      href={social.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <social.icon className="size-5" />
                    </Link>
                  </AnimationContainer>
                ))}
              </div> */}
            </div>
          </AnimationContainer>

          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <AnimationContainer animation="fadeUp" delay={0.5}>
                <div>
                  <h3 className="text-base font-medium">Product</h3>
                  <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                    {PRODUCT_LINKS.map((link, index) => (
                      <AnimationContainer
                        key={index}
                        animation="fadeLeft"
                        delay={0.6 + index * 0.1}
                      >
                        <li>
                          <Link
                            href={link.href}
                            className="hover:text-foreground transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      </AnimationContainer>
                    ))}
                  </ul>
                </div>
              </AnimationContainer>

              <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base font-medium">Resources</h3>
                  <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                    {RESOURCES_LINKS.map((link, index) => (
                      <AnimationContainer
                        key={index}
                        animation="fadeLeft"
                        delay={0.7 + index * 0.1}
                      >
                        <li>
                          <Link
                            href={link.href}
                            className="hover:text-foreground transition-colors"
                            target="_blank" // Opens in new tab
                          >
                            {link.label}
                          </Link>
                        </li>
                      </AnimationContainer>
                    ))}
                  </ul>
                </div>
              </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeUp" delay={0.5}>
              <div>
                <h3 className="text-base font-medium">Company</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {COMPANY_LINKS.map((link, index) => (
                    <AnimationContainer key={index} animation="fadeLeft" delay={0.8 + index * 0.1}>
                      <li>
                        <Link href={link.href} className="hover:text-foreground transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    </AnimationContainer>
                  ))}
                </ul>
              </div>
            </AnimationContainer>
          </div>
        </div>

        <AnimationContainer animation="fadeUp" delay={1}>
          <div className="border-border/40 mt-16 flex flex-col items-center justify-center border-t py-8 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Creator's World. All rights reserved.
            </p>
          </div>
        </AnimationContainer>
      </Wrapper>
    </footer>
  )
}

export default Footer
