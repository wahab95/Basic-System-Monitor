import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import { ThemeProvider } from './contexts/Theme.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import './styles/root.css';
import Root from './pages/Root.jsx';
import App from './pages/Main/App.jsx';
import Settings from './pages/Settings/index.jsx';
import About from './pages/About/index.jsx';

const router = createHashRouter([
  {
    path: "/", Component: Root, children: [
      { index: true, Component: App },
      { path: '/settings', Component: Settings },
      { path: '/about', Component: About }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </ThemeProvider>
);


