import express from 'express';
import favicon from 'serve-favicon';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

let options = {
  pageTitle: 'Project Folders'
}

server.set('port', (process.env.PORT || 3000));
server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
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

server.listen(server.get('port'));
