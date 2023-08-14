




let a = prompt("piz add number")
let b = prompt("piz add number")

if (a === null || a.trim() === '' || isNaN(a)) {
    alert('Invalid Number');
} else if (b === null || b.trim() === '' || isNaN(b)) {
    alert('Invalid Number') ;
} else alert(+a + +b);