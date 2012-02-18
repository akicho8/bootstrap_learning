(function() {
  $(function() {
    return $(document).keypress(function(e) {
      if (e.charCode === 73) {
        location.href = $(".__hs_paginate a.index:first").prop("href");
      }
      if (e.charCode === 78) {
        location.href = $(".__hs_paginate a.next:first").prop("href");
      }
      if (e.charCode === 80) {
        location.href = $(".__hs_paginate a.prev:first").prop("href");
      }
      return true;
    });
  });
}).call(this);
