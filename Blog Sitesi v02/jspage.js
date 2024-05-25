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