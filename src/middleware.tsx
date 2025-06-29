import { isAuthenticated, isPublicRoute } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    if (isPublicRoute(path)) {
        if (isAuthenticated(request)) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
        return NextResponse.next();
    }

    if (isAuthenticated(request)) {
        return NextResponse.next();
    }
    
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', path);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: ['/((?!api|_next/|favicon.ico|\\.well-known).*)'],
};