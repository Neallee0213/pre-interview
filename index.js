const express = require('express')
const cors = require('cors')
const grabity = require("grabity");
const path = require("path");


const app = express()

app.use(express.json())
app.use(cors())

function getURL() {
    app.get("/", async (req, res) => {
        const URL = req.query.URL
        const img = await grabity.grabIt(`${URL}`)
        res.json({
            img_URL: img
        });
    })
}

setTimeout(getURL, 2000);


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}



const PROT = process.env.PORT || 4300;
app.listen(PROT, () => console.log(`listening on PORT${PROT}`));