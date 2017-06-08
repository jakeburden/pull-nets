# pull-nets

A small pull-stream interface that makes the [nets](https://github.com/maxogden/nets) npm module into a source.
For making GET request in the browser or on the server.

## install

```
npm i pull-nets
```

## usage

```js
var nets = require('pull-nets')
var pull = require('pull-stream')


pull(
  nets('https://scuttlebutt.nz'),
  pull.drain(function (buf) {
    console.log(buf.toString())
  })
)
```

### note

the nature of `nets` is to return a buffer.  so the source isn't really
streaming, it runs once and returns a buffer into memory.
