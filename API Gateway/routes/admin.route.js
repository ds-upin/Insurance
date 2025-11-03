const express = require('express');

const route = express.Router();

route.post();
route.post();
route.get();
route.put();
route.delete();

module.exports = route;

// | Method  | Route              | Description                                 |
// | ------- | ------------------ | ------------------------------------------- |
// | **GET** | `/admin/dashboard` | Get overall stats (users, policies, claims) |
// | **GET** | `/admin/users`     | View all users                              |
// | **GET** | `/admin/claims`    | View all claims pending approval            |
// | **GET** | `/admin/payments`  | View all payment transactions               |
