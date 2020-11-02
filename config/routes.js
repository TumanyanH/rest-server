const AdminRoutes = require('../src/Admin/admin.routes')
const UserRoutes = require('../src/User/user.routes')
const SubscriberRoutes = require('../src/Subscriber/subscriber.routes')

module.exports = (app) => {
    app.use(AdminRoutes)
    app.use(UserRoutes)
    app.use(SubscriberRoutes)

    app.use((err, req, res, next) => {
        if(err) {
            console.log(err);
            return res
                .status(err.statusCode)
                .json({
                    result: {
                        data: {
                            error: err
                        }
                    }
                })
        }
    })
}
