import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import ProfileForm from './components/ProfileForm.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <ProfileForm />
  </StrictMode>,
)
