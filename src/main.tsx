import React from "../modules/react"
import ReactDOM from "../modules/react-dom"
import { App } from "./App"

// Inicializa o projeto renderizando o App na div,com id root
ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));