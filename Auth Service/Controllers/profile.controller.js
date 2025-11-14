const User = require('../auth.model');

const GetProfile = async(call, callback) => {
    const { id, token } = call.request;
    return callback(null,{ id:"", name:"", email:"", phone:"", role:"", dob:"", createdAt:"", updatedAt:"", status:200, pincode:222222,address:""});
};
module.exports = GetProfile;