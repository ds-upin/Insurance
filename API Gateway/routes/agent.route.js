const express = require('express');

const route = express.Router();

route.post();
route.post();
route.get();
route.put();
route.delete();

module.exports = route;

// | Method   | Route                        | Description                               |
// | -------- | ---------------------------- | ----------------------------------------- |
// | **GET**  | `/agents`                    | Get list of all agents                    |
// | **GET**  | `/agents/:id`                | Get details of one agent                  |
// | **POST** | `/agents/assign`             | Assign agent to a customer                |
// | **GET**  | `/agents/customers/:agentId` | List all customers under a specific agent |
