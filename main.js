$(document).ready(function() {
$('#container').mousewheel(function(e, delta) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {

      this.scrollLeft -= (delta);

      e.preventDefault();
    }

});
});
