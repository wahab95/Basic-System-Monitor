import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {dirname as __} from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    
    emptyOutDir:true,
    cssCodeSplit:false,
    
    
  },
  appType:'spa',
  base:'./',
  
  
  
  
  
  
})
