'use strict'

var create_task = require('../controllers/tasks/createtask')
var delete_task = require('../controllers/tasks/deletetask')
var get_task_id = require('../controllers/tasks/gettaskid')
var get_task = require('../controllers/tasks/gettasktext')


var create_user = require('../controllers/users/createuser')
var delete_user = require('../controllers/users/deleteuser')
var get_one_user = require('../controllers/users/getoneuser')
var get_user_id = require('../controllers/users/getuserid')


var login_user = require('../controllers/login/login')


module.exports = [

{ method:'get', path: '/createtask/:text', handler: create_task },
{ method:'get', path: '/deletetask/:id', handler: delete_task },
{ method:'get', path: '/gettaskid/:id', handler: get_task_id },
{ method:'get', path: '/deletetodo/:text', handler: get_task },
{ method:'post', path: '/users', handler: create_user },
{ method:'get', path: '/deleteuser/:id', handler: delete_user },
{ method:'get', path: '/getuser/:text', handler: get_one_user },
{ method:'get', path: '/getuserid/:id', handler: get_user_id },
{ method:'post', path: '/login', handler: login_user }

]