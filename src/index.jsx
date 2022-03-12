import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

/* const Button = () => {
  const [name, setName] = React.useState('Hola');

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
} */

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);