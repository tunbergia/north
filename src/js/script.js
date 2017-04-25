    $(document).ready(function(){

      // бургер

 var toggler=document.getElementById('toggler');
 toggler.addEventListener('click', mainNavVisibleToggle);
 function mainNavVisibleToggle(e) {
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('nav--visible');
};

$('.tabs li').on('click',function(){
$(this).addClass('active').siblings().removeClass('active');
var activeID=$(this).attr('rel');
var activePanel=$('#'+activeID);
var othersPanel=activePanel.siblings();
othersPanel.hide();
activePanel.addClass('d_active').fadeIn().siblings().fadeOut();
});

// аккордион

$('dd').hide();
$('.accordion dt a').on('click',function(event){
  
  event.preventDefault();
  
  var DD=$(this).parent().next();
 DD.fadeIn();
  $('dd').not(DD).hide();
  
});

// модалки

function openModal(event) {
    event.preventDefault();

    $('.modal').show();

    $('.modal__close').one('click', closeModal);
    $('.modal').on('click', closeModalfromModal);
  }
  function closeModal() {
      $(this).closest('.modal').hide();
    }
  function closeModalfromModal(event) {
      if($(event.target).hasClass('modal')) {
        $(this).closest('.modal').hide();
      }
    }
  $('#link').on('click', openModal);

function openModal1(event) {
    event.preventDefault();

    $('.modal1').show();

    $('.modal1__close').one('click', closeModal1);
    $('.modal1').on('click', closeModal1fromModal);
  }
  function closeModal1() {
      $(this).closest('.modal1').hide();
    }
  function closeModal1fromModal(event) {
      if($(event.target).hasClass('modal1')) {
        $(this).closest('.modal1').hide();
      }
    }
  $('#link1').on('click', openModal1);




   function openModal2(event) {
    event.preventDefault();

    $('.modal2').show();

    $('.modal2__close').one('click', closeModal2);
    $('.modal2').on('click', closeModal2fromModal);
  }
  function closeModal2() {
      $(this).closest('.modal2').hide();
    }
  function closeModal2fromModal(event) {
      if($(event.target).hasClass('modal2')) {
        $(this).closest('.modal2').hide();
      }
    }
  $('#link2').on('click', openModal2);


   function openModal3(event) {
    event.preventDefault();

    $('.modal3').show();

    $('.modal3__close').one('click', closeModal3);
    $('.modal3').on('click', closeModal3fromModal);
  }
  function closeModal3() {
      $(this).closest('.modal3').hide();
    }
  function closeModal3fromModal(event) {
      if($(event.target).hasClass('modal3')) {
        $(this).closest('.modal3').hide();
      }
    }
  $('#link3').on('click', openModal3);


   function openModal4(event) {
    event.preventDefault();

    $('.modal4').show();

    $('.modal4__close').one('click', closeModal4);
    $('.modal4').on('click', closeModal4fromModal);
  }
  function closeModal4() {
      $(this).closest('.modal4').hide();
    }
  function closeModal4fromModal(event) {
      if($(event.target).hasClass('modal4')) {
        $(this).closest('.modal4').hide();
      }
    }
  $('#link4').on('click', openModal4);


   function openModal5(event) {
    event.preventDefault();

    $('.modal5').show();

    $('.modal5__close').one('click', closeModal5);
    $('.modal5').on('click', closeModal5fromModal);
  }
  function closeModal5() {
      $(this).closest('.modal5').hide();
    }
  function closeModal5fromModal(event) {
      if($(event.target).hasClass('modal5')) {
        $(this).closest('.modal5').hide();
      }
    }
  $('#link5').on('click', openModal5);

// скролл

  $("#nav").on("click","a", function (event) {
event.preventDefault();
var id = $(this).attr('href'),
top = $(id).offset().top;
$('body,html').animate({scrollTop: top}, 1500);
});

// табы
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


});
