import { NextResponse } from 'next/server'

export function middleware(request) {
  return new Response(JSON.stringify({ locale: request.nextUrl.locale }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  // return request.nextUrl.locale != 'en'
  //  ? NextResponse.rewrite(`/copy/${request.nextUrl.locale}`)
  //  : NextResponse.redirect(`https://hackclub.com`)
}
