import RegisterForm from '../components/RegisterForm/RegisterForm';
import Tooltip from '../components/Tooltip/Tooltip';

test('test app', () => {
  const btn = document.createElement('div');
  btn.innerHTML = `<button type="button" class="btn" data-toggle="popover" title="Popover title"
   data-content="And here's some amazing content. It's very engaging. Right?"
   data-original-title ="Popover title">
   Click to toggle popover</button>`;
  document.body.appendChild(btn);
  // eslint-disable-next-line no-unused-vars
  const registerForm1 = new RegisterForm('.btn', new Tooltip());
  btn.addEventListener('click', () => {
    expect(document.querySelector('.tooltip').textContent).toBe('Popover titleAnd here\'s some amazing content. It\'s very engaging. Right?');
  });
});
