 function clicked() 
 {
 var user = document.getElementById('username');
 var pass = document.getElementById('password');
 
 var coruser = "cse";
 var corpass = "dce@cse";
 
 if(user.value ==coruser)
 {
 
 if(pass.value ==corpass)
 {
 window.open("https://form.jotform.me/vishalchahar/Student_Detail_Form");
 }
 
 else
 {
 window.alert("Incorrect username or password");
 }
 }

 else
 {
 window.alert("Incorrect username or password");
 } 
 }