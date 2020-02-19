# kavenegar.com AdonisJS API
> GET /api/sms


## Install

```bash
git clone https://github.com/notr0n/kavenegar.git
npm install --save
```

## Start

```bash
cd kavenegar
adonis serve --dev
```

## Development

### app/Controllers/Http/CustomerController.js

```bash
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
```
