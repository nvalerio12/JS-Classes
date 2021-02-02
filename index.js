const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Today topic will be classes')
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port, ${PORT}`);
});