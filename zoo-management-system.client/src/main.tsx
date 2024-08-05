/*REACT*/
import React from 'react'
import ReactDOM from 'react-dom/client'
/*REDUX*/
import { Provider } from "react-redux"
import store from "./store/store.ts";
/*COMPONENTS*/
import App from './App.tsx'
import '../public/index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)