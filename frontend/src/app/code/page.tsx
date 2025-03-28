'use client';

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Skeleton } from '@mui/material';

type CodeData = {
  id: number;
  code: string;
  duree: string;
  statut: string;
  utilisateurActif: string;
};

const data: CodeData[] = [
  { id: 1, code: 'ABC123', duree: '2 heures', statut: 'Actif', utilisateurActif: 'Oui' },
  { id: 2, code: 'XYZ456', duree: '3 heures', statut: 'Expiré', utilisateurActif: 'Non' },
  { id: 3, code: 'LMN789', duree: '1 heure', statut: 'Actif', utilisateurActif: 'Oui' },
];

const commonTableStyles = {
  bgcolor: 'white',
  borderRadius: 2,
  boxShadow: 2,
  padding: '16px 24px',
  color: '#333',
};

const tableHeaderStyles = {
  backgroundColor: '#f5f5f5',
  fontWeight: 'bold',
  color: '#333',
  fontSize: '1.1rem',
};

const tableCellStyles = {
  fontSize: '1rem',
};

const buttonStyles = {
  backgroundColor: '#1976d2',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
};

export default function CodePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: 'center', maxWidth: '900px', width: '100%', borderRadius: 2, overflow: 'hidden', ...commonTableStyles }}>
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow sx={tableHeaderStyles}>
              <TableCell sx={tableCellStyles}>ID</TableCell>
              <TableCell sx={tableCellStyles}>Code</TableCell>
              <TableCell sx={tableCellStyles}>Durée de réservation</TableCell>
              <TableCell sx={tableCellStyles}>Statut</TableCell>
              <TableCell sx={tableCellStyles}>Utilisateur Actif</TableCell>
              <TableCell sx={tableCellStyles}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? // Si loading est true, afficher des Skeletons
                Array.from({ length: 3 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell sx={tableCellStyles}><Skeleton variant="text" width={40} /></TableCell>
                    <TableCell sx={tableCellStyles}><Skeleton variant="text" width={100} /></TableCell>
                    <TableCell sx={tableCellStyles}><Skeleton variant="text" width={80} /></TableCell>
                    <TableCell sx={tableCellStyles}><Skeleton variant="text" width={60} /></TableCell>
                    <TableCell sx={tableCellStyles}><Skeleton variant="text" width={60} /></TableCell>
                    <TableCell sx={tableCellStyles}><Skeleton variant="rectangular" width={80} height={40} /></TableCell>
                  </TableRow>
                ))
              : // Si loading est false, afficher les vraies données
                data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell sx={tableCellStyles}>{row.id}</TableCell>
                    <TableCell sx={tableCellStyles}>{row.code}</TableCell>
                    <TableCell sx={tableCellStyles}>{row.duree}</TableCell>
                    <TableCell sx={tableCellStyles}>{row.statut}</TableCell>
                    <TableCell sx={tableCellStyles}>{row.utilisateurActif}</TableCell>
                    <TableCell sx={tableCellStyles}>
                      <Button variant="contained" sx={buttonStyles}>Action</Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
