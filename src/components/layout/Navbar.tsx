import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Blog', href: '/blog' },
  { name: 'Shop', href: '/shop' },
]

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8 bg-white shadow-sm gap-2 md:gap-0">
      {/* Logo and Brand */}
      <Link href="/" className="flex items-center gap-3 group mb-2 md:mb-0">
        <Image src="/SF_logo_1.png" alt="Simply Fit Logo" width={66} height={66} className="rounded-full border border-primary shadow group-hover:scale-105 transition-transform" />
        <span className="text-xl md:text-2xl font-extrabold text-primary tracking-tight group-hover:text-primary-dark transition-colors">Simply Fit</span>
      </Link>
      {/* Navigation Links */}
      <ul className="flex gap-4 md:gap-8 flex-wrap justify-center">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="text-base md:text-lg font-semibold text-secondary hover:text-primary transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
} 