const express = require('express');

const route = express.Router();

route.post();
route.post();
route.get();
route.put();
route.delete();

module.exports = route;


//Method	Route	            Description
//POST	/auth/register	    Register a new user (customer or agent)
//POST	/auth/login	Login   user and generate JWT
//GET	    /auth/profile/:id	Get user profile details
//PUT	    /auth/profile/:id	Update user details
//DELETE	/auth/delete/:id	Delete a user account (admin access)