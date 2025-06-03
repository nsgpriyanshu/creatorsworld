import UploadBlogPage from '@/components/blog/upload-blog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Upload Blog`,
  description: 'Upload your blog posts to share with the community.',
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Upload Blog`,
    description: 'Upload your blog posts to share with the community.',
    images: [
      {
        url: '/assets/og_blog.png',
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_APP_NAME} Blog Open Graph Image`,
      },
    ],
  },
}

const BlogUploadPage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <UploadBlogPage />
      </section>
    </div>
  )
}

export default BlogUploadPage
