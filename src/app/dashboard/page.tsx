'use client'

import { useRouter } from 'next/navigation';
import { Button, Typography, Box, Container } from '@mui/material';

export default function Dashboard() {
  const router = useRouter();
  
  const handleLogout = async () => {
    try {
      // Clear client-side token
      localStorage.removeItem('token');
      
      // Call server-side logout
      await fetch('/api/auth/logout', { method: 'POST' });
      
      // Redirect to login page
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1">
            Welcome to Your Dashboard
          </Typography>
          <Button 
            variant="outlined" 
            color="error"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
        
        <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <Typography variant="body1">
            This is a protected dashboard page. You can only see this if you&apos;re authenticated.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
