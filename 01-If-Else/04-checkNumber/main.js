
let input = prompt("piz add number")

if(input > 0){ 
    alert('Positive number')
}
else if (input === null || input.trim() === "" || isNaN(input)){
    alert('Invalid number');
}
else if (input === 0 || input == 0 || input === "0"){
    alert('“Zero”')
}
else if (input < 0){
    alert('Negative number')
}



  
