import './styles/main.scss'
import 'tippy.js/dist/tippy.css';

import tippy from 'tippy.js';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

import headerImage from './img/fabianwittel.jpg';
import logoImage from './img/logo.jpg';

document.querySelector('#face img').src = headerImage;
[...document.querySelectorAll('[id^="logo"] img')].forEach(node => node.setAttribute("src", logoImage));

let  init = () => UIkit.modal("#modal-cookies").show();
document.addEventListener('DOMContentLoaded', init); 
