import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/index.scss"
import Router from "./Router.tsx";
import configAxios from "./api/configAxios.ts";

configAxios()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Router/>
  </React.StrictMode>,
)
