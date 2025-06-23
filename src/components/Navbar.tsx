import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Mi App Veterinaria</Link>
      </div>
      <div className="navbar-links">
        {isAuthenticated ? (
          <>
            <Link to="/mis-mascotas">Mis Mascotas</Link> {/* <-- ENLACE AÑADIDO */}
            <Link to="/profile">Perfil</Link>
            <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;