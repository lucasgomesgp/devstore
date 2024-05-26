import { AccountSettings } from './account-settings'
import { CartWidget } from './cart-widget'
import Link from 'next/link'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-700" />
        <AccountSettings />
      </div>
    </div>
  )
}
