var div = document.createElement("div");
div.innerText = ".";
const container = document.getElementById("container");

for(let i = 0; i < 16; i++){
	for(let j = 0; j < 16; j++) {
	var div = document.createElement("div");
	div.classList.add("square");
	container.appendChild(div);

console.log(i);
	}
}