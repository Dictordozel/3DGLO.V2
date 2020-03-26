'use strict';


import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu'; 
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import command from './modules/command';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
    
// Timer
countTimer('31 december 2020');
// Menu
toggleMenu();
togglePopUp();
// Tabs
tabs();
// Slider
slider();
// Command
command();
// Калькулятор
calc(100);
// Send-ajax-form
sendForm();