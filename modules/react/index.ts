import { useState } from "./hooks/use-state";
import { useEffect } from "./hooks/use-effect";

// Status para ser de virtual dom já foi montado
export let virtualDOMMounted = false;
  
function createElement(elementType: string | Function, props?: any, ...children: any[]) {
  console.log("Início da função React.createElement()");
  const virtualElementProps = {
    ...props,
    children
  };
  console.log("Props do virtual element: ", virtualElementProps);
  if(virtualElementProps.id && virtualElementProps.id === "app") virtualDOMMounted = true;
  if (typeof elementType === "function") {
    console.log("Elemento função: ", elementType(virtualElementProps));
    return elementType(virtualElementProps);
  }

  console.log("Elemento: ", {
    tagName: elementType,
    props: virtualElementProps
  });
  console.log("Fim da função React.createElement()");
  return {
    tagName: elementType,
    props: virtualElementProps
  };
};

export function createComponent(component: any, app?: any) {
  console.log("Início da função React.createComponent()");

  const createdComponent = (props: any) => {
    // Use a função setupHooks antes de chamar a função de efeito
    //setupHooks();

    // Adicione o hook useEffect para lidar com a desmontagem do componente
   /* useEffect(() => {
      // Função de limpeza a ser executada quando o componente for desmontado
      return () => {
        console.log("Componente sendo desmontado: ", refId);
        // Execute aqui qualquer ação necessária antes da desmontagem
        // por exemplo, liberar recursos, cancelar assinaturas, etc.
      };
    }, []);*/

    return component(props);
  };

  console.log("Componente criado: ", createdComponent);
  console.log("Fim da função React.createComponent()");
  // Retorna o componente e o ID do componente
  return createdComponent;
};

export { useState, useEffect };
const React = { createElement, createComponent };
export default React;