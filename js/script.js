var myNav = document.getElementById("mynav");

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
        myNav.classList.add("nav-scrolled");
    } else {
        myNav.classList.remove("nav-scrolled");
    }
};

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

        // Close other open accordion items
        document.querySelectorAll('.accordion-header').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});
