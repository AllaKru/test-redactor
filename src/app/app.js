// TODO: write code here
import RegisterForm from './components/RegisterForm/RegisterForm';
import Tooltip from './components/Tooltip/Tooltip';
import Form from './form';
import Reader from './reader';
import windowOpener from './windowopener';

// const registerForm = new RegisterForm('.btn', new Tooltip());
// window.registerForm = registerForm;

// запуск класса с аргументами - элемнтом и вторым классом


const reader = new Reader('.main', new windowOpener());
window.reader = reader;
// window.addEventListener('onload', () => {
//    // console.log(JSON.parse(localStorage.getItem(`1`)));
//    alert('Страница загружена');
//    //  this.form = new Form('.form');
// })
// window.onload = function() {
//    console.log(JSON.parse(localStorage.getItem(`1`)));
// }
