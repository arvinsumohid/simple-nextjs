'use client'

import { useFormStatus } from 'react-dom';
import { Button } from '@mui/material';

export default function SubmitButton({ label, loadingLabel }: { label: string, loadingLabel: string }) {
    const { pending } = useFormStatus();
    return (
        <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            disabled={pending}
        >
            {pending ? loadingLabel : label}
        </Button>
    );
}