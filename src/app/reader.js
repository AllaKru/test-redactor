import Form from './form';

export default class Reader {
   constructor(element, el) { // и так работает хотя класс пуст в апп
      if (typeof element === 'string') {
         element = document.querySelector(element);
      }
      this.element = element;
      this.el = el;
      // this.form = form;
      this.onClick = this.onClick.bind(this);
      this.onAdd = this.onAdd.bind(this);
      this.onClose = this.onClose.bind(this);
      this.onLoad = this.onLoad.bind(this);
      this.onRedactor = this.onRedactor.bind(this);
      this.element.addEventListener('click', this.onClick);
      this.element.addEventListener('click', this.onAdd);
      this.element.addEventListener('click', this.onClose);
      this.element.addEventListener('click', this.onRedactor);
      window.onload = this.onLoad();
      // this.init();
   }

   // init() {
   //    window.onload = function() {
   //       // const h = new Form('.form');
   //       // console.log(JSON.parse(localStorage.getItem(`${h.obj}`)));
   //       // this.el.arr.forEach((el)=>{
   //       //    console.log(456)
   //       // })
   //       console.log(this.el)
   //     }
   // }

   onClick(e) { // выбор строки по цвету
      e.preventDefault();
      if (e.target !== this.element.querySelector('.header')) {
         if (this.element.querySelector('.name1')) {
            this.element.querySelector('.name1').classList.remove('name1');
            this.element.querySelector('.name2').classList.remove('name2');
         }
         e.target.classList.add('name1');
         e.target.closest('.items').classList.add('name2');
         console.log(e.target);
         //       if (e.target.classList.contains('name1')) {
         //          e.target.classList.remove('name1');
         //          // e.target.closest('.items').classList.remove('name2');
         //       } else {
         //          e.target.classList.add('name1');
         //          e.target.closest('.items').classList.add('name2');
         //          console.log( e.target.closest('.items'))

         // // setTimeout(()=> document.querySelector('.btn').click(), 1000);
         //       }
      } else return;
   }


   // окно всплывает и уходит, работа с формой
   onAdd(e) {
      e.preventDefault();
      if (this.element.querySelector('.header') === e.target) {
         this.element.querySelector('.header').classList.toggle('name3');
         if (document.querySelector('.wind')) {
            console.log(111);

            document.querySelector('.wind').remove();
         } else {
            this.el.add();
            this.el.formid();
            // this.el.arrse();
         }
      }
   }

   // удаление позиции
   onClose(e) {
      Array.from(this.element.querySelectorAll('.x')).forEach((el) => {
         if (e.target === el) {
            e.target.closest('.pull').remove();// удаление
            this.el.close(e.target);
         }
      });
   }

   // редактирование позиции
   // Доделатььььььььььььььььььььььь
   onRedactor(e) {
      e.preventDefault();
      Array.from(this.element.querySelectorAll('.redactor')).forEach((el) => {
         if (e.target === el) {
            this.el.add();
            // const form = new Form('.form');
            // form.onClick(e);
            document.querySelector('.wind').querySelector('#name').value = el.closest('.items').querySelector('.nam').textContent;
            document.querySelector('.wind').querySelector('#mail').value = el.closest('.items').querySelector('.price').textContent;
            // const f1 = new Form('.form');
            // f1.onClick(e);
            this.el.redactor(el);

            // if (this.el.formid()) {
            //    el.closest('.pull').remove();
            // }
            // const fff = new FormData(document.forms[0])
            // console.log(fff)
            //  el.closest('.pull').remove();
            // e.target.closest('.items').querySelector('.nam').textContent = document.querySelector('.wind').querySelector('#name').value;
            // e.target.closest('.items').querySelector('.price').textContent = document.querySelector('.wind').querySelector('#mail').value;
         }
         // if (e.target.closest('.pull')) {
         //    e.target.closest('.pull').remove();
         // }
      });
      // document.querySelector('.name2').remove();
   }

   // берет данные из локал стораж и выводит на странице
   // eslint-disable-next-line class-methods-use-this
   onLoad() {
      // window.onload = function() {
      //    // const h = new Form('.form');
      //    // console.log(JSON.parse(localStorage.getItem(`${h.obj}`)));
      // this.el.arr.forEach((el) => {
      //    const y = JSON.parse(localStorage.getItem(`${el.id}`));
      //    console.log(y);
      // });
      // const per =
      // console.log(JSON.parse(localStorage.getItem(`${this.el.arr.obj.id}`)));


      Object.keys(localStorage).forEach((el) => {
         try {
            const f = new Form('.main');// второй аргумент - null
            const r = JSON.parse(localStorage.getItem(el));

            console.log(Object.keys(localStorage));
            console.log(r);

            if (typeof r.id === 'number') {
               f.html(r);
               this.el.arr.push(r);
               console.log(this.el.arr);


               // const li = document.createElement('div');
               // li.className = 'pull';
               // li.innerHTML = ` <ul class = 'items'><li class ='item'>
               //        ${r.id}
               //      </li><li class ='item'>
               //          ${r.name}
               //        </li>
               //        <li  class ='item'>
               //        ${r.price}
               //        </li>
               //        <li class='item x'>x</li>
               //         <li class='item'>Редактировать</li>
               //        </ul>  `;
               // document.body.querySelector('.main').appendChild(li);
            } else if (r.id === undefined) {
               localStorage.removeItem(`${r.id}`);
            }
         } catch (error) {
            console.log(error);
         }
      });
   }
}
