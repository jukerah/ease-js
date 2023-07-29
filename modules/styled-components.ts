type Styles = {
  [key: string]: string
}

type StyledProps = {
  [key: string]: any
}

type StyledComponent = (props: StyledProps, ...children: any[]) => HTMLElement

export default function styled(tag: string, styles: Styles): StyledComponent {
  function createElementWithStyles(tag: string, props: StyledProps, ...children: any[]) {
    const classNames = Object.keys(styles)
      .filter((key) => props[key])
      .map((key) => styles[key])
      .join(" ")

    const element = document.createElement(tag)
    element.className = classNames

    for (const key in props) {
      if (!styles[key] && props[key] !== undefined) {
        (element as any)[key] = props[key]
      }
    }

    const childrenHTML = children.join("")
    element.innerHTML = childrenHTML

    element.setAttribute("data-styled-component", "true")

    return element
  }

  return function (props: StyledProps, ...children: any[]) {
    if (typeof props === "object" && props !== null) {
      return createElementWithStyles(tag, props, ...children)
    } else {
      return createElementWithStyles(tag, {}, props, ...children)
    }
  }
}
