'use client'

import { useActionState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Typography, Box } from '@mui/material';
import { registerUser } from '../actions/register/actions';
import SubmitButton from '@/components/SubmitButton';
import PersonalForm from './PersonalFields';
import AddressForm from './AddressFields';

type FormState = {
    error: string | null;
    success?: boolean;
    message?: string;
};

const initialState: FormState = {
    error: null,
};

export default function RegisterForm() {
    const [state, formAction] = useActionState<FormState, FormData>(
        registerUser,
        initialState
    );
    const router = useRouter();

    useEffect(() => {
        if (state?.success && state.message) {
            router.push('/login');
        }
    }, [state, router]);

    return (
        <form action={formAction}>
            <PersonalForm />
            <AddressForm />
            <Link href="/login">
                <Typography variant="body2" color="primary" sx={{ mt: 1, display: 'block' }}>
                    <i>Already have an account?</i>
                </Typography>
            </Link>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <SubmitButton label="Register" loadingLabel="Registering..." />
            </Box>
            {state?.error && (
                <Typography color="error" variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                    {state.error}
                </Typography>
            )}
            {state?.message && (
                <Typography color="success" variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                    {state.message}
                </Typography>
            )}
        </form>
    );
}