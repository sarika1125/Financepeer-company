function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username == "admin" && password == "admin")
    {
        alert(" login successfull ");
        var upload=document.getElementById("fileToUpload").value;
    }
    else{

        alert("login failed");
    }

}
function validateLogOut(){
	var currentUser = Parse.username.current();
		if(currentUser){
			Parse.username.logout();
			Window.location="login.html";
		}
		else{
			Window.location="logout.html";
		}
}