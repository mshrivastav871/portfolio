// 🎯 Toggle "Read More" in Project Section
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const details = this.parentElement.previousElementSibling;
        details.classList.toggle('show');
        this.textContent = details.classList.contains('show') ? '- Read Less' : '+ Read More';
    });
});
