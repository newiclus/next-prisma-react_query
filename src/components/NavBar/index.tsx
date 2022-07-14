import s from './NavBar.module.css'

import Link from 'next/link'

import Avatar from '@/components/UI/Avatar'

export default function NavBar() {
  return (
    <header id="branding" className="bg-white border-b-1 shadow-md sticky top-0">
      <div className="limit py-4">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <aside className={s.logo}>
              <Avatar nameIcon="sailing" size={48} className="bg-indigo-400" />
              <span className={s.logoTitle}>NFT Market</span>
            </aside>
          </div>

          <div className="basis-1/2 self-center">
            <nav className={s.content} aria-label="main navigation">
              <Link href="/users">
                <a className={s.item}>Top Users</a>
              </Link>
              <Link href="/nfts">
                <a className={s.item}>Top NFTs</a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
