var radioDataMarker = "data-input-radio-n";
function TbpDataTableInputs(b, a) {
  (function() {
    $(":radio", $(b).find("tbody")).each(function(a, b) {
      $(b).attr(radioDataMarker, a);
    });
  })();