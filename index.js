let about = document.querySelector('.about');
let contact = document.querySelector('.contact');
let work = document.querySelector('.work');

about.addEventListener('click', () =>{
    window.location.href = './about/about.html';
})

work.addEventListener('click', () =>{
    window.location.href = './work/work.html';
})

contact.addEventListener('click', () =>{
    window.location.href = './contact/contact.html';
})

about.addEventListener('mouseover', () => about.innerHTML = 'About')
about.addEventListener('mouseout', () => about.innerHTML = 'Hello.')

work.addEventListener('mouseover', () => work.innerHTML = 'Work')
work.addEventListener('mouseout', () => work.innerHTML = 'I am')

contact.addEventListener('mouseover', () => contact.innerHTML = 'Contact')
contact.addEventListener('mouseout', () => contact.innerHTML = 'Donish')

