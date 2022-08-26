const open = document.getElementById("btn__open");

if (open) {
  open.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("sidebar").style.transform = "translate(24rem)";
  });
}
if (close) {
  const close = document.getElementById("btn__close");
  close.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("sidebar").style.transform = "translate(-24rem)";
  });
}
