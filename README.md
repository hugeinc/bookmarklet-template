This is a template to develop bookmarklet.
==========================================

This bookmarklet itself include the code to:
+   display and style a loader on the top left of the page
+   load bookmarklet.js

What is bookmarklet.js then doing?

bookmarklet.js includes LAB.js which takes care of loading jQuery and once loaded it builds a lightbox and setting some text inside.

This is a middleman project using coffeescript and scss, but if you'd rather go old school, you'll find all the css and js files generated in the build directory. Your files have to be stored on a server though, because they will be retrieved from the bookmarklet.

Part from the basic bookmarklet, I have added 3 other examples:
+   **copy**: Select the word/phrase you click on. It also give you the opportunity to google it up.
+   **links**: Display a list of all the links on the current page
+   **burn**: A nice little effect. Try it on an evil web site only.