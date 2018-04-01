import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();
const port = process.env.HOST || 3000;

let options = {
  pageTitle: 'Project Folders'
}

server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
  })
);
server.set('view engine', 'pug');
server.use(express.static('./public'));
server.use('/assets', express.static(__dirname + '/assets'))

server.get('/', (req, res) => {
  res.render('index', options);
});

server.listen(port, () => { 
  console.info(`server is listening on port ${port}`);
});