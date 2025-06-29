import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { fetchAPI } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const apiUrl = process.env.API_URL;

        if (!apiUrl) {
            throw new Error('API URL is not configured');
        }

        const backendRes = await fetchAPI('POST', `${apiUrl}/auth/login`, body);

        const data = await backendRes.data;
        
        if (backendRes.success) {
            // Create a response with the success message
            const response = NextResponse.json(
                { message: 'Login successful' },
                { status: 200 }
            );
            
            // Set the HTTP-only cookie with secure settings
            response.cookies.set({
                name: 'token',
                value: data.access_token || data.token,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 7 // 1 week
            });
            
            return response;
        } else {
            // Return the error from the backend
            return NextResponse.json(
                { 
                    message: backendRes.error || 'Login failed',
                    errors: backendRes.data?.errors
                },
                { status: backendRes.status }
            );
        }
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: 'An error occurred during login' },
            { status: 500 }
        );
    }
}

// Handle preflight OPTIONS request
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}
