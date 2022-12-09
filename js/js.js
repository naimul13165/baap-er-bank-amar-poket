document.getElementById('from-button').addEventListener('click', function(){
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    const passwordFiled = document.getElementById('password');
    const password = passwordFiled.value;
    if(email === 'naimulislammd071@gmail.com' && password === '01641606088'){
      window.location.href = 'bank.html'
    }
    else{
        alert('fuck you')
    }
})
