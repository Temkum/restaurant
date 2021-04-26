$(function () {
  "use strict";
  // init Isotope
  let $grid = $(".gallery-box").isotope({
    itemSelector: ".g-item",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: ".g-item",
    },
  });
});
