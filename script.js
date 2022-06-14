const login = () => {
    const login = document.querySelector('[text = "login"]').value
    const pass = document.querySelector('[text = "pass"]').value
    let a = ''
    for (let i = 0; i < login.length - 1; i++) {
        a = a + login[i]
    }
    if (a === 'user' && pass === '12345') {
        localStorage.setItem('user', login)
        window.location = 'users/user1.html'
    }
    else if(pass !== '12345' || a !== 'user' || login.toString().slice(-1) > 4 || login.toString().slice(-1) < 1){
        document.querySelector('.error').style.top = '0'
    }
}
document.querySelector('.error div').addEventListener('click', ()=>{
    document.querySelector('.error').style.top = '-50px'
})