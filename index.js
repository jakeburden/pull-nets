var nets = require('nets')

function createRequest (opts) {
  if (typeof opts === 'string') opts = { uri: opts }
  var called = false
  
  return function createSource (abort, cb) {
    if (called) abort = called
    if (abort) return cb(abort)
    called = true 

    nets(opts, function done (err, resp, body) {
      if (err) return cb(err)
      // do we want resp?
      cb(null, body)
    })
  }
}

module.exports = createRequest

