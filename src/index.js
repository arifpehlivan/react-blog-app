import { createRoot } from 'react-dom/client';
import "./styles/main.scss"
import AppRouter from './routers/AppRouter';
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "./store/configureStore";
import { addBlog, removeBlog, editBlog} from "./actions/blogs"

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
})

const blog1 = store.dispatch(addBlog({title: "title", desc: "desc", dateAdded: new Date().toLocaleDateString()}));
const blog2 = store.dispatch(addBlog({title: "title", desc: "desc", dateAdded: new Date().toLocaleDateString()}));
store.dispatch(addBlog({title: "title 1", desc: "desc 1", dateAdded: new Date().toLocaleDateString()}));
store.dispatch(removeBlog({id: blog1.blog.id }));
store.dispatch(editBlog(blog2.blog.id, {title: "Updated"}));

const container = document.getElementById('app');
const root = createRoot(container);


root.render(<Provider store={store}><AppRouter/></Provider>);
