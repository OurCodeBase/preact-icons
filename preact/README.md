
# @fa-icons/preact

A bridge to use @fa-icons efficiently.

## Features

- ✅ **Tree-shaking** (only include icons that you're using)
- ✅ **Svg reuse** (icon's path will not repeat itselft in dom)
- ✅ **Autocompletions** (supports inline css style autocompletions)

## Documentation

You can find docs on [preact-icons](https://github.com/OurCodeBase/preact-icons) repo hosted on github.

- Install it using npm -
```sh
npm i --save @fa-icons/preact

```
- After installation, you can use it in your preact app.
```jsx
import './app.css'
import { Fa } from '@fa-icons/preact'
import { faAndroid, faApple, faAudible } from '@fa-icons/brands'

export function App() {
  return <>
    <Fa icon={faApple} style={{ fill: "white" }}/>
    <Fa icon={faAndroid} size="2em"/>
    <Fa icon={faAudible} className="audible"/>
  </>
```

## Disclaimer

@fa-icons uses icons from font awesome free, which are licensed under the creative commons attribution 4.0 international license (CC BY 4.0). font awesome is a trademark of fonticons, inc.

all font awesome free icons used herein are for illustrative and enhancement purposes only and are attributed appropriately. no claim of ownership is made over the font awesome icons. for more information, visit https://fontawesome.com.

