import { useState as useState } from "./hooks/use-state";
import { randomHASH } from "./utils";

function createElement(elementType: string | Function, props?: any, ...children: any[]) {
  console.log("Início da função Ease.createElement()");
  const virtualElementProps = {
    ...props,
    children
  };
  console.log("Props do virtual element: ", virtualElementProps);

  if (typeof elementType === "function") {
    console.log("Elemento função: ", elementType(virtualElementProps));
    return elementType(virtualElementProps);
  }

  console.log("Elemento: ", {
    tagName: elementType,
    props: virtualElementProps
  });
  console.log("Fim da função Ease.createElement()");
  return {
    tagName: elementType,
    props: virtualElementProps
  };
}

export function component(component: any) {
  console.log("Início da função Ease.createComponent()");
  const refId = randomHASH();

  const createdComponent = (props: any) => component({ refId, ...props})
  console.log("Componente criado: ", createdComponent);
  console.log("Fim da função Ease.createComponent()");
  // Retorna o componente e o ID do componente
  return createdComponent;
};

export { useState }
const Ease = { createElement, component };
export default Ease;