// import windowOpener from './windowopener';

// let count1;
// for (let i = 0; i <= 1000; i++) {
//    count1 = i;
// }
export default class Form {
  constructor(element, redactor) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this.element = element;
    this.redactor = redactor;
    this.onClick = this.onClick.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onForm = this.onForm.bind(this);
    this.html = this.html.bind(this);
    this.element.addEventListener('click', this.onClick);
    this.element.addEventListener('click', this.onForm);
    this.element.addEventListener('focusout', this.onInput);
    // this.element.addEventListener('click', this.onClick2);
    //  this.element.addEventListener('click', this.html);
    // this.arr = []; // как свойство класса - общее
    this.obj = {};
    // this.count = new windowOpener().arr.length;

    // this.arr = new windowOpener('.form');
    // this.arr.add()
  }

  onInput(e) {
    // if (e.target === this.element.querySelector('.save')) {
    //   this.obj.name = this.element.querySelector('#name').value;
    //   this.obj.price = this.element.querySelector('#mail').value;

    //   // this.html(this.obj);
    //   localStorage.setItem(`${this.obj.id}`, JSON.stringify(this.obj));
    //   // console.log(el);

    //   // УДАЛИЛИ ФОРМУ
    //   this.element.closest('.wind').remove();
    // }


    // console.log(obj, this.arr);
    if (!this.element.checkValidity()) {
      console.log('Вы забыли заполните это поле', this.element.checkValidity());
    }
  }

  onClick(e) {
    // this.arr = [];
    // const obj = {}; // при каждом клике формируется отдельный обект

    // let count = 0;

    // ЗАПИСАЛИ ИЗ ФОРМЫ
    // if (!this.element.checkValidity()) {
    //   // почему так... console.log('что-нибудь...')
    //   return;
    // }
    console.log(this.element);
    e.preventDefault();
    // console.log(this.element.checkValidity())

    if (e.target === this.element.querySelector('.save')) {
      if (this.element.querySelector('#name').value && this.element.querySelector('#mail').value) {
        //     // this.element.querySelector('#name').value && this.element.querySelector('#mail').value

        //     // this.onInput();
        this.obj.name = this.element.querySelector('#name').value;
        this.obj.price = this.element.querySelector('#mail').value;
        if (this.obj.id === undefined) {
          this.obj.id = this.redactor;

          document.querySelector('.name2').closest('.pull').remove();
          console.log(this.obj.id);
        }
        this.html(this.obj);
        localStorage.setItem(`${this.obj.id}`, JSON.stringify(this.obj));
        // УДАЛИЛИ ФОРМУ
        this.element.closest('.wind').remove();
        console.log(this.element);
      } else {
        console.log('заполните поля');
      }
      //   // Array.from(document.querySelectorAll('.redactor')).forEach((el)=>{
      //   //   if (this.obj.id !== Number(el.closest('.items').querySelector('.item').textContent)) {
      //   //     this.html(this.obj);
      //   //     localStorage.setItem(`${this.obj.id}`, JSON.stringify(this.obj));
      //   //     console.log(78989)
      //   //   } else{
      //   //     localStorage.setItem(`${this.obj.id}`, JSON.stringify(this.obj));
      //   //     console.log(789)
      //   //   }
      //   // })
    }
  }

  // работа кнопки Отмена
  onForm(e) {
    e.preventDefault();
    if (e.target === this.element.querySelector('.not')) {
      // this.element.classList.toggle('none')
      this.element.closest('.wind').remove();
    }
  }

  html(obj) {
    // obj.name = this.element.querySelector('#name').value;
    // obj.price = this.element.querySelector('#mail').value;

    const li = document.createElement('div');
    li.className = 'pull';
    li.innerHTML = ` <ul class = 'items'><li class ='item'>
      ${obj.id}
     </li><li class ='item nam'>
         ${obj.name}
       </li>
       <li  class ='item price'>
       ${obj.price}
       </li> 
       <li class='item x'>x</li>
        <li class='item redactor'>Редактировать</li>
       </ul>      `;

    document.body.querySelector('.main').appendChild(li);
  }
}
