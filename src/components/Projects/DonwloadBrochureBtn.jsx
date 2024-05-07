import Link from 'next/link'

const DownloadBrochureBtn = () => {
  return (
    <Link href="/contact/#form" className="inline-block text-xl bg-red-500 px-11 py-4 mt-6 lg:mt-11 rounded-lg hover:bg-royal transition-all duration-300">
    Download Brochure
  </Link>
  )
}

export default DownloadBrochureBtn
