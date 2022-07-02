import s from './NavBar.module.css'

import React from 'react'
import Link from 'next/link'

import Avatar from '@/components/UI/Avatar'

export default function NavBar() {
  return (
    <header id="branding" className="border-b-2 sticky top-0">
      <div className="limit py-4">
        <div className="flex flex-row">
          <div className="basis-1/4">
            <aside className={s.logo}>
              <Avatar nameIcon="sailing" size={48} customStyles="bg-indigo-100" />
              <span className={s.logoTitle}>NFT Market</span>
            </aside>
          </div>

          <div className="basis-2/6"></div>

          <div className="basis-1/2">
            <nav aria-label="main navigation">
              <ul>
                <li>
                  <Link href="https://www.google.com/search?q=%23%2521">Google Search</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
