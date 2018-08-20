## chunk-pattern
Chunk an array in a specific pattern

### Usage
```js
import chunkPattern from 'chunk-pattern'

const options = [
  'Chocolate',
  'Strawberry',
  'Green Tea',
  'Rocky Road',
  'Salted Caramel',
  'Vanilla',
  'Cheese',
  'Kit Kat',
  'Ube',
  'Pandan',
  'Blueberry'
]

console.log(
  chunkPattern(options, [2, 3])
)

/*
  ['Chocolate', 'Strawberry'],
  ['Green Tea', 'Rocky Road', 'Salted Caramel'],
  ['Vanilla', 'Cheese'],
  ['Kit Kat', 'Ube', 'Pandan'],
  ['Blueberry']
 */
```

### Installation
```bash
npm i chunk-pattern --save
```

### API
```
chunkPattern(array: Array<mixed>, pattern: Array<number>): Array<Array<mixed>>
```

#### Parameters
- `array` is the array to be chunked in given `pattern`.
- `pattern` is the sequence in which you'd like your array to be chunked.