import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid"

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.nextUrl.pathname.startsWith("/api/get-url/")) {
        console.log("returning early")
        return
    }

  console.log("path??", req.nextUrl.pathname)
  
  const slug = req.nextUrl.pathname.split("/").pop()

  // if (slug?. (["webpack.js", "main.js", "_app.js", "_buildManifest.js", "_ssgManifest.js", "_error.js", "react-refresh.js", "_devMiddlewareManifest.json"])) {
     
  //   return 
  // }

  const data = await (await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)) .json()

  if (data?.url) {
    return NextResponse.redirect(data.url)
  }
}
