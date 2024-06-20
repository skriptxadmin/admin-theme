
(function(){
    const toggleSidenav = document.querySelector("button.toggle-sidenav");

    toggleSidenav.addEventListener('click', function(){
        const body = document.querySelector('body');
        const className = 'sidenav-is-collapsed';
        if(body.classList.contains(className)){
            body.classList.remove(className)
        }else{
            body.classList.add(className)
        }
    })
})();