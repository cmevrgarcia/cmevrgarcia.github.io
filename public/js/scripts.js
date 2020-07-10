//console.log("Hello world");



function Post(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        //alert(this.status);
        if(this.readyState == 4 && this.status == 200) {
            alert("Added");
        }
    };

    request.open("POST", host+"/api/"+controllerName);
    request.setRequestHeader("Content-type", "text/json");
    request.send(JSON.stringify(value));
}

function Get(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        //alert(this.status);
        if(this.readyState == 4 && this.status == 200) {
            alert("Showned");
        }
    };

    request.open("GET", host+"/api/"+controllerName+"/"+value);
    request.send();
}

function Put(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        //alert(this.status);
        if(this.readyState == 4 && this.status == 200) {
            alert("Updated");
        }
    };

    request.open("PUT", host+"/api/"+controllerName);
    request.setRequestHeader("Content-type", "text/json");
    request.send(JSON.stringify(value));
}

function Delete(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        //alert(this.status);
        if(this.readyState == 4 && this.status == 200) {
            alert("Deleted");
        }
    };

    request.open("DELETE", host+"/api/"+controllerName+"/"+value);
    request.send();
}


var btn = document.getElementById("btn");
var inputName = document.getElementById("name-input");
var nameSpan = document.getElementById("name-error-span");
// console.log(btn);
// console.log(inputName);
// console.log(nameSpan);

btn.addEventListener("click", ()=>{
    var nameValue = inputName.value;
    if(nameValue == "") 
    {
        alert("Fail");
        nameSpan.style.setProperty("display", "block");
    }
    else 
    {
        nameSpan.style.setProperty("display", "none");
        //var value = {"name":nameValue};
        //alert("Hello "+ nameValue);
        //Post("https://localhost:44353", "dietaryrestriction", value)
        var value = "878DF069-7AEA-457D-7991-08D823FCCC09";
        Get("https://localhost:44353", "dietaryrestriction", value)
    }
});