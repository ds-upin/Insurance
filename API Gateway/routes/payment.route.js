const express = require('express');

const route = express.Router();

route.post();
route.post();
route.get();
route.put();
route.delete();

module.exports = route;

// | Method   | Route                           | Description                          |
// | -------- | ------------------------------- | ------------------------------------ |
// | **POST** | `/payments/initiate`            | Start a payment for a policy         |
// | **GET**  | `/payments/status/:paymentId`   | Check payment status                 |
// | **POST** | `/payments/verify`              | Verify payment success from gateway  |
// | **GET**  | `/payments/history/:customerId` | Get all payment history for customer |
