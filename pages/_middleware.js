import { NextResponse } from 'next/server'

export function middleware(request) {
  if (!request.nextUrl.pathname.includes('copy')) {
    return request.nextUrl.locale != 'en'
      ? NextResponse.rewrite(`https://global.hackclub.dev/copy/${request.nextUrl.locale}`)
      : NextResponse.redirect(`https://hackclub.com`)
  } else {
    return null
  }
}
