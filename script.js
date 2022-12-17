let snow = document.querySelector(".snow");
let whale_cont = document.querySelector(".whale-cont");
let mountain = document.querySelector(".mount.layer-2");



let snowfall = [];

function start_snowfall() {
	for (var i = 0; i < 5; i++) {
		let snow_line = document.createElement("div");

		snow_line.className = `snow-line fall-type-${Math.floor(Math.random() * 5)} time-type-${Math.floor(Math.random() * 5)}`;
		snow_line.style.zIndex = Math.floor(Math.random() * 16) + 1;
		snow_line.style.opacity = 1;

		let snow_inner = "";
		for (var j = 0; j < 10; j++)
			snow_inner += `<div class="snowflake" style="top: ${Math.floor(Math.random() * 100)}%;
														 left: ${Math.floor(Math.random() * 99)}%;
														 border-width: ${(Math.floor(Math.random() * 30) + 40) / 100}vh">
														 </div>\n`;
		snow_line.innerHTML = snow_inner;
		snowfall.push(snow_line);
		snow.append(snow_line);
	}
}

start_snowfall();
setTimeout(start_snowfall, 1000);
setTimeout(start_snowfall, 2000);
setTimeout(start_snowfall, 3000);
setTimeout(start_snowfall, 4000);
setTimeout(start_snowfall, 5000);


whale_cont.style.bottom = `${mountain.clientHeight * 0.45}px`;
whale_cont.style.opacity = 1;
