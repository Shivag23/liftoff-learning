import { createRoot } from 'react-dom/client'
import { init } from '@emailjs/browser';
import App from './App.tsx'
import './index.css'

// Initialize EmailJS with your public key
init("VQhfJ8lbor0VykiDS");

createRoot(document.getElementById("root")!).render(<App />);
