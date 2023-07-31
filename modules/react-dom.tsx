// Definição da interface para o objeto do DOM virtual
interface VirtualDOM {
  tagName: string;
  props: any;
}

// Função que converte um nó do DOM virtual em HTML
function convertToHtml(virtualDOM: VirtualDOM) {
  console.log("Início função convertToHtml()");

  // Verifica o tipo do nó do DOM virtual
  const virtualDOMType = typeof virtualDOM;

  // Se for uma string ou número, retorna um TextNode
  if (virtualDOMType === "string" || virtualDOMType === "number") {
    return document.createTextNode(String(virtualDOM));
  }

  // Pega o nome da tag do nó do DOM virtual
  const HTMLTagName = virtualDOM.tagName;
  console.log("Nome da tag do nó do DOM virtual: ", HTMLTagName);

  // Cria um novo elemento HTML
  const $domElement = document.createElement(HTMLTagName);
  console.log("Elemento criado a partir de HTMLTagName: ", $domElement);

  // Itera pelas propriedades do nó do DOM virtual
  for (const key in virtualDOM.props) {
    // Caso a propriedade seja className, adiciona a classe no elemento HTML
    if (key === "className" && virtualDOM.props[key]) {
      $domElement.setAttribute("class", virtualDOM.props[key]);
      console.log("Altera o atributo className alterado para class");
    }
    // checkbox
    if (key === "checked" && !virtualDOM.props[key]) {
      console.log("virtualDOM.props[key] checked", virtualDOM.props[key]);
      $domElement.removeAttribute("checkbox");
      console.log("Altera o atributo checkbox");
    }
    // Caso a propriedade seja e-model, adiciona o atributo data-model no elemento HTML
    else if (key === "e-model" && virtualDOM.props[key]) {
      $domElement.setAttribute("data-model", virtualDOM.props[key]);
      console.log("Altera o atributo e-model alterado para data-model");
    }
    else if (key === "e-ref" && virtualDOM.props[key]) {
      $domElement.setAttribute("data-ref", virtualDOM.props[key]);
      console.log("Altera o atributo e-ref alterado para data-ref");
    }
    // Caso a propriedade seja onClick, adiciona o evento click no elemento HTML
    else if (key === "e-click") {
      $domElement.onclick = virtualDOM.props[key];
    }
    // Caso a propriedade seja onChange, adiciona o evento onChange no elemento HTML
    else if (key === "e-change") {
      $domElement.oninput = virtualDOM.props[key];
    }
    // Para outras propriedades que não sejam children, adiciona as propriedades no elemento HTML
    else if (key !== "children") {
      $domElement.setAttribute(key, virtualDOM.props[key]);
    }

    console.log("Elemento ajustado para ser compatível ao HTML: ", $domElement);
  }

  // Verifica se o nó do DOM virtual tem filhos e se são arrays
  if (virtualDOM.props.children && Array.isArray(virtualDOM.props.children)) {
    // Itera pelos filhos do nó do DOM virtual e adiciona ao elemento HTML
    virtualDOM.props.children.forEach((virtualChild: any) => {
      if (typeof virtualChild === "object" && virtualChild !== null && "id" in virtualChild && "value" in virtualChild) {
        // Se o filho for um objeto com 'id' e 'value', crie um elemento span
        const $domElementChild = document.createElement("span");
        $domElementChild.setAttribute("data-model", virtualChild.id);
        $domElementChild.textContent = virtualChild.value;
        $domElement.appendChild($domElementChild);
      } else {
        // Se não, crie normalmente o elemento HTML
        $domElement.appendChild(convertToHtml(virtualChild));
      }
    });
  } else {
    // Se não houver filhos ou não for um array, apenas adiciona o texto ao elemento HTML
    $domElement.textContent = virtualDOM.props.children;
  }

  console.log("Resultado do elemento criado: ", $domElement);
  console.log("Fim função convertToHtml()");
  return $domElement;
}

// Inicializa o DOM virtual com null
let virtualDOM: any = null;

// Função que renderiza o DOM virtual no DOM real
export function render(initialVirtualDOMTree: any, $domRoot: Element | null) {
  console.log("Início função EaseDom.render()");

  // Salva o estado atual do DOM virtual
  virtualDOM = initialVirtualDOMTree;
  console.log("Estado atual do virtual DOM: ", virtualDOM);
  // Converte o DOM virtual em HTML

  const $appHTML = convertToHtml(initialVirtualDOMTree);
  console.log("Conversão do virtual DOM em HTML: ", $appHTML);

  // Adiciona o HTML ao DOM real
  $domRoot && $domRoot.appendChild($appHTML);

  console.log("Fim função EaseDom.render()");
};

// Exporta um objeto com as funções render e a variável virtualDOM
const ReactDom = { render, virtualDOM };
export default ReactDom;
