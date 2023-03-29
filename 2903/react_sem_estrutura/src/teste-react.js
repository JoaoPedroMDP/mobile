'use strict';

const el = React.createElement;

function MeuElemento() {
  return(
    <h1>Ola mundo em react</h1>
  )
}

const domContainer = document.querySelector('#react');
ReactDOM.render(el(MeuElemento, null, null), domContainer);
