const autolog = {
  log(text, type = "log", time = 2500) {
    if (typeof type === "number") {
      time = type;
      type = "log";
    }
    let mainEl = getMainElement();
    let el = document.createElement("span");
    el.className = `autolog-${type}`;
    el.innerHTML = text;
    mainEl.appendChild(el);
    setTimeout(() => {
      el.classList.add("hide");
    }, time - 500);
    setTimeout(() => {
      mainEl.removeChild(el);
      el = null;
    }, time);
  },
};
function getMainElement() {
  let mainEl = document.querySelector("#autolog");
  if (!mainEl) {
    mainEl = document.createElement("div");
    mainEl.id = "autolog";
    document.body.appendChild(mainEl);
  }
  return mainEl;
}
export default autolog;
