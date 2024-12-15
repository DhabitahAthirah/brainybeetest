//ensure navigation links works
const navLinkEls = document.querySelectorAll('.nav-link,.dropdown-item, .dropdown-submenu1, .dropdown-submenu2, .nav-item.dropdown ,.nav-item.dropdown ,nav-link.dropdown-toggle, .btn btn-outline-danger','navitems');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl =>{
    const navLinkPathname = new url(navLinkEl.href).pathname;

    if(windowPathname ===navLinkPathname){
    }
        {   
            navLinkEl.classList.add('active');
        }
}
);

// Ensure Bootstrap's dropdown functionality is correctly initialized
document.addEventListener('DOMContentLoaded', function () {
    var dropdownButton = document.getElementById('dropdownMenuButton');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownButton.addEventListener('click', function () {
        var isExpanded = dropdownMenu.classList.contains('show');
        dropdownMenu.classList.toggle('show', !isExpanded);
    });
});

//ensure modal form works
var myModal = document.getElementById('exampleModal');
    myModal.addEventListener('shown.bs.modal', function () {
        if (myInput) {
                myInput.focus();
            }
        });
