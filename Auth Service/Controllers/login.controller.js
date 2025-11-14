const User = require('../auth.model');

const PostLogin = async(call, callback) => {
    const {email, password} = call.request;
    return callback(null,{status:200,message:"", token:""});
};
module.exports = PostLogin;