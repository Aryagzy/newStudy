export default function click() {
  const h1Ele = document.createElement("h1");
  document.body.append(h1Ele);
  h1Ele.innerText = "Hello Webpack (^_^)";
  h1Ele.style.color = "pink";
}
