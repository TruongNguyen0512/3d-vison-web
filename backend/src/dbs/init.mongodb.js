const { default: mongoose } = require("mongoose");
const { config, env, dbType } = require('../configs/config.mongodb');

class MongoDB {
  constructor() {
    this.connect();
  }


   connect() {
    if(1===1) {
        mongoose.set("debug", true);
        mongoose.set("debug", { color: true });
    }
    const { db } = config;
    let connectString;
    if (env === 'dev') {
        connectString = `${dbType}://${db.host}:${db.port}/${db.name}`;
    } else {
        connectString = `${dbType}://${db.username}:${db.password}@${db.host}/${db.name}?retryWrites=true&w=majority`;
    }
    mongoose.connect(connectString).then(() => {
        console.log(`Connected to MongoDB ${env} successfully using ${dbType}`);
    }).catch((err) => {
        console.log("Error connecting to MongoDB");
        console.log(err);
    });
   }
    static getInstance() {
        if(!MongoDB.instance) {
            MongoDB.instance = new MongoDB();
        }
        return MongoDB.instance;
    }
}

const instanceMongoDB = MongoDB.getInstance();

module.exports = instanceMongoDB;
