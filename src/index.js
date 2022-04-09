import { createRoot } from 'react-dom/client';
import "./styles/main.scss"
import AppRouter from './routers/AppRouter';
import "./App.css";
import { createStore } from 'redux';



const container = document.getElementById('app');
const root = createRoot(container);


root.render(<AppRouter/>);
