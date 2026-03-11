import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.json()

  const resp = await fetch('https://postal.hackclub.com/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      api_key: process.env.POSTAL_API_KEY!,
      name: data.name,
      email: data.email,
      list: process.env.POSTAL_LIST_ID!,
      boolean: 'true'
    }).toString()
  }).then(r => r.text())

  return NextResponse.json(resp)
}
