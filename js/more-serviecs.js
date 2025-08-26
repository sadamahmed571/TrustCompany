 document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.blog-read-more2');
        buttons.forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                const title = this.getAttribute('data-title');
                const message = encodeURIComponent(`أخبرني أكثر عن خدمة  ${title}`);
                const whatsappUrl = `https://wa.me/+967777967272?text=${message}`;
                window.open(whatsappUrl, '_blank');
            });
        });
    });