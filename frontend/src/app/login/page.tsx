'use client';

import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Box, Grid, Skeleton } from '@mui/material';

export default function Login() {
  const [formLoading, setFormLoading] = useState(true);

  useEffect(() => {
    setFormLoading(false); // Simule la fin du chargement du formulaire
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 8,
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#fff',
      }}>
        {formLoading ? (
          <Skeleton variant="text" width={150} height={30} sx={{ marginBottom: 2 }} />
        ) : (
          <Typography variant="h5" component="h1" sx={{ marginBottom: 2 }}>
            Se connecter
          </Typography>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            {formLoading ? (
              <Skeleton variant="rectangular" width="100%" height={56} />
            ) : (
              <TextField
                label="Nom d'utilisateur"
                variant="outlined"
                fullWidth
                required
              />
            )}
          </Grid>
          <Grid item xs={12}>
            {formLoading ? (
              <Skeleton variant="rectangular" width="100%" height={56} />
            ) : (
              <TextField
                label="Mot de passe"
                variant="outlined"
                type="password"
                fullWidth
                required
              />
            )}
          </Grid>
          <Grid item xs={12}>
            {formLoading ? (
              <Skeleton variant="rectangular" width="100%" height={36} />
            ) : (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Se connecter
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
