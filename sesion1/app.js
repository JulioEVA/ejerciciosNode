const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/:id', (req, res) => {
  console.log(req.query);
  const sabor = req.query['sabor'];
  console.log(sabor);

  res.status(200).send(
    JSON.stringify({
      message: `Hola, estas accediendo al endpoint /${req.params.id}`,
    })
  );
});

app.post('/', (req, res) => {
  console.log(req.body);
  res
    .status(200)
    .send(JSON.stringify({ message: 'Data received', data: req.body.data }));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
