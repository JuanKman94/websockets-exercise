# Web Socket Exercise

## References

* [Web Sockets spec]
* [lua-websockets]

## Server

### Requirements

* lua
* luarocks
* [libev]

```sh
$ luarocks install lua-ev lua-websockets
$ echo "make sure luarocks path is already set (run `eval $(luarocks path)`)"
$ ./server.lua
```

## Client

Just open [src/index.html](src/index.html) in a modern browser

[Web Sockets spec]: https://html.spec.whatwg.org/multipage/web-sockets.html#network
[lua-websockets]: https://lipp.github.io/lua-websockets/
[libev]: https://github.com/JuanKman94/libev
