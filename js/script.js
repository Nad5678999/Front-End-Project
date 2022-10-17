let mainMenu = document.querySelector("#mainMenu")
let mainAccordion = document.querySelectorAll("#mainAccordion > div")
for (let i = 0; i < mainAccordion.length+1 ; i++){
    $("#main li").on("click", function(e) {
        $("li").removeClass("active");
        $(this).addClass("active");        
            let accordion = document.querySelector(`#accordion${e.target.id}`)
            mainAccordion[i].style.display = "none"
            accordion.style.display = "block"
        });
}

$(document).ready(function(){
  
    function smoothScroll(target) {
          const headerHeight = $("#navbarCollapse").outerHeight() + 10;
          $("html,body").animate(
              {"scrollTop":target.offset().top - headerHeight},
              300
          );
      }
    
   $("#navbarCollapse ul li a").on("click", function(event){
      if (this.getAttribute("href").charAt(0) == "#") {
              event.preventDefault();
              smoothScroll($(this.hash));
          } else {
              //just let link work
          }
    });
    
    $(window).scroll(function(){
      let scrollPos = $(this).scrollTop();
      let scrollDistance = scrollPos + 130;
      
      $("#navbarCollapse ul li a[href^='#']").each(function () {
              let currLink = $(this);
              let refElement = $(currLink.attr("href"));
              if (refElement.position().top <= scrollDistance && refElement.position().top + refElement.height() > scrollDistance) {
                  $("#navbarCollapse ul li a").removeClass("active");
                  currLink.addClass("active");
              }
              else {
                  currLink.removeClass("active");
              }
          });
    });
    
  });

  var mybutton = document.getElementById("myBtn");
      
      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
      
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }