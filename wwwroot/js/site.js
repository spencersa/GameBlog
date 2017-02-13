$(document).ready(function () {

    $.get("../shared/navigation.html", function (data) {
        $("#navigation-placeholder").replaceWith(data);
    });

    $.get("../shared/footer.html", function (data) {
        $("#footer-placeholder").replaceWith(data);
    });

});