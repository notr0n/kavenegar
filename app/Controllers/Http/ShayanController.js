'use strict'
const Shayan = use('App/Models/Shayan')
var Kavenegar = require('kavenegar');

var ApiKey = '674D444A44786D5574735A3851326D6744685330472F4578384530786C362F4F676850635A6A4B4D496E633D';
var Sender = "1000596446";


class ShayanController {
  async index ({ request, response, view }) {
  }
  async create ({ request, response, params }) {
     var code = Math.floor(Math.random() * 10000) + 12345;
     console.log(code);
     var Message = "کد اپلیکیشن موتور " + code;
     var Customer = params;
     response.send(Message)
     var api = Kavenegar.KavenegarApi({
        apikey: ApiKey
      });

      api.Send({
        message: Message,
        sender: Sender,
        receptor: Customer
      });
      const user = new Shayan()
      user.code = code
      user.verify = 0
      await user.save()
  }
  async show ({ params, request, response, view }) {
  }
  async update ({ params, request, response }) {
  }
  async destroy ({ params, request, response }) {
  }
}

module.exports = ShayanController
