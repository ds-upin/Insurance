const User = require('../auth.model');

const PostRegister = async(call, callback) => {
    const { email, name, password, phone, role, dob, address, pincode } = call.request;
    return callback(null,{status:200, message:""});
};
module.exports = PostRegister;