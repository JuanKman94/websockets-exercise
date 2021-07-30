#!/usr/bin/env lua

local ev = require'ev'
local string = string
local websocket = require'websocket'

local PORT = 8080
local counter = 0

local server = websocket.server.ev.listen {
    port = PORT,
    protocols = {
        saludo = function(ws)
            print('[saludo] new connection')

            ws:on_message(function(ws, message)
                print(string.format('[saludo] received: %q', message))

                counter = counter + 1
                ws:send(string.format('%s: %d', message, counter))
            end)
        end
    }
}

print(string.format('Listening on port %d', PORT))
ev.Loop.default:loop()
