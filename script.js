const btnNao = document.getElementById("btnNao");
const btnSim = document.getElementById("btnSim");

btnSim.addEventListener("click", () => {
  window.location.href = "sim.html";
});

btnNao.addEventListener("mousedown", () => {
  const container = document.querySelector(".botoes");
  const maxWidth = container.clientWidth - btnNao.offsetWidth;
  const maxHeight = container.clientHeight - btnNao.offsetHeight;

  const randomX = Math.random() * maxWidth;
  const randomY = Math.random() * maxHeight;

  btnNao.style.left = `${randomX}px`;
  btnNao.style.top = `${randomY}px`;
});
