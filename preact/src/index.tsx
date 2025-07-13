type FaParams = {
  icon: { name: string; viewBox: string; d: string },
  size?: string,
  style?: import('preact/compat').CSSProperties,
  className?: string
}

export const Fa = ({icon, size = "1em", style, className}: FaParams) => {
  const id = `@fa-icons/${icon.name}`
  const appendChild = () => {
    const engine = () => document.getElementById("@fa-icons/all")
    if (engine() === null) document.body.appendChild(Object.assign(document.createElement("template"),{id: "@fa-icons/all"}))
    engine().insertAdjacentHTML("beforeend", `
    <svg hidden="true" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="${id}" viewBox="${icon.viewBox}"><path d="${icon.d}"/></symbol>
    </svg>`)
  }
  if (document.getElementById(id) === null) appendChild()
  return <svg style={style} width={size} className={className}>
    <use href={`#${id}`}/>
  </svg>
}
