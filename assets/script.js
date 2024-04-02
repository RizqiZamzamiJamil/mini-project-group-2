$(document).ready(function() {
    window.openSidebar = function() {
        $('.sidebar').css('width', '250px');
    }

    window.closeSidebar = function() {
        $('.sidebar').css('width', '0');
    }
});