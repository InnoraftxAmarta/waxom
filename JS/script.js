
  $(document).ready(function(){
   
    $('.b-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
    $('.inner-div').on('click', function() {
      $('.b-slider').slick('slickRemove', $('.slick-slide').index(this) - 1)
      // $('.team-slider').slick('slickRemove', $('.slick-slide').index(this) - 1),
      // $('.design-slider').slick('slickRemove', $('.slick-slide').index(this) - 1)
    });
$('.div4-slick-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});
  
$(document).ready(function() { 
  $(function() {
    var selectedClass = "";
    $(".filter").click(function(){
      selectedClass = $(this).attr("data-rel");
      $("#gallery").fadeTo(100, 0.1);
      $("#gallery .animation").not("."+selectedClass).fadeOut().removeClass('animation');
      setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('animation');
        $("#gallery").fadeTo(300, 1);
      }, 300);
    });
  });
  });
  $(document).ready(function(){
    new VenoBox({
      selector: '.my-video-links',
      numeration: true,
      autoplay:true,
      infinigall: true,
      share: true,
      spinner: 'rotating-plane'
  });
  })();