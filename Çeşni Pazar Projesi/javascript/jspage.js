                                        // JAVASCRIPT KODLARI


/*Site içi sağ click engelleme - Başlangıç*/
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
/*Site içi sağ click engelleme - Bitiş*/



/*Tost Uyarı Mesajı Scripti - Başlangıç*/
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}
/*Tost Uyarı Mesajı Scripti - Bitiş*/