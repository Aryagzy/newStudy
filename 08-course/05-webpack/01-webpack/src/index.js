console.log('第一次用webpack');

document.addEventListener('DOMContentLoaded', () => {
  const h1Ele = document.createElement('h1');
  document.body.append(h1Ele);
  h1Ele.innerText = 'Hello Webpack (^_^)';
  h1Ele.style.color = 'pink';
})