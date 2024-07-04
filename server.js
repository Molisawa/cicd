const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.json({ status:200,message: 'Hello World 2' });
}  );





app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
} );