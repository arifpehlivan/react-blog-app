import { createRoot } from 'react-dom/client';
import "./styles/main.scss"
import AppRouter from './routers/AppRouter';
import "./App.css"

const container = document.getElementById('app');
const root = createRoot(container);


root.render(<AppRouter/>);
