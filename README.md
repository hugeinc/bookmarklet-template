This is a template to develop bookmarklet.

This bookmarklet itself include the code to:
- display and style a loader on the top left of the page
- load bookmarklet.js

What is bookmarklet.js then doing?

bookmarklet.js includes LAB.js which takes care of loading jQuery and once loaded it builds a lightbox and setting some text inside.

This is a middleman project using coffeescript and scss, but if you'd rather go old school, you'll find all the css and js files generated in the build directory