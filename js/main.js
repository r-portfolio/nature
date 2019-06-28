$(document).ready(function() {
  $(function() {
    $("a.navigation__link").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") ||
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });
});

var links = document.querySelectorAll(".navigation__list li a");
var linksLength = links.length;

for (var i = 0; i < linksLength; i++) {
  links[i].addEventListener("click", function() {
    document.getElementById("navi-toggle").checked = false;
  });
}
