$(document).ready(function () {

    $.getJSON('../data/zeldaData.json', function (data) {
        var template = '{{#games}}<div class="container"><div class="col-md-12"><hr></div><h2>{{title}}</h2><div class="col-md-4"><img class="img-responsive img-rounded center-block" src="{{image}}" /></div><div class="col-md-8"><h3>Completion status {{#completed}}<i class="fa fa-check text-success"></i>{{/completed}}{{^completed}}<i class="fa fa-times text-danger"></i>{{/completed}}</h3>{{{writeup}}}</div></div>{{/games}}';
        var html = Mustache.to_html(template, data);
        $('#zeldaTemplate').html(html);
    });
});