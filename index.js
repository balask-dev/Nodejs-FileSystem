const express = require('express');
const {writeFile, readdir} = require('fs');
const app = express();
app.use(express.json());

//creating a text file that contains timestamp details

app.get("/create", function (req, res) { 
    var date = new Date();
    var timestamp = date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
    var fileName = date.toString();
    var txt = timestamp;

    //read directory
    readdir("./file", (err, data) => {  
      if (data.length > 5) {
          res.send("limit exceeded");
      }
        else 
      {
          // writeFile in txt format
      writeFile(`./file/${fileName}.txt`, txt, (err,data) => console.log("done")
        );
        res.send(`created ${fileName}`); 
    }
    });
    });

//read directory that contains txt file
  app.get("/timestamp", function (req, res) {
    readdir("./file", (err, data) => {
        res.send(data);
    })
})

app.get("/",(req,res)=>{  
    res.send("connected")
})
app.listen(3000);
