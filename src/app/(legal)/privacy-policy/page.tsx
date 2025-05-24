import PrivacyPolicy from '@/components/legal/privacy'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - Privacy Policy`,
  description: "Privacy Policy for Creator's World",
}

const PrivacyPolicyPage = () => {
  return (
    <div className="relative flex w-full flex-col">
      <section className="w-full">
        <PrivacyPolicy />
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
