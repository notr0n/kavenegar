'use strict'
var Kavenegar = require('kavenegar');

var ApiKey = '674D444A44786D5574735A3851326D6744685330472F4578384530786C362F4F676850635A6A4B4D496E633D';
var Customer = "09167212043";
var Sender = "1000596446";
var code = Math.floor(Math.random() * 10000) + 12345;
console.log(code);
var Message = "کد اپلیکیشن موتور " + code;

class CustomerController {
  async create ({ request, response}) {
      response.send(Message)
      var api = Kavenegar.KavenegarApi({
        apikey: ApiKey
      });

      api.Send({
        message: Message,
        sender: Sender,
        receptor: Customer
      });
  }
}

module.exports = CustomerController
