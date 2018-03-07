import factory from './ethereum/factory';
import express from 'express';
const app = express();

app.post('/ethereum', function(req, res) {
  console.log(req);
});

app.listen(5000);
