var v = $("#booking-form").validate({
      rules: {
        bf_totalGuests: {
          required: true
        },
        bf_date: {
          required: true
        },
        bf_time: {
          required: true
        },
        bf_hours: {
          required: true
        },
        bf_fullname: {
          required: true
        },
        bf_email: {
          required: true,
          email: true
        }
 
      },
      errorElement: "span",
      errorClass: "error",
      errorPlacement: function(error, element) {
            error.insertBefore(element); 
      }
});

$(".next-btn1").click(function() {
    if (v.form()) {
      $(".tab-pane").hide();
      $("#step2").fadeIn(1000);
      $('.progressbar-dots').removeClass('active');
      $('.progressbar-dots:nth-child(2)').addClass('active');
    }
 });
$(".next-btn2").click(function() {
    if (v.form()) {
      $(".tab-pane").hide();
      $("#step3").fadeIn(1000);
      $('.progressbar-dots').removeClass('active');
      $('.progressbar-dots:nth-child(3)').addClass('active');
    }
});

$(".submit-btn").click(function() {
  if (v.form()) {
    $("#loader").show();
     setTimeout(function(){
       $("#booking-form").html("<h2>Reserva realizada con éxito</h2>");
     }, 1000);
    return false;
  }
});