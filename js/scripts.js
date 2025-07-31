alert('FAQ carregando!');

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
        document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('active'));
        if (!isVisible) {
            answer.style.display = 'block';
            button.classList.add('active');
        }
    });
});
let backToTop = document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};
backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
