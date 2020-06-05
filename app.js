const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoConnect = require('./utils/database').mongoConnect;
const errorController = require('./controllers/error');

const User = require('./models/user');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    User.findById('5d51d1420723af0c74766655')
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err)
        });
});

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1', shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
    app.listen(3000);
});