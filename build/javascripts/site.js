(function() {

  $(document).ready(function() {
    var path;
    path = location.href.replace(/\/$/, "");
    return $(".bookmarklet").each(function() {
      var $this, name;
      $this = $(this);
      name = $this.attr("data-name");
      return $this.attr("href", "javascript:\n  (function(){\n    var scriptTag = document.getElementById('huge-bookmarklet-loader');\n    if (!scriptTag) {\n      scriptTag = document.createElement('script');\n      scriptTag.id = 'huge_bookmarklet_script';\n      scriptTag.setAttribute('data-serverUrl', '" + location.href + "');\n      var newDiv = document.createElement('div');\n      newDiv.setAttribute('id', 'huge-bookmarklet-loader');\n      newDiv.innerHTML = 'Loading...';\n      newDiv.style.position = 'fixed';\n      newDiv.style.top = '0px';\n      newDiv.style.left = '0px';\n      newDiv.style.padding = '15px';\n      newDiv.style.background = '#fafafa';\n      newDiv.style.fontFamily = '\"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif';\n      newDiv.style.borderRight = '3px solid #f0f0f0';\n      newDiv.style.borderBottom = '3px solid #f0f0f0';\n      newDiv.style.color = '#999';\n      newDiv.style.fontSize = '12px';\n      newDiv.style.fontWeight = 'bold';\n      newDiv.style.zIndex = '2147483647';\n      document.body.appendChild(newDiv);\n      document.body.appendChild(scriptTag).src='" + path + "/javascripts/" + name + ".js';\n    }\n  })();");
    });
  });

}).call(this);
