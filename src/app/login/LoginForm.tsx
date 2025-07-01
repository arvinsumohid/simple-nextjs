'use client';

import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { loginUser } from '../actions/login/auth-actions';
import CustomTextField from '@/components/CustomTextField';
import SubmitButton from '@/components/SubmitButton';
import { Typography, Box, Divider } from '@mui/material';

type FormState = {
  error: string | null;
  success?: boolean;
  redirectTo?: string;
};

const initialState: FormState = {
  error: null,
};

export default function LoginForm() {
    const [state, formAction] = useActionState<FormState, FormData>(
        loginUser,
        initialState
    );
    const router = useRouter();

    useEffect(() => {
        if (state?.success && state.redirectTo) {
            router.push(state.redirectTo);
        }
    }, [state, router]);

    return (
        <form action={formAction}>
            <Divider sx={{ mb: 2 }}>Please enter your login credentials</Divider>
            <CustomTextField
                label="Username"
                placeholder="Username"
                name="username"
                type="text"
                required
            />
            <CustomTextField
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                required
            />
            <Link href="/register">
                <Typography variant="body2" color="primary" sx={{ mt: 1, display: 'block' }}>
                    <i>Don&apos;t have an account?</i>
                </Typography>
            </Link>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <SubmitButton label="Login" loadingLabel="Logging in..." />
            </Box>
            {state?.error && (
                <Typography color="error" variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                    {state.error}
                </Typography>
            )}
        </form>
    );
}
