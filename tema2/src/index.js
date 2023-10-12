import _ from 'lodash';

function componente() {
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola','Webpack'], ' '); // guión bajo _ declarado en el import con origen en lodash
    return elemento;
}

document.body.appendChild( componente() )