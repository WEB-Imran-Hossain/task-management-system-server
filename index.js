const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());



// root
app.get('/', (req, res) => {
    res.send('Task management system server is running')
})


app.listen(port, () => {
    console.log(`Task management system is running on port: ${port}`)
  })