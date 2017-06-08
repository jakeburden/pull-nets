# pull-nets

a small pull-stream interface that makes the [nets](https://github.com/maxogden/nets) npm module into source for making GET request in the browser or on the server

## install

```
npm i pull-nets
```

## usage

```js
var nets = require('pull-nets')
var pull = require('pull-stream')


pull(
  nets('http://127.0.0.1:9934'),
  pull.drain(function (buf) {
    server.close()
    t.same(buf.toString(), 'sup')
  })
)
```
