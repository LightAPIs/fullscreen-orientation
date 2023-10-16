# fullscreen-orientation

## Installation

```shell
npm install fullscreen-orientation
```

## Usage

```javascript
import { fullscreen } from 'fullscreen-orientation';

// get some element
const video = document.createElement('video');

// orientation handler
const remove = fullscreen(video, 'landscape')

// no longer use, remove handler
remove();
```

## License

[MIT](./LICENSE)
