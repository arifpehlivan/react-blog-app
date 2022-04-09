import { createRoot } from 'react-dom/client';
import "./styles/main.scss"
import AppRouter from './routers/AppRouter';
import "./App.css";
import { createStore } from 'redux';

const initialState = {
    count: 0
}

const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy: 1;
            return {
                count: state.count + incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count-1
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state
    }
})

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: "INCREMENT",
    incrementBy: 10
})

// store.dispatch({
//     type: "DECREMENT"
// })

// store.dispatch({
//     type: "RESET"
// })

// console.log(store.getState());

const container = document.getElementById('app');
const root = createRoot(container);


root.render(<AppRouter/>);
