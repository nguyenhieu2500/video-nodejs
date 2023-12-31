const express = require("express");
// const config = require("config");

// const adminRelatedRoutes = require("./routes/admin");
// const empsRelatedRoutes = require("./routes/emps");
// const customerRelatedRoutes = require("./routes/customer");
// const loginRelatedRoutes = require("./routes/login");
// const mysql = require('mysql');
// console.log(express);

const app = express();

// app.use((request, response, next)=>
// {
//     response.write("1111111111");
//     next();
// })

// app.use((request, response, next)=>
// {
//     response.write("222222222");
//     //response.end();
//     next();
// })

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json()); //This line is acting as a
//middleware. It sets request.body
//as json data received from body
//which is originally stream.

// app.use("/admin", adminRelatedRoutes);
// app.use("/emps", empsRelatedRoutes);
// app.use("/customer", customerRelatedRoutes);
// app.use("/login", loginRelatedRoutes);

// const portNo = config.get("PORT");
// app.listen(portNo, () => {
//   console.log("Server Started at " + portNo);
// });
app.listen();
