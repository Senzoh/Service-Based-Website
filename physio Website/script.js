console.log('active');

// FAQ active card
document.addEventListener('DOMContentLoaded', function () {
    // Select all FAQ cards and expand icons
    const faqCards = document.querySelectorAll('.faq-container__card');
    const expandIcons = document.querySelectorAll('.faq-container__expand-icon');

    // Loop through each card and add a click event
    faqCards.forEach((card) => {
        card.addEventListener('click', function (e) {
            // If the click is not on the expand icon, toggle the card's active state
            if (!e.target.classList.contains('faq-container__expand-icon')) {
                this.classList.toggle('active');
            }
        });
    });

    // Loop through each expand icon and add a click event
    expandIcons.forEach((icon) => {
        icon.addEventListener('click', function (e) {
            // Prevent the click event from bubbling up to the card
            e.stopPropagation();

            // Get the FAQ card that this icon is part of
            let card = this.closest('.faq-container__card');
            
            // Toggle the active class on the clicked card
            card.classList.toggle('active');

            // Optionally close all other FAQ cards when one is expanded
            document.querySelectorAll('.faq-container__card').forEach((otherCard) => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                }
            });
        });
    });
});





