const container = document.getElementById("container");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");

btn.addEventListener("click", ()=> {
	
	let size = prompt("Enter you size");
	if (size > 100) {
		size = 100;
	} else {
		size = size;
	};
	console.log(size);
	generateGrid(size);
	paint();
});


btn2.addEventListener("click", ()=> {
	clearGrid()
	
})

function generateGrid(size) {
	let z = 1000/size;
for(let i = 0; i < size; i++){
	for(let j = 0; j < size; j++) {
	let square = document.createElement("div");
	square.classList.add("square");
	square.style.width = `${z}px`;
	square.style.height = `${z}px`;
	container.appendChild(square);
	}
}
}


function paint(){
const squares = document.querySelectorAll(".square");

squares.forEach(function(square) {
	square.addEventListener('mousemove', function(event) {
		if (event.buttons === 1) {
			square.classList.add("black");
		};
	});
  });
}


function clearGrid(){
	const squares = document.querySelectorAll(".square");

squares.forEach(function(square) {
	square.remove() 
  });

}































