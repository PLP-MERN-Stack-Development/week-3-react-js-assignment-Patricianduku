import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-500 dark:bg-gray-900 text-white px-6 py-4 shadow">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <div className="flex gap-4 items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink>
          <NavLink to="/tasks" className={({ isActive }) => isActive ? 'underline' : ''}>Tasks</NavLink>
          <NavLink to="/api" className={({ isActive }) => isActive ? 'underline' : ''}>Users</NavLink>
          <button
            onClick={toggleTheme}
            className="px-2 py-1 rounded bg-white text-black dark:bg-black-200"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
