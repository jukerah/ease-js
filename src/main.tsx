import Ease from "../modules/ease"
import EaseDom from "../modules/ease-dom"
import { App } from "./App"

// Inicializa o projeto renderizando o App na div,com id root
EaseDom.render(Ease.createElement(App, null), document.querySelector("#root"));