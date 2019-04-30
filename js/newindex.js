var checkboxDataMarker = "data-input-checkbox-n";
            function TbpDataTableInputs(b, a) {
           (function() {
           $(":checkbox", $(b).find("tbody")).each(function(a, b) {
           $(b).attr(checkboxDataMarker, a);
           });
           })();