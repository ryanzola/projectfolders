import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();
const port = process.env.HOST || 3000;

server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
  })
);
server.set('view engine', 'pug');
server.use(express.static('./public'));

server.get('/', (req, res) => {
  res.render('index');
});

server.listen(port, () => { 
  console.info(`server is listening on port ${port}`);
});
