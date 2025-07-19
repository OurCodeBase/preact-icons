import { ComponentProps } from 'preact/compat';

interface FaParams extends ComponentProps<'svg'> {
  icon: { name: string; viewBox: string; d: string },
  size?: string,
  style?: import('preact/compat').CSSProperties,
}

const engine = () => document.getElementById('@fa-icons/all')
if (engine() === null) document.body.appendChild(Object.assign(document.createElement('template'), { id: '@fa-icons/all' }))

export const Fa = ({icon, size = '1em', style, className, ...daemon}: FaParams) => {
  const id = `@fa-icons/${icon.name}`
  if (document.getElementById(id) === null)
    engine().insertAdjacentHTML('beforeend', `<svg hidden="true" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="${id}" viewBox="${icon.viewBox}"><path d="${icon.d}"/></symbol></svg>`)
  return <svg style={{ width: size, height: size, verticalAlign: '-0.125em', ...style }} className={`fa-icons fa-${icon.name}${className ? ` ${className}` : ''}`} {...daemon}>
    <use fill="currentColor" href={`#${id}`}/>
  </svg>
}
