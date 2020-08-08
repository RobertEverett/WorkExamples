var nameinput = document.getElementById('Name')
var passwordinput = document.getElementById('Pass')
var confirminput = document.getElementById('Confirm')


function validate()  {
    
    if (nameinput.value === '' || nameinput.value == null){
        document.getElementById("error1").style.backgroundColor="#ff4747";
        document.getElementById("error1").style.border="2px solid blue";
        document.getElementById("errortext1").textContent = 'Name is required';
    
    }else if (nameinput.value !== ''){
        document.getElementById("error1").style.backgroundColor='';
        document.getElementById("error1").style.border="";
        document.getElementById("errortext1").textContent = '';
    
    }  if (passwordinput.value === '') {
        document.getElementById("error2").style.backgroundColor="#ff4747";
        document.getElementById("error2").style.border="2px solid blue";
        document.getElementById("errortext2").textContent = 'Please enter a password';

    } else if (passwordinput.value.length >= 1 && passwordinput.value.length < 8 || passwordinput.value.length > 20) {
        document.getElementById("error2").style.backgroundColor="#ff4747";
        document.getElementById("error2").style.border="2px solid blue";
        document.getElementById("errortext2").textContent ='Password must be at least 8 characters in length but no more than 20 characters in length';
        event.preventDefault();
    } else if (passwordinput.value.length >= 8 && passwordinput.value.length <= 20) {
        document.getElementById("error2").style.backgroundColor="";
        document.getElementById("error2").style.border="";
        document.getElementById("errortext2").textContent ='';
        
    } if(confirminput.value === '' || confirminput.value !== passwordinput.value) {
        document.getElementById("error3").style.backgroundColor="#ff4747";
        document.getElementById("error3").style.border="2px solid blue";
        document.getElementById("errortext3").textContent = 'Passwords must match'
       event.preventDefault();
    }else if(confirminput.value === passwordinput.value) {
        document.getElementById("error3").style.backgroundColor="";
        document.getElementById("error3").style.border="";
        document.getElementById("errortext3").textContent = "";

    }else if(confirminput.value !== passwordinput.value) {
    event.preventDefault();
    }   
};

function init() {
    document.getElementById('form').onsubmit = validate();
};


    
