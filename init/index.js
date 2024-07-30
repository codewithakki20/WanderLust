const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");  //

const MONGO_URL = 'mongodb://127.0.0.1:27017/wonderlust';
main().then((res)=>{
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {  //connecting to database
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "6656e294882c4ece4211fc2c"}) );
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();
