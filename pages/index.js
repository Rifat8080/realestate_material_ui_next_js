"use client";
import FloatingNavbar from '@/components/navbar'; // Fix the import path
import { Box } from '@mui/material';

export default function Page() {
  return (
    <>
      <FloatingNavbar />
      <Box sx={{ mt: 12, p: 2 }}> {/* Add margin top to prevent content from hiding under navbar */}
        <h1>Hello Next.js!</h1>
      </Box>
    </>
  );
}