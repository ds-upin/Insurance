const express = require('express');

const route = express.Router();

route.post();
route.post();
route.get();
route.put();
route.delete();

module.exports = route;

// | Method   | Route                    | Description                        |
// | -------- | ------------------------ | ---------------------------------- |
// | **POST** | `/notify/email`          | Send email notification            |
// | **POST** | `/notify/sms`            | Send SMS notification              |
// | **POST** | `/notify/claim-update`   | Notify customer about claim status |
// | **POST** | `/notify/payment-update` | Notify about payment confirmation  |
