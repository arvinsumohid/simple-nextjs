import { fetchAPI } from "@/lib/auth";

type FormState = {
    error: string | null;
    success?: boolean;
    message?: string;
};

export async function registerUser(prevState: FormState, formData: FormData): Promise<FormState> {
    try {
        const response = await fetchAPI('POST', '/api/auth/register', Object.fromEntries(formData));
        
        const data = await response.data;
        
        if (!response.success) {
            return { error: data.error || 'Registration failed', success: false, message: 'Registration failed' };
        }
        
        return { 
            error: null,
            message: 'Registration successful',
            success: true,
        };
    } catch (error) {
        console.error('Registration error:', error);
        return { error: 'An error occurred during registration', success: false, message: 'An error occurred during registration' };
    }
}