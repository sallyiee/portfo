
$(document).ready(function(){
    
    //Maginific initializer
     $('.iframe-link').magnificPopup({
        type:'iframe'
     });

     $('.image-link').magnificPopup({
        type:'image'
     });

    //FORM
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');
    $(form).submit(function(event) {
            // Stop the browser from submitting the form.
            event.preventDefault();

            // TODO
            // Serialize the form data.
            var formData = $(form).serialize();
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            }).done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#email').val('');
                $('#message').val('');
            }).fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                    $('#ajax-contact').hide();
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent. Please try again');
                }
            });
        });
    //END OF FORM

    // PROJECTS
    var posts = $('.post');

    // Click function
    $( ".project-nav li span" ).click(function(e) { 
        // Get data of category
        var customType = $( this ).data('filter'); // category

        if (customType === "all"){
            posts.show();
        } else{
        posts.hide().filter(function () {
                return $(this).data('cat') === customType;
            }).show();
        }

        //Active and decativiting class on navigation
         var $parentClass = $(this).parent();
         if(!$parentClass.hasClass('active')){
            $parentClass.addClass('active');
         }
         $parentClass.siblings().removeClass("active");
         e.preventDefault();

    });
  //END OF PROJECT

  //NAVIGATION


  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
    $('.main-header').removeClass('large');

  } else{
      $('.main-header').addClass('large');
  }


  $(window).on('scroll', function() {       
    if($(window).scrollTop() > 1300) {
          $('#showcase').parents().find('#showcase-nav').addClass('active');
          $('#showcase').parents().find('#showcase-nav').siblings().removeClass('active');
      }else if ($(window).scrollTop() > 600) {
          $('#skill').parents().find('#skill-nav').addClass('active');
          $('#skill').parents().find('#skill-nav').siblings().removeClass('active');
      }
      else{
          $('#skill').parents().find('#about-me-nav').addClass('active');
          $('#skill').parents().find('#about-me-nav').siblings().removeClass('active');
      }

     var navHeight = $(window).height() - 420;
      if ($(window).scrollTop() > navHeight) {
           $('nav').addClass('fixed');
       }
      else if($(window).scrollTop() === 0) {
          // $('.main-header').removeClass('small').addClass('large');
          $('nav').removeClass('fixed');
      }
      else {
           $('.main-header').removeClass('large').addClass('small');
           $('nav').removeClass('fixed');
       }
    });

});

