import Form from './form';

export default class windowOpener {
  constructor(element, form) {
    this.element = element;
    this.form = form;
    this.arr = [];
    // this.count = this.arr;
    // this.arrse = this.arrse.bind(this);
    // this.form.element.querySelector('.save').addEventListener('click', this.arrse);
  }

  // создание формы и заполнение свойства арр
  add() {
    const window1 = document.createElement('div');
    window1.className = 'wind';
    window1.innerHTML = `<form action="/my-handling-form-page" method="post" class = 'form'>
      <ul>
        <li class ='li'>
          <label for="name">Название</label>
          <input type="text" id="name" name="user_name" required>
        </li>
        <li  class ='li'>
          <label for="mail">Стоимость</label>
          <input type = 'text' id="mail" name="user_mail" required>
        </li>       
      </ul>
      <button class ='btn save'>Сохранить</button>
      <button class ='btn not'>Отмена</button>
    </form>`;
    document.body.appendChild(window1);
    // if (targetElement) {
    //    const coords = targetElement.getBoundingClientRect();
    //    tooltip.style.top = `${coords.top - tooltip.offsetHeight - 15}px`;
    //    // tooltip.style.left =
    //    // `${ coords.left + tooltip.offsetWidth / 2 - tooltip.offsetWidth / 2}px`;
    //  }
    console.log(this, this.element);
    //  const form1 = new Form('.form');


    // const count = this.arr.length;
    // this.form.id = this.arr.length;
    // if (this.arr.length >1){
    //   this.arr.forEach(el =>{
    //     const li = document.createElement('div');
    //     li.className = 'pull';
    //     li.innerHTML =` <ul><li class ='item'>
    //     ${el.name}
    //   </li>
    //   <li  class ='item'>
    //   ${el.price}
    //   </li>
    //   </ul>      `
    //   document.body.querySelector('.main').appendChild(li);
    //   });
    // }


    // console.log(this.arr);
  }

  // создание формы и запись обьектов - строк в свойство арр
  formid() {
    this.form = new Form('.form');
    console.log(this.form);
    this.form.element.querySelector('.save').addEventListener('click', () => {
      if (this.form.element.querySelector('#name').value && this.form.element.querySelector('#mail').value) {
      //this.form.element.checkValidity()
        this.arr.push(this.form.obj);
      console.log(this.form.obj, this.arr);
      this.arr.forEach((el) => {
        for (let i = 1; i <= this.arr.length; i++) {
          this.form.obj.id = i;

          // в каждом обьекту присваиваем id значение цикла i;
          // console.log(this.form.obj)
          // this.arrse();

          // this.arrse();
        }
      });
      // eslint-disable-next-line no-plusplus
   }
  });
    return true;
  }
  // данные записываюия в локалсторадж
  // arrse() {
  //   this.arr.forEach((el) => {
  //     const f = localStorage.setItem(`${el.id}`, JSON.stringify(el));
  //     // window.onload = function() {
  //     //   console.log(JSON.parse(localStorage.getItem(`${el.id}`)));
  //     //   this.form = new Form('.form');
  //     // }
  //     console.log(el);
  //   });
  //   //  console.log(localStorage.getItem(`${el.id}`));
  // }

  // редактирование позиции
  redactor(eleme) {
    Object.keys(localStorage).forEach((el) => {
      try {
        const r = JSON.parse(localStorage.getItem(el));
        if (Number(eleme.closest('.items').querySelector('.item').textContent) === r.id) {
          this.form = new Form('.form', r.id);
          console.log(this.form)
        }
      } catch (e) {
        console.log(e);
      }
    });
  }

  close(eleme) {
    // этот метод должен удалять в массиве выбранный обьект по ид
    this.arr.forEach((el) => {
      if (el.id === Number(eleme.closest('.items').querySelector('.item').textContent)) {
        this.arr.splice(this.arr.indexOf(el), 1);// жесть....в шоке что работает
        console.log(this.arr, 4565);
        localStorage.removeItem(`${el.id}`); //! !!
      }
      console.log(eleme.closest('.items').querySelector('.item').textContent, this.arr); // тест контетнт переводим в число!
    });
    console.log(eleme);
  }
}

// const x = new windowOpener().count;
// console.log(x);
