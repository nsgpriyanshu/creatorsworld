import ProfilePage from '@/components/blog/profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Author Profile`,
  description: 'View and manage your blog profile, including your posts and settings.',
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Author Profile`,
    description: 'View and manage your blog profile, including your posts and settings.',
    images: [
      {
        url: '/assets/og_bp.png',
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_APP_NAME} Blog Open Graph Image`,
      },
    ],
  },
}

const AuthorProfilePage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <ProfilePage />
      </section>
    </div>
  )
}

export default AuthorProfilePage
