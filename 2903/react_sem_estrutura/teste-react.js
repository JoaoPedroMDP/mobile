'use strict';

var el = React.createElement;

function MeuElemento() {
  return React.createElement(
    'h1',
    null,
    'Ola mundo em react'
  );
}

var domContainer = document.querySelector('#react');
ReactDOM.render(el(MeuElemento, null, null), domContainer);