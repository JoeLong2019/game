const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'JoesGame')));

// app.get('/', (req, res) => {
//     res.send('<h1>Try not to rage</h1>');
// });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
