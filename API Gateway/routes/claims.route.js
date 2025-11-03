const express = require('express');

const route = express.Router();

route.post();
route.post();
route.get();
route.put();
route.delete();

module.exports = route;

// | Method   | Route                      | Description                           |
// | -------- | -------------------------- | ------------------------------------- |
// | **POST** | `/claims`                  | File a new insurance claim            |
// | **GET**  | `/claims/:customerId`      | Get all claims by a specific customer |
// | **GET**  | `/claims/details/:claimId` | Get claim details by ID               |
// | **PUT**  | `/claims/approve/:claimId` | Approve claim (agent/admin only)      |
// | **PUT**  | `/claims/reject/:claimId`  | Reject claim (agent/admin only)       |
