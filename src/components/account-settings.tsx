'use client'

import { SignInButton, UserButton, useUser } from '@clerk/nextjs'

export function AccountSettings() {
  const { isLoaded, isSignedIn } = useUser()
  if (!isLoaded) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      {isSignedIn ? <span className="text-sm">Account</span> : <SignInButton />}
      <UserButton />
    </div>
  )
}
