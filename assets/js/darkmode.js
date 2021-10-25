var btn = document.getElementById('botao');
var img = document.getElementById('logo')

document.getElementById('botao').onclick = function() {
    document.documentElement.classList.toggle("dark-mode");
    document.querySelectorAll('.inverted').forEach(el => el.classList.toggle('invert'));
    if (btn.value === 'off') {
        img.src = './assets/img/logo-dark-mode.png'
        btn.value = 'on'
        btn.innerHTML = 'Light Mode'
    } else {
        img.src = './assets/img/logo.png'
        btn.value = 'off'
        btn.innerHTML = 'Dark Mode'
    }
}