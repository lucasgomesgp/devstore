'use client'

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'

import { Skeleton } from '@/components/skeleton'

interface Params extends ReadonlyURLSearchParams {
  q: string
}
export default function SearchLoading() {
  const searchParams = useSearchParams() as Params
  const { q: query } = searchParams
  return (
    <div className="flex flex-col gap-4">
      <p className="text sm">
        Resultados para: <span className="font-semibold">{query ?? ''}</span>
        <div className="grid grid-cols-3 gap-6">
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
        </div>
      </p>
    </div>
  )
}
