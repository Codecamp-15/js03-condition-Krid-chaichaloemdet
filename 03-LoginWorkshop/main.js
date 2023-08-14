let user = prompt("user");
let password 
if (user!=="codecamp") {
    user= "guest";
   alert(user)
}
else if (user === "codecamp"){
    password=prompt("password")
    if (password!=="123456"){
        alert("Wrong password")
        user="guest"
        alert("Welcom"+" "+user)
    }else{
        user="codecamp"
        alert("Welcom"+" "+user)
    
}}



let user = prompt("whar is your name?")

if (user.trim() === ''){
    alert( "guest" );

}
else if(user == "codecamp") {
    let password = prompt("what is your password?"
    , )
   
}
else if (password == 123456){
    user = codecamp
}
else if (password != 123456) {
    alert("Wrong password")
}

