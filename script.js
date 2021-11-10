const username = "admin";
const password = "admin123"

function check_inputs() {
    if (document.getElementById("user_input").value.trim() != "" || document.getElementById("user_input").value.trim() != ""){
        if (document.getElementById("user_input").value == username && document.getElementById("pass_input").value == password){
            document.getElementById("status").innerHTML = "Logged In!";
            document.getElementById("status").style.color = "blue";
        } else {
            document.getElementById("status").innerHTML = "*Incorrect Username or Password";
            document.getElementById("status").style.color = "red";
        }
    } else {
        document.getElementById("status").innerHTML = "*Please Fill Up the Form";
            document.getElementById("status").style.color = "red";
    }
}