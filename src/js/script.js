    $(document).ready(function(){

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

$('.accordion dt a').on('click',function(event){
  
  event.preventDefault();
  
  var DD=$(this).parent().next();
 DD.fadeIn();
  $('dd').not(DD).hide();
  
});

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

});
