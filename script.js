const container = document.getElementById("container");
let size = prompt("Enter you size");
 

for(let i = 0; i < size; i++){
	for(let j = 0; j < size; j++) {
	let square = document.createElement("div");
	square.classList.add("square");

	container.appendChild(square);
	}
}


const sq = document.querySelectorAll(".square");

sq.forEach(function(square) {
	square.addEventListener('mousemove', function(event) {
		if (event.buttons === 1) {
			square.classList.add("black");
		};
	});
  });
  