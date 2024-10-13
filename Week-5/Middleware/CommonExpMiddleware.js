const express = require("express");

const app = express();

// using inbuilt middleware provided by the express to convert json data to js object, so as to access it members. Facilitates post,put, etc request from the client
    app.use(express.json())

app.post("/sum", function(req, res) {
    const a = req.body.a;
    const b = req.body.b;
    res.json({
        ans: a + b
    })
});


app.listen(3000);