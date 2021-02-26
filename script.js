function remplirBingo(){
	var values = ["Tank Stance","Wrong Side","Auto Attack","Early Feed","Bubble","Cone Murder","Cleaved by TB","Hand of Pain","Midi saves Hand of Pain","aquila pre-pulls","cones align perfectly","kris forgets to draw","TH says \"oh fuck\" but nothing happens","Brute Justice music starts","Aetheroplasm too much","Rake Rabbit"];
	values = shuffle(values);
	for (var i = values.length - 1; i >= 0; i--) {
		document.getElementById(i).innerText = values[i];
		document.getElementById(i).addEventListener("click",function(){toggleCheck(this)});
	}
}

function toggleCheck(cell){
	if(cell.classList.contains("checked")){
		cell.classList.remove("checked");
	}else{
		cell.classList.add("checked");
	}
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}