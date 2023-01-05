import mongoose from "mongoose";

mongoose
.connect ('mongodb://127.0.0.1:27017/Browser-history',{
     useNewUrlParser : true,
     useUnifiedTopology : true
})
.then((data) => {
     console.log("Database connected");
})
.catch((error) => {
     console.log(error.message);
})

module.exports = mongoose;