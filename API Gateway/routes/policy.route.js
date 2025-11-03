const express = require('express');

const route = express.Router();

route.post();
route.post();
route.get();
route.put();
route.delete();

module.exports = route;

// | Method     | Route           | Description                          |
// | ---------- | --------------- | ------------------------------------ |
// | **GET**    | `/policies`     | Get all available insurance policies |
// | **GET**    | `/policies/:id` | Get specific policy by ID            |
// | **POST**   | `/policies`     | Add new policy (admin only)          |
// | **PUT**    | `/policies/:id` | Update a policy (admin only)         |
// | **DELETE** | `/policies/:id` | Delete a policy (admin only)         |
