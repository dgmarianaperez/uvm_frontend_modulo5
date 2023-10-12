import _ from 'lodash';
import './estilo.css';
import Imagen from './imagen.png';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';

// service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()=> {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log("SW resgistrado", registration);
        }) .catch(err=>{
            console.log("SW no resgistrado", err)
        });
    });
}

function componente() {
    const elemento = document.createElement('div');
    //para utilizar esta línea se necesita la biblioteca lodash
    elemento.innerHTML = _.join(['Hola','Webpack'], ' '); // guión bajo _ declarado en el import con origen en lodash
    elemento.classList.add("holacolor"); //llamamos clase del css
    
    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);
    
    console.log(Datos);
    return elemento;
}

console.log(yaml.title);
console.log(json5.owner.name);
document.body.appendChild(componente())