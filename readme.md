![neuelabs input cover](https://github.com/neuelabs/media/blob/master/github/input.png)

## Install

```bash
yarn add @neuelabs/input
```

## Usage

```js
'use strict'

import Input from '@neuelabs/input'

const Component = () => (
	<div>
		<Input
			placeholder="Type text"
			label="Username"
			name="username"
			onChange={action('typing...')}
		/>
	</div>
)

export default Component
```

## Live Playground

For examples, go to [storybook](https://neuelabs.github.io/input/)

OR

To run that demo on your own computer:

* Clone this repository
* yarn
* yarn storybook
* Visit [http://localhost:9001](http://localhost:9001)

## License

MIT © [neuelabs](https://neuelabs.co)
