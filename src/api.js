const express = require('express');
const routerLogin = require('./router/routerLogin');
const routerUser = require('./router/routerUser');
const routerCategory = require('./router/routerCategory');
// ...

const app = express();

app.use(express.json());

app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategory);
// ...
app.use((err, _req, res, _next) => {
  const { name, message } = err;

  switch (name) {
    case 'UnauthorizedError':
      res.status(401).json({ message });
      break;
    default:
      res.status(500).json({ message });
      break;
  }
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
