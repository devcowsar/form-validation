function validate(){
   let name=document.forms.rform.name.value;
   let adress=document.forms.rform.adress.value;
    let email=document.forms.rform.mail.value;
    let phone=document.forms.rform.phone.value;
    let subject=document.forms.rform.subject.value;
    let password=document.forms.rform.password.value;
    let spassword=document.forms.rform.spassword.value;
    let regEmail=/^\w+([\.-]?\w+)+@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    let regPhone=/^\d{11}$/g;
    let regName=/\d+$/g;
    let status=false;
    if(name== ''||!regName.test(name)){
        document.getElementById("name").innerHTML='<i class="fa-solid fa-check" style="color:red ;"></i>'+"please enter your valid name ";
        status= false;
    }else if(regName.test(name)){
        document.getElementById("name").innerHTML='<i class="fa-solid fa-check" style="color:red ;"></i>';
        status= true;
    }
    
    if(adress== ''){
        document.getElementById('adress').innerHTML='<i class="fa-solid fa-skull-crossbones"></i>'+"please enter your adrees";
       status = false;
    }else{
        document.getElementById('adress').innerHTML="";
        status=true;
    }

   if(email== ''|| !regEmail.test(email)){
    document.getElementById('email').innerHTML="please enter valid email";
    status = false;
   }else{
    document.getElementById('email').innerHTML="";
        status=true;
   }

   if(password==''){
    document.getElementById('password').innerHTML="enter your password";
    status = false;
   }else if(password.length<8){
    document.getElementById('password').innerHTML="password need to be 8 characters";
    status = false;
   }else{
    document.getElementById('password').innerHTML="";
    status=true;
   }
   if(spassword==""){
    document.getElementById('spassword').innerHTML="please re-enter your password";
   }
   else if(password==spassword){
    document.getElementById('spassword').innerHTML="";
    status =true;
   }else{
    document.getElementById('spassword').innerHTML="password not matchd";
    status=false
   }
   if(phone== ''|| !regPhone.test(phone)){
    document.getElementById('phone').innerHTML="give correct phone number";
    status = false;
   }else{
    document.getElementById('phone').innerHTML="";
   }
   if(subject.selectedIndex === -1){
    document.getElementById('subject').innerHTML="please select any topics";
    status = false;

   }

 return status;

}