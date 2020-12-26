function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("default").click();

function editor() {
    if ($('#HTML__editor').length) {
        var targetHtml = $('#HTML__editor').data('target');
        var editorHtml = ace.edit("HTML__editor");
        editorHtml.setValue($(targetHtml).val());
        editorHtml.setTheme("ace/theme/idle_fingers");
        editorHtml.getSession().setMode("ace/mode/html");
        editorHtml.getSession().setUseWrapMode(true);
        editorHtml.on('change', function () {
            $(targetHtml).val(editorHtml.getValue());
            $(targetHtml).trigger('change');

        });
    }
    if ($('#CSS__editor').length) {
        var targetCss = $('#CSS__editor').data('target');
        var editorCss = ace.edit("CSS__editor");
        editorCss.setValue($(targetCss).val());
        editorCss.setTheme("ace/theme/idle_fingers");
        editorCss.getSession().setMode("ace/mode/css");
        editorCss.getSession().setUseWrapMode(true);
        editorCss.on('change', function () {
            $(targetCss).val(editorCss.getValue());
            $(targetCss).trigger('change');
        });
    }
    if ($('#JS__editor').length) {
        var targetJs = $('#JS__editor').data('target');
        var editorJs = ace.edit("JS__editor");
        editorJs.setValue($(targetJs).val());
        editorJs.setTheme("ace/theme/idle_fingers");
        editorJs.getSession().setMode("ace/mode/javascript");
        editorJs.getSession().setUseWrapMode(true);
        editorJs.on('change', function () {
            $(targetJs).val(editorJs.getValue());
            $(targetJs).trigger('change');
        });
    }
}

function livePreview() {
    if ($('.preview').length) {

        $('#HTML,#CSS,#JS').on('change', function () {
            var el = $(this);
            var target = el.data('type');
            var val = el.val();
            $('.preview').find(target).html(val);
        });

    }
}

editor();
livePreview();

$(window).on('load', function () {
    if ($('.preview').length) {
        $('#HTML,#CSS,#JS').trigger('change');
    }
});