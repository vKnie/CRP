'use client';

import React, { useState, useEffect } from 'react';
import { Box, Grid, Container, Typography, Avatar, Skeleton } from '@mui/material';
import { TrendingUp, Group } from '@mui/icons-material'; // Import des icônes

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); 
    return () => clearTimeout(timer);
  }, []);

  const commonBoxStyles = {
    bgcolor: 'white',
    height: 120,
    borderRadius: 2,
    boxShadow: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '16px 24px',
    color: '#333',
  };

  const avatarStyles = {
    width: 30,
    height: 30,
    marginRight: 1,
  };

  const typographyTitleStyles = {
    fontWeight: 600,
    color: '#555',
  };

  const typographyCountStyles = {
    alignSelf: 'center',
    marginTop: 1,
  };

  return (
    <Container maxWidth="lg">

      <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: 4 }}>

        <Grid item xs={12} sm={4}>
          <Box sx={commonBoxStyles}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              {loading ? (
                <Skeleton variant="circular" width={30} height={30} sx={{ marginRight: 1 }} />
              ) : (
                <Avatar sx={{ ...avatarStyles, backgroundColor: '#1976d2' }}>
                  <TrendingUp fontSize="small" />
                </Avatar>
              )}
              {loading ? (
                <Skeleton variant="text" width={120} height={20} />
              ) : (
                <Typography variant="body1" sx={typographyTitleStyles}>
                  Codes Actifs
                </Typography>
              )}
            </Box>
            {loading ? (
              <Skeleton variant="text" width={80} height={40} />
            ) : (
              <Typography variant="h3" sx={{ ...typographyCountStyles, color: '#1976d2' }}>
                40 / 98
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={commonBoxStyles}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              {loading ? (
                <Skeleton variant="circular" width={30} height={30} sx={{ marginRight: 1 }} />
              ) : (
                <Avatar sx={{ ...avatarStyles, backgroundColor: '#28a745' }}>
                  <Group fontSize="small" />
                </Avatar>
              )}
              {loading ? (
                <Skeleton variant="text" width={120} height={20} />
              ) : (
                <Typography variant="body1" sx={typographyTitleStyles}>
                  Utilisateurs Actifs
                </Typography>
              )}
            </Box>
            {loading ? (
              <Skeleton variant="text" width={80} height={40} />
            ) : (
              <Typography variant="h3" sx={{ ...typographyCountStyles, color: '#28a745' }}>
                50 / 120
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
