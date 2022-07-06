import s from './Footer.module.css'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function index() {
  return (
    <footer id="footer" className="bg-indigo-400 text-sm text-white">
      <aside className="bg-indigo-200">
        <div className="limit py-4">
          <div className={s.logos}>
            <a href="https://1password.com" className={s.sponsor}>
              <Image
                src="https://svelte.dev/whos-using-svelte/1password.svg"
                alt="1Password logo"
                width={100}
                height={20}
                loading="lazy"
              />
            </a>
            <a href="https://avast.com" className={s.sponsor}>
              <Image
                src="https://svelte.dev/whos-using-svelte/avast.svg"
                alt="Avast logo"
                width={100}
                height={30}
                loading="lazy"
              />
            </a>
            <a href="https://chess.com" className={s.sponsor}>
              <Image
                src="https://svelte.dev/whos-using-svelte/chess.svg"
                alt="Chess.com logo"
                width={100}
                height={35}
                loading="lazy"
              />
            </a>
            <a href="https://fusioncharts.com" className={s.sponsor}>
              <Image
                src="https://svelte.dev/whos-using-svelte/fusioncharts.svg"
                alt="FusionCharts logo"
                width={100}
                height={16}
                loading="lazy"
              />
            </a>
            <a href="https://godaddy.com" className={s.sponsor}>
              <Image
                src="https://svelte.dev/whos-using-svelte/godaddy.svg"
                alt="GoDaddy logo"
                width={100}
                height={34}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </aside>

      <div className="limit py-4">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <cite className="not-italic">© 2018 - 2022 My Company Networks, Inc</cite>
          </div>

          <div className="basis-1/2 justify-items-end">
            <nav className={s.nav}>
              <Link href="#">
                <a className={s.navItem}>Privacy Policy</a>
              </Link>
              <Link href="#">
                <a className={s.navItem}>Terms of Service</a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
