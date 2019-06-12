
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 2000;

app.use('/', express.static(path.join(__dirname, 'static')));
app.use('/', express.static(path.join(__dirname, 'assets')));


// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, 'Static/index.html'));
// });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));