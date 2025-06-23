import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import { ProtectedRoute } from './components/ProtectedRoute';

// --- Importa TODAS tus páginas ---
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import MisMascotasPage from './pages/MisMascotasPage'; // <-- NUEVA PÁGINA
import AddPetPage from './pages/AddPetPage';         // <-- NUEVA PÁGINA

function App() {
  return (
    // 1. AuthProvider debe envolver a BrowserRouter.
    <AuthProvider>
      <BrowserRouter>
        {/* El Navbar ahora se mostrará en todas las páginas */}
        <Navbar />

        <main style={{ padding: '1rem' }}>
          <Routes>
            {/* --- Rutas Públicas (Cualquiera puede verlas) --- */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* --- Rutas Privadas (Solo para usuarios que han iniciado sesión) --- */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/mis-mascotas" element={<MisMascotasPage />} />
              <Route path="/añadir-mascota" element={<AddPetPage />} />
              {/* Si añades más páginas protegidas, irían aquí */}
            </Route>

            {/* Ruta para cualquier otra URL que no coincida */}
            <Route path="*" element={<h2>Página no encontrada (404)</h2>} />
          </Routes>
        </main>
        
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


