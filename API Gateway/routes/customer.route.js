const express = require('express');

const route = express.Router();

route.post();
route.post();
route.get();
route.put();
route.delete();

module.exports = route;


// | Method     | Route                                      | Description                           |
// | ---------- | ------------------------------------------ | ------------------------------------- |
// | **POST**   | `/customer/policies`                       | Customer buys/subscribes to a policy  |
// | **GET**    | `/customer/policies/:customerId`           | Get all policies bought by a customer |
// | **DELETE** | `/customer/policies/:customerId/:policyId` | Cancel customer’s policy              |
