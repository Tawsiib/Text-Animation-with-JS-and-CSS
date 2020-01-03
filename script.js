const text = document.querySelector("h1");
const textContent = text.textContent; 
const splitText = textContent.split(""); // split the content into individual text as indexed array

// add span tag to each text by looping through splited text array
text.textContent = "";
for (let i = 0;i<splitText.length; i++) {
	text.innerHTML += "<span>"+splitText[i]+"</span>";
};

// add class name into each span tags .. take 50 mili-second (for add class into individual tag)
let char = 0;
let timer = setInterval(()=>{
	const span = document.querySelectorAll("span")[char];
	span.classList.add("animate");
  	char++;
	if (char === splitText.length) {
	  	complete();
	  	return;
	}
},50);

function complete(){
	clearInterval(timer);
	timer = null;
}

