;(function(){
  var main = this, routes = []
  
  function match(route, path, method) {
    if (route.method == method)
      if (captures = path.match(route.pattern))
        return captures.slice(1)
  }
  
  function prep(path) {
    return new RegExp('^' + path.replace(/:\w+/, '(\\w+)') + '$')
  }
  
  function call(path, method) {
    for (var i = 0; i < routes.length; ++i)
      if (captures = match(routes[i], path, method))
        return routes[i].callback.apply(this, captures)
    throw "Route for path: `" + path + "' method: " + method + " cannot be found"
  }
  
  function def(method, options) {
    options = options || {}
    main[method] = function(path, callback){
      if (typeof callback == 'function')
        routes.push({
          method: options.as || method,
          path: path,
          pattern: prep(path),
          callback: callback
        })
      else
        return call(path, options.as || method)
    }
  }
  
  def('get')
  def('post')
  def('put')
  def('del', { as: 'delete' })
})()

// --- Example

get('/user/:id', function(id) {
  return 'Viewing user ' + id 
})

del('/user/:id', function() {
  return 'User deleted'
})

print(get('/user/1')) 
// “Viewing user 1”

print(del('/user/4')) 
// “User deleted”
