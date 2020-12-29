(function () {

  //globals
  var HTML__Edit, CSS__Edit, JS__Edit;

  var app = angular.module('Live__Edit', []);

  app.controller("Live__Edit__Controller", function ($scope) {

    $scope.updatePreview = function (object) {

      var preview = document.getElementById("preview");

      var html = HTML__Edit.getValue();
      var css = CSS__Edit.getValue();
      var js = JS__Edit.getValue();

      var content = [];
      content.push("<style>");
      content.push(css);
      content.push("</style>");
      content.push(html);
      content.push("<script src ='" + "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'>" + "</" + "script>");
      content.push("<script>")
      content.push(js);
      content.push("<" + "/script>");

      preview.contentWindow.document.open();
      preview.contentWindow.document.write(content.join(""));
      preview.contentWindow.document.close();
    };

  });

  JSEditor();
  HTMLEditor();
  CSSEditor();

  function HTMLEditor() {
    HTML__Edit = ace.edit("HTML__editor");
    HTML__Edit.setTheme("ace/theme/idle_fingers");
    HTML__Edit.getSession().setMode("ace/mode/html");
  }

  function CSSEditor() {
    CSS__Edit = ace.edit("CSS__editor");
    CSS__Edit.setTheme("ace/theme/idle_fingers");
    CSS__Edit.getSession().setMode("ace/mode/css");
  }

  function JSEditor() {
    JS__Edit = ace.edit("JS__editor");
    JS__Edit.setTheme("ace/theme/idle_fingers");
    JS__Edit.getSession().setMode("ace/mode/javascript");
  }

})();