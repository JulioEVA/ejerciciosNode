const express = require('express');

const middleware = require('./middlewares/firstMiddleware').myFirstMiddleware;
const { requestLogger, errorLogger } = require('./middlewares/logger');
const userRouter = require('./routes/users');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(requestLogger);

app.use('/user', userRouter);

app.get('/', (req, res) => {
  console.log(req.query);
  const sabor = req.query['sabor'];
  console.log(sabor);

  res.status(200).send(
    JSON.stringify({
      message: `Hola, estas accediendo al endpoint /${req.params.id}`,
    })
  );
});

app.post('/', middleware, (req, res) => {
  res
    .status(200)
    .send(JSON.stringify({ message: 'Data received', data: req.body.data }));
});

app.use(errorLogger);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
