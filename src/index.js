import _ from 'lodash';
import './style.css'; 
import Icon from './icon.png';
import printMe from './print.js';

function component(){
	var element = document.createElement('div'); 
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;
    myIcon.width = 100;
    myIcon.height = 300;
    element.appendChild(myIcon);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me';
    btn.onclick = printMe; 
    element.appendChild(btn); 

	return element;
}

document.body.appendChild(component());