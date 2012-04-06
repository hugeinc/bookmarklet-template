$(document).ready ->
  path = location.href.replace(/\/$/, "")
  $(".bookmarklet[data-name]").each ->
    $this = $ this
    name = $this.attr "data-name"
    $this.attr("href", """
                        javascript:
                          (function(){
                            var scriptTag = document.getElementById('huge-bookmarklet-loader');
                            if (!scriptTag) {
                              scriptTag = document.createElement('script');
                              scriptTag.id = 'huge_bookmarklet_script';
                              scriptTag.setAttribute('data-serverUrl', '#{location.href}');
                              var newDiv = document.createElement('div');
                              newDiv.setAttribute('id', 'huge-bookmarklet-loader');
                              newDiv.innerHTML = 'Loading...';
                              newDiv.style.position = 'fixed';
                              newDiv.style.top = '0px';
                              newDiv.style.left = '0px';
                              newDiv.style.padding = '15px';
                              newDiv.style.background = '#fafafa';
                              newDiv.style.fontFamily = '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif';
                              newDiv.style.borderRight = '3px solid #f0f0f0';
                              newDiv.style.borderBottom = '3px solid #f0f0f0';
                              newDiv.style.color = '#999';
                              newDiv.style.fontSize = '12px';
                              newDiv.style.fontWeight = 'bold';
                              newDiv.style.zIndex = '2147483647';
                              document.body.appendChild(newDiv);
                              document.body.appendChild(scriptTag).src='#{path}/javascripts/#{name}.js';
                            }
                          })();
                        """)
