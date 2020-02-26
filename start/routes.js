'use strict'
const Route = use('Route')

Route.get('/api/sms/:phone', 'ShayanController.create')

Route.on('/').render('Visapp :)')