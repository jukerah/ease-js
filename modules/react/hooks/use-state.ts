import { randomHASH } from "../utils"
import { useEffectObserver } from "./use-effect";

type StateTuple<T> = [
  {
    id: string;
    value: T;
  },
  (newState: T) => void
];

// Função hook para o estado
export function useState<T>(initialState: T): StateTuple<T> {
  console.log("Início da função Ease.useState()");
  let state = {
    id: randomHASH(),
    value: initialState
  };

  const get = () => {
    return state 
  };

  const set = (newState: T) => {
    if(newState !== state.value) {
      state.value = newState;
      const elements = document.querySelectorAll(`[data-model="${state.id}"]`);
      elements.forEach(element => {
        element.innerHTML = String(newState)
      });
      useEffectObserver(state.id)
    }
  };

  console.log("Retorno do useState: ", {
    get: get(),
    set: set
  });
  console.log("Fim da função Ease.useState()");
  return [ get(), set ];
};