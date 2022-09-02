import { NextResponse } from "next/server"

export function middleware(req) {
  console.log(req.headers.Authorization)

  let idToken
  if (
    req.headers.Authorization &&
    req.headers.Authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.Authorization.split("Bearer ")[1]
    return NextResponse.next()
  } else {
    console.error("No token found")
    return new Response("Auth required", {
      status: 401,
    })
  }
}
