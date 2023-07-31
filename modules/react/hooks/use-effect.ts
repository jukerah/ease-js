import { virtualDOMMounted } from "..";

interface Dependency {
  id: string;
  value: any;
}

type EffectCallback = () => void;

interface Effect {
  callback: EffectCallback;
  dependencies: string[];
}

let useEffectList: Effect[] = [];

export const useEffect = (callback: EffectCallback, dependencies: Dependency[]) => {
  console.log("entrou useEffect");

  // Só cria executa o useEffect se o virtual dom estiver pronto
  if(virtualDOMMounted) {
    let dependencyIds: string[] = [];
    dependencies.map((dependency) => dependencyIds.push(dependency.id))
    // Adiciona o callback e todas dependências do useEffect
    useEffectList.push({
      callback: callback,
      dependencies: dependencyIds
    });
  
    // Se nao tiver dependência apenas executa o callback apenas quando é useEffect é declarado
    if(dependencies.length === 0) {
      return callback();
    }
  }
}

export const useEffectObserver = (dependencyId: string) => {
  useEffectList.forEach(effect => {
    if(effect.dependencies.includes(dependencyId)) {
      effect.callback();
    }
  });
};