let btns = document.querySelector('#buttons');
btns = [...btns.children];
console.log(btns);

btns.forEach(e => e.addEventListener('click', () => {
    switch (e.id) {
        case 'color':
            alert('Orange')
            break;
        case 'place':
            alert('Connecticut')
            break;
        default:
            alert('Waking Up')
    }
}))