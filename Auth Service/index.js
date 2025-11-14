require('dotenv').config();
const PROTOPATH = __dirname + '/proto/auth.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const { connectToMongoDB } = require('./connections');
connectToMongoDB(process.env.MONGO_URI);

const PostRegister = require('./Controllers/register.controller');
const PostLogin = require('./Controllers/login.controller');
const GetProfile = require('./Controllers/profile.controller');
const DeleteUser = require('./Controllers/delete.controller');

const packageDefinition = protoLoader.loadSync(
    PROTOPATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);

const proto = grpc.loadPackageDefinition(packageDefinition).auth;

function main() {
    const server = new grpc.Server();

    server.addService(proto.Authenticate.service, {
        PostRegister,
        PostLogin,
        GetProfile,
        DeleteUser,
    });

    const PORT = process.env.PORT;

    server.bindAsync(
        `0.0.0.0:${PORT}`,
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if (err) {
                console.error("Server error:", err);
                return;
            }
            console.log(`🚀 gRPC Server running on port ${port}`);
            server.start();
        }
    );
}

main();