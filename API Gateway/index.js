require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const adminRoute = require('./routes/admin.route');
const agentRoute = require('./routes/agent.route');
const authRoute = require('./routes/auth.route');
const claimRoute = require('./routes/claims.route');
const customerRoute = require('./routes/customer.route');
const notificationRoute = require('./routes/notification.route');
const paymentRoute = require('./routes/payment.route');
const policyRoute = require('./routes/policy.route');

const PORT = process.env.PORT;
const APP_NAME = process.env.APP_NAME;

const app = express();

const limiter = rateLimit({
    windowMs: 1000,
    max: 50,
    message: { error: "Too many requests" }
});

app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoute);
app.use('agent', agentRoute);
app.use('/admin', adminRoute);
app.use('/claim', claimRoute);
app.use('/policy', policyRoute);
app.use('/payment', paymentRoute);
app.use('/customer', customerRoute);
app.use('/notification', notificationRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;