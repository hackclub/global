import { NextResponse } from 'next/server'

export function middleware(request) {
  return request.nextUrl.locale != 'en'
    ? NextResponse.rewrite(`/copy/${request.nextUrl.locale}`)
    : NextResponse.redirect(`https://hackclub.com`)
}
