import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '../src/components/gradient.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing } from './pages/landing/Landing';
import { Login } from './pages/auth/Login';
import { SignUp } from './pages/auth/SignUp';
import { RootLayout } from './layout/RootLayout';
import { Home } from './pages/home/Home';
import { Albums } from './pages/albums/Albums';

const router = createBrowserRouter([
  {
    // index: true,
    element: <Landing />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: '/album',
      element: <Albums />,
    }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
