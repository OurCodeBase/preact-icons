type FaParams = {
  icon: { name: string; viewBox: string; d: string },
  size?: string,
  style?: import('preact/compat').CSSProperties,
  className?: string
}

const engine = () => document.getElementById("@fa-icons/all")
if (engine() === null) document.body.appendChild(Object.assign(document.createElement("template"),{id: "@fa-icons/all"}))

export const Fa = ({icon, size = "1em", style, className}: FaParams) => {
  const id = `@fa-icons/${icon.name}`
  const appendChild = () => {
    engine().insertAdjacentHTML("beforeend", `
    <svg hidden="true" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="${id}" viewBox="${icon.viewBox}"><path d="${icon.d}"/></symbol>
    </svg>`)
  }
  if (document.getElementById(id) === null) appendChild()
  return <svg style={{ width: size, height: size, ...style }} className={`fa-icons${className ? ` ${className}` : ''}`}>
    <use fill="currentColor" href={`#${id}`}/>
  </svg>
}
