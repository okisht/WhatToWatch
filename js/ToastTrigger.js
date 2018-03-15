function callToast() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      toastr["info"]("You can close Plot section to avoid any kind of spoiler.", "Tip!")
    }


var reminder = localStorage.getItem('remindCouner');
if (reminder === null) {
    reminder = 0;
}
reminder++;

localStorage.setItem("remindCouner", reminder);
console.log(reminder);


if ( (reminder % 3) == 0) {
    callToast();
}