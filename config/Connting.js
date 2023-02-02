const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const DB = async () => {
    try {
        const connet = await mongoose.connect(process.env.MONGOO_URL)
        console.log(`mongoDb connting ${connet.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports = DB