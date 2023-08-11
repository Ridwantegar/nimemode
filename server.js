const app = require('express')();

app.get('/', (req, res) => res.send('Suscribete: https://youtube.com/tArcades'));

module.exports = () => {
  app.listen(3000);
}