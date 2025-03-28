'use client';

import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Container maxWidth="xs" sx={{ textAlign: 'center', mt: 20 }}>
      <Box>
        <Typography variant="h3" color="error" sx={{ fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
          Oups ! Cette page n'existe pas.
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
          La page que vous recherchez est introuvable.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Retour à l'accueil
        </Button>
      </Box>
    </Container>
  );
}
