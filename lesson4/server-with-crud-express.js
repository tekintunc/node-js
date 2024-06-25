const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

const users = [
  { id: 1, name: 'Huseyin' },
  { id: 2, name: 'Ferhat' },
  { id: 3, name: 'Tekin' },
];

// cors
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  res.status(200).send(users);
});

app.get('/users/:id', (req, res) => {
  // console.log("req.params ", req.params)
  const userId = Number(req.params.id);
  const user = users.find((user) => user.id == userId);

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ message: 'User not found!!!' });
  }
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  users.push(newUser);
  res.status(201).send(newUser);
});

app.put('/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const updatedUser = req.body;
  let userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = updatedUser;
    res.status(200).send(updatedUser);
  } else {
    res.status(404).send({
      message: 'User not found!!!',
    });
  }
});

app.delete('/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  let userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send({
      message: 'User not found!!!',
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});