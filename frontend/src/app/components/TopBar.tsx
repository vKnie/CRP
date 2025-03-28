'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Box, Avatar, Button, Skeleton } from '@mui/material';
import { Code, Home } from '@mui/icons-material';
import Image from 'next/image';

export default function TopBar() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppBar position="sticky" sx={{ padding: '0 30px', backgroundColor: 'white', marginBottom: 5 }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {loading ? (
              <Skeleton variant="circular" width={40} height={40} sx={{ marginRight: 2 }} />
            ) : (
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} style={{ marginRight: 16 }} />
            )}
            {loading ? (
              <Skeleton variant="text" sx={{ fontSize: '1rem', width: 180 }} />
            ) : (
              <Typography variant="h6" sx={{ color: '#333' }}>
                Code Reservation Platform
              </Typography>
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* {loading ? (
              <Skeleton variant="circular" width={40} height={40} />
            ) : (
              <IconButton color="inherit">
                <Badge badgeContent={4} color="error">
                  <NotificationsOutlined sx={{ color: '#333' }} />
                </Badge>
              </IconButton>
            )} */}

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {loading ? (
                  <Skeleton variant="circular" width={40} height={40} sx={{ marginRight: 1 }} />
                ) : (
                  <Avatar sx={{ marginRight: 1, bgcolor: '#3f51b5', color: 'white' }}>N</Avatar>
                )}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  {loading ? (
                    <>
                      <Skeleton variant="text" sx={{ width: 100, height: 20 }} />
                      <Skeleton variant="text" sx={{ width: 80, height: 20 }} />
                    </>
                  ) : (
                    <>
                      <Typography variant="body2" sx={{ color: '#555', fontWeight: 'bold' }}>
                        Non personne
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#777' }}>
                        Poste
                      </Typography>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: '100%', borderBottom: '1px solid #ddd' }} />

        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center', padding: '10px 0'}}>
          {loading ? (
            <>
              <Skeleton variant="rectangular" width={120} height={40} sx={{ marginRight: 2 }} />
              <Skeleton variant="rectangular" width={120} height={40} sx={{ marginRight: 2 }} />
              <Skeleton variant="rectangular" width={120} height={40} />
            </>
          ) : (
            <>
              <Link href="/" passHref>
                <Button sx={{ color: '#777', display: 'flex', alignItems: 'center', marginRight: 2 }}>
                  <Home sx={{ marginRight: 1 }} /> Home
                </Button>
              </Link>

              <Link href="/code" passHref>
                <Button sx={{ color: '#777', display: 'flex', alignItems: 'center', marginRight: 2 }}>
                  <Code sx={{ marginRight: 1 }} />Code
                </Button>
              </Link>

            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
