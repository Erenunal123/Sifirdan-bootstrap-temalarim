/*-----------------------------------------------------------------------------------------*/
/*Lazy loading İşlemleri - Başlangıç*/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.lazySection');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
/*Lazy loading İşlemleri - Bitiş*/
/*-----------------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------------*/
/*Responsive Menü Çözünürlük İşlemleri - Başlangıç*/
document.addEventListener('DOMContentLoaded', function () {
    var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'));
    var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
        return new bootstrap.Offcanvas(offcanvasEl);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 992) {
            offcanvasList.forEach(function (offcanvas) {
                offcanvas.hide();
            });
        }
    });
});
/*Responsive Menü Çözünürlük İşlemleri - Bitiş*/
/*-----------------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------------*/
/*Yukarı Çık Butonu - Başlangıç*/
// Scroll to Top Button JavaScript
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

document.getElementById("scrollToTopBtn").onclick = function () {
    scrollToTop();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Animasyonlu yukarı çıkma
}

/*Yukarı Çık Butonu - Bitiş*/
/*-----------------------------------------------------------------------------------------*/