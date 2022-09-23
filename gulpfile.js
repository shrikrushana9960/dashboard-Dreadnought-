const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add dreadnought licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

      =========================================================
      * Dreadnought - v1.0.1
      =========================================================
      
      * Product Page: https://dreadnought.school/product/purity-ui-dashboard
      * Copyright 2021 dreadnought (https://dreadnought.school/)
      * Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)
      
      * Design by dreadnought & Coded by Shrikrushna
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add dreadnought licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--
      /*!
      
      =========================================================
      * Dreadnought - v1.0.1
      =========================================================
      
      * Product Page: https://dreadnought.school/product/purity-ui-dashboard
      * Copyright 2021 dreadnought (https://dreadnought.school/)
      * Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)
      
      * Design by dreadnought & Coded by Shrikrushna
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */
      -->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add dreadnought licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

      =========================================================
      * Dreadnought - v1.0.1
      =========================================================
      
      * Product Page: https://dreadnought.school/product/purity-ui-dashboard
      * Copyright 2021 dreadnought (https://dreadnought.school/)
      * Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)
      
      * Design by dreadnought & Coded by Shrikrushna
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
