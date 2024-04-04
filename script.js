var button = document.getElementById('read_button');

button.addEventListener('click', function(){
    var projects = document.querySelector('.projects');
    projects.classList.toggle('active');

    if(projects.classList.contains('active')){
        return button.textContent = 'Read Less';
    }

    button.textContent = 'Read More';
});