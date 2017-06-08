var nets = require('.')
var pull = require('pull-stream')
var test = require('tape')


test('basic', function (t) {
  t.plan(1)
  var http = require('http')
  var server = http.createServer(function (req, res) {
    res.end('sup')
  })
  
  server.listen(9934, function () {
    pull(
      nets('http://127.0.0.1:9934'),
      pull.drain(function (buf) {
        server.close()
        t.same(buf.toString(), 'sup')
      })
    ) 
  })
})

