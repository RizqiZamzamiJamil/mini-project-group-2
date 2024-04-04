$(document).ready(function() {
    window.openSidebar = function () {
        $(".sidebar").addClass("active");
    }

    window.closeSidebar = function () {
        $(".sidebar").removeClass("active");
    }

    $('#KirimPesanan').click(function () {
        if ($('#name').val().trim() === '' || $('#message').val().trim() === '' || $('#whatsapp').val().trim() === '' || $('#jenis').val().trim() === '') {
            swal('', 'Mohon lengkapi semua form', 'warning');
            return false;
        }
    });

    $('#pesanForm').submit(function(event) {
        event.preventDefault();
        sendMessage();
    });

    function sendMessage() {
        const name = $("#name").val();
        const jenis = $("#jenis").val();
        const message = $("#message").val();
        const phoneNumber = $("#whatsapp").val();

        if (name.trim() === '' || message.trim() === '' || phoneNumber.trim() === '' || jenis.trim() === '') {
            swal('', 'Mohon lengkapi semua form', 'warning');
            return false;
        }

        const messageBody = `Assalamualaikum\n\nNama : ${name}\nJenis Pesanan: ${jenis}\n\n${message}`;
        const url = `https://api.whatsapp.com/send?phone=6281228900185&text=${encodeURIComponent(messageBody)}`;

        window.open(url, "_blank");
    }
});
