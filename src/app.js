const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'))
// Con esto le decimos que use los archivos 'html' y los renderice como archivos 'ejs'
app.engine('html', require('ejs').renderFile);

// routes
// Por defecto node llama el archivo index
app.use(require('./routes/index'));


// Static files
app.use(express.static(path.resolve(__dirname, './public')));


// listening the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})