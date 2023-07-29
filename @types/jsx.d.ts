declare namespace JSX  {  
  interface IntrinsicElements {
    section: HTMLAttributes;
    div: HTMLAttributes;
    h1: HTMLAttributes;
    p: HTMLAttributes;
    span: HTMLAttributes;
    a: AnchorHTMLAttributes;
    img: ImgHTMLAttributes;
    button: ButtonHTMLAttributes;
    input: InputHTMLAttributes;
    // Adicione mais tags HTML e seus atributos conforme necessário
  }

  interface ClickEvent {
    target: HTMLInputElement;
  }

  interface HTMLAttributes {
    id?: string;
    className?: string;
    name?: string;
    onClick?: (event: ClickEvent) => void;
    "e-model="?: string;
    "e-ref"?: string;
    // Adicione mais atributos comuns aqui
  }

  interface AnchorHTMLAttributes extends HTMLAttributes {
    href?: string;
    target?: string;
    // Adicione mais atributos específicos para a tag <a> aqui
  }

  interface ImgHTMLAttributes extends HTMLAttributes {
    src?: string;
    alt?: string;
    // Adicione mais atributos específicos para a tag <img> aqui
  }

  interface ButtonHTMLAttributes extends HTMLAttributes {
    // Adicione mais atributos específicos para a tag <button> aqui
  }

  interface ChangeEvent<T> {
    target: {
      value: any;
      checked: boolean;
    }
  }

  interface InputHTMLAttributes extends HTMLAttributes {
    type?: string;
    value?: any;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    // Adicione mais atributos específicos para a tag <input> aqui
  }
}
