const User = require('../auth.model');

const DeleteUser = async(call, callback) => {
    const {id, token} = call.request;
    return callback(null,{status:200, message:""});
};
module.exports = DeleteUser;