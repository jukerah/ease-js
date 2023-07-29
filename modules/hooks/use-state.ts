import { randomHASH } from "../utils"

// Armazena as estados do useState
type StatesObject = {
  [key: string]: any;
};
let states: StatesObject = {};

// Armazena as funções para alterar o estado
type SetFunctionsObject = {
  [key: string]: (newState: any) => void;
};
let setStateFunctions: SetFunctionsObject = {};

type StateTuple<T> = [
  {
    id: string;
    value: T;
  },
  (newState: T) => void
];

// Função hook para o estado
export function useState<T>(initialState: T): StateTuple<T> {
  console.log("Início da função React.useState()");
  const getHash: string = randomHASH();
  const setHash: string = randomHASH();

  states[getHash] = initialState;

  const get = () => {
    return {
      id: getHash,
      value: states[getHash]
    };
  };

  const set = (newState: T) => {
    states[getHash] = newState;
    const elements = document.querySelectorAll(`[data-model="${getHash}"]`);
    elements.forEach(element => element.innerHTML = String(newState));
  };

  // Armazenando a função 'set' no objeto 'setStateFunctions'
  setStateFunctions[setHash] = set; 

  console.log("Retorno do useState: ", {
    get: get(),
    set: set
  });
  console.log("Fim da função React.useState()");
  return [ get(), set ];
};