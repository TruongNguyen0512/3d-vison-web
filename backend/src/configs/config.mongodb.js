const dev ={
    app : {
        port: process.env.DEV_APP_PORT 
    },
    db: {
         host: process.env.DEV_DB_HOST ,
        port: process.env.DEV_DB_PORT  ,
        name: process.env.DEV_DB_NAME 
    }
}
const pro = {
    app : {
        port :process.env.PRO_APP_PORT 
    },
    db: {
        host: process.env.PRO_DB_HOST,
        name: process.env.PRO_DB_NAME,
        username: process.env.PRO_DB_USERNAME,
        password: process.env.PRO_DB_PASSWORD
    }
}

const config = {dev,pro} 
const env = process.env.NODE_ENV || 'dev'
const cfg = config[env] 

module.exports = {
    config : cfg,
    env,
    dbType : env === 'dev' ? 'mongodb' : 'mongodb+srv'   
}
