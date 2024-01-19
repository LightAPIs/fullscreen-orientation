# fullscreen-orientation

## Installation

```shell
npm install fullscreen-orientation
```

## Usage

### Specified element

```javascript
import { fullscreen } from 'fullscreen-orientation';

// get some element
const video = document.createElement('video');

// orientation handler
const remove = fullscreen(video, 'landscape');

// no longer use, remove handler
remove();
```

### Document

```javascript
import { fullscreen } from 'fullscreen-orientation';

// orientation handler
const remove = fullscreen('landscape');

// no longer use, remove handler
remove();
```

## License

[MIT](./LICENSE)
