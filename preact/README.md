
# @fa-icons/preact

A bridge to use @fa-icons efficiently.

## Features

- ✅ **Tree-shaking** (only include icons that you're using)
- ✅ **Svg reuse** (icon's svg path will not repeat itselft in dom)
- ✅ **Autocompletions** (supports inline css style autocompletions)
- ✅ **Extension approach** (not all *categories* of icon bloat your code-editor.)

## Documentation

- Install @fa-icon/preact icon driver -
```sh
npm i --save @fa-icon/preact
```

- You can use any icon binding from @fa-icons like `@fa-icons/brands`, `@fa-icons/solid`, `@fa-icons/regular`. In this example, we are going to install just the @fa-icons/brands binding.
```sh
npm i --save @fa-icons/brands
```

- And finally, you can use the icons -
```jsx
import './app.css'
import { Fa } from '@fa-icons/preact'
import { faAndroid, faApple, faAudible } from '@fa-icons/brands'

export function App() {
  return <>
    <Fa icon={faApple} style={{ color: "white" }}/>
    <Fa icon={faAndroid} size="2em"/>
    <Fa icon={faAudible} className="audible"/>
  </>
```

## Disclaimer

@fa-icons uses icons from font awesome free, which are licensed under the creative commons attribution 4.0 international license (CC BY 4.0). font awesome is a trademark of fonticons, inc.

all font awesome free icons used herein are for illustrative and enhancement purposes only and are attributed appropriately. no claim of ownership is made over the font awesome icons. for more information, visit https://fontawesome.com.

