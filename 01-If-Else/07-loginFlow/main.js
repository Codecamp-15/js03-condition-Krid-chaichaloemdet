


let username = prompt("username")
let password = prompt("password")

if (username.trim() === " " || username == " " || username == "") {
    alert("username is required")
}
if (password.trim() === " " || password == " " || password == "") {
    alert("password is required")
}

else if (username.trim() === " " || username == " "||password == " "||password.trim() === "") 
{
    alert("invalid username or password")
}

else if (username == "admin" && password == "1234")
    {
        alert("Hello admin")
    }

 else if (username == "John" && password == "qwerty") 
 {
    alert("Hello John")
}




