import { NextRequest, NextResponse } from "next/server";

// For server-side (middleware)
export const isAuthenticated = (request: NextRequest) => {
    const token = request.cookies.get('token')?.value;
    return !!token;
};

// For client-side (React components)
export const isClientAuthenticated = () => {
    if (typeof window !== 'undefined') {
        return !!localStorage.getItem('token');
    }
    return false;
};

export const isPublicRoute = (path: string) => {
    return ['/login', '/register'].includes(path);
};

export const login = (token: string) => {
    const response = NextResponse.next();
    response.cookies.set('token', token, { 
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        secure: process.env.NODE_ENV === 'production'
    });
    return response;
};

export const logout = (request: NextRequest) => {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    return response;
};

export const fetchAPI = async (
    method = 'GET',
    url: string,
    body?: {
        [key: string]: string | number | boolean | FormDataEntryValue
    }
) => {
    try {
        const params: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        };

        if (body) {
            params.body = JSON.stringify(body);
        }

        const response = await fetch(url, params);
        
        const data = await response.json();
            
        if (!response.ok) {
            return {
                success: false,
                data: null,
                error: data.message || 'Login failed',
                status: response.status
            };
        }
        return {
            success: true,
            data,
            error: null,
            status: response.status
        };
    } catch (error) {
        console.error('Login error:', error);
        return {
            error: 'An unexpected error occurred. Please try again.',
            success: false,
            status: 500
        };
    }
}