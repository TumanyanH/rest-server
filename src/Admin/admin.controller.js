const bcrypt = require('bcryptjs')
const Admin = require("./admin.model")

module.exports = {
    login: async (req, res, next) => {
        const username = req.body.username
        const password = req.body.password
        console.log(req.body);

        try {
            const adminUser = await Admin.findOne({ username : username })
            if(adminUser) {
                const isPassed = await bcrypt.compare(password, adminUser.password)
                if(isPassed) {
                    return res
                        .status(200)
                        .json({
                            result: {
                                data: {
                                    username: adminUser.username 
                                }
                            }
                        })
                }
            }
            throw createError(401, 'Incorrect creditionals.')

        } catch(err) {
            next(err)
        }
    }

}