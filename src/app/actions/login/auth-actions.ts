'use server'

import { fetchAPI } from "@/lib/auth";

type FormState = {
  error: string | null;
  success?: boolean;
  redirectTo?: string;
};

export async function loginUser(prevState: FormState, formData: FormData): Promise<FormState> {
    const username = formData.get('username');
    const password = formData.get('password');
    
    if (!username || !password) {
        return { error: 'Username and password are required' };
    }
    
    try {
        const response = await fetchAPI('POST', '/api/auth/login', { username, password });
        
        const data = await response.data;
        
        if (!response.success) {
            return { error: data.error || 'Login failed', success: false };
        }
        
        return { 
            success: true, 
            redirectTo: '/dashboard',
            error: null 
        };
    } catch (error) {
        console.error('Login error:', error);
        return { 
            error: 'An unexpected error occurred. Please try again.',
            success: false 
        };
    }
}
