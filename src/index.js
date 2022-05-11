const express = require('express')
const app = express()
const PORT = 3000  

app.get('/', (req, res) => {
    return res.send("Hello word");
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))