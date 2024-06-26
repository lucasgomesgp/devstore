/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import { Product } from '@/data/types/product'
import { api } from '@/data/api'
import colors from 'tailwindcss/colors'
import { env } from '@/env'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour each update request
    },
  })
  const products = await response.json()
  return products
}

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(
    product.image,
    process.env.NODE_ENV === 'production'
      ? process.env.VERCEL_URL
      : env.APP_URL,
  ).toString()
  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
