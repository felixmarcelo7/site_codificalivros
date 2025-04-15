import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('tudo')).render(
  <Router basename="/site_livros_react">
    <App />
  </Router>,
)
