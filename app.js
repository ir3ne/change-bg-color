const body = document.body;
const colors = ["#820263", "#D90368", "#86CB92", "#2E294E", "#FFD400", "#F46036"];
let i = 0;

function change() {
	body.style.backgroundColor = colors[i];
  i++;
  if(i > colors.length - 1) {
    i = 0;
  }
}
setInterval(change, 3000);
