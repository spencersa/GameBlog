$(document).ready(function () {
    $.getJSON('../data/zeldaData.json', function (data) {
        $.get("../shared/zeldaBlogTemplate.html", function (template) {
            var html = Mustache.to_html(template, data);
            $('#zeldaTemplate').html(html);
        });
    });
});