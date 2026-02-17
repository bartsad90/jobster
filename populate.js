require('dotenv').config()
const Job = require('./models/Job')
const mockData = require('./mock-data.json')
const dns = require('node:dns')
dns.setServers(['8.8.8.8',])
const connectDB = require('./db/connect')




const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        await Job.create(mockData)

        console.log('Success!!!')
        process.exit(0)
        
    }
    catch (error){
        console.log(error)
        process.exit(1)
    }
}

start()