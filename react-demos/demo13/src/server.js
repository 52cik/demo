var http = require('http');
var browserify = require('browserify');
var literalify = require('literalify');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var App = require('./app');

http.createServer(function(req, res) {
  if (req.url == '/') { // 主页
    res.setHeader('Content-Type', 'text/html');
    var props = {
      items: [
        'Item 0',
        'Item 1'
      ]
    };
    var html = ReactDOMServer.renderToStaticMarkup(
      <body>
        <div id="content" dangerouslySetInnerHTML={{__html:
          ReactDOMServer.renderToString(<App items={props.items}/>)
        }} />

        <script dangerouslySetInnerHTML={{__html:
        'var APP_PROPS = ' + JSON.stringify(props) + ';'
        }}/>
        <script src="//www.52cik.com/demo/react-demos/build/react.min.js"/>
        <script src="//www.52cik.com/demo/react-demos/build/react-dom.min.js"/>
        <script src="/bundle.js"/>
      </body>
    );
    res.end(html);

  } else if (req.url == '/bundle.js') { // js
    res.setHeader('Content-Type', 'text/javascript');
    browserify()
      .add('./browser.js')
      .transform(literalify.configure({
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
      }))
      .bundle()
      .pipe(res);
  } else { // 404
    res.statusCode = 404;
    res.end();
  }
}).listen(3000, function(err) {
  if (err) throw err;
  console.log('Listening on 3000...');
});