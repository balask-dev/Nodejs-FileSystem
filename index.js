const express = require('express');
const {writeFile, readdir} = require('fs');
const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;

app.get("/create", function (req, res) { //create txt file
    var date = new Date();
    var timestamp = date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
    var fileName = date.toString();
    var txt = timestamp;
    readdir("./file", (err, data) => {  //read directory
      if (data.length > 5) {
          res.send("limit exceeded");
      } else {
      writeFile(`./file/${fileName}.txt`, txt, (err,data) =>    // writeFile
      console.log("done")
        );
        res.send(`created ${fileName}`); 
    }
    });
  });
  app.get("/timestamp", function (req, res) {
    readdir("./file", (err, data) => {
        res.send(data);
    })
})
app.get("/",(req,res)=>{  
    res.send("connected")
})
app.listen(PORT);