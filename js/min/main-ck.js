$(document).ready(function(){$(".iframe-link").magnificPopup({type:"iframe"}),$(".image-link").magnificPopup({type:"image"});var a=$("#ajax-contact"),e=$("#form-messages");$(a).submit(function(s){s.preventDefault();var i=$(a).serialize();$.ajax({type:"POST",url:$(a).attr("action"),data:i}).done(function(a){$(e).removeClass("error"),$(e).addClass("success"),$(e).text(a),$("#email").val(""),$("#message").val("")}).fail(function(a){$(e).removeClass("success"),$(e).addClass("error"),""!==a.responseText?($(e).text(a.responseText),$("#ajax-contact").hide()):$(e).text("Oops! An error occured and your message could not be sent. Please try again")})});var s=$(".post");$(".project-nav li span").click(function(a){var e=$(this).data("filter");"all"===e?s.show():s.hide().filter(function(){return $(this).data("cat")===e}).show();var i=$(this).parent();i.hasClass("active")||i.addClass("active"),i.siblings().removeClass("active"),a.preventDefault()}),$(".main-header").addClass("large"),navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&$(".main-header").removeClass("large"),$(window).on("scroll",function(){$(window).scrollTop()>1300?($("#showcase").parents().find("#showcase-nav").addClass("active"),$("#showcase").parents().find("#showcase-nav").siblings().removeClass("active")):$(window).scrollTop()>600?($("#skill").parents().find("#skill-nav").addClass("active"),$("#skill").parents().find("#skill-nav").siblings().removeClass("active")):($("#skill").parents().find("#about-me-nav").addClass("active"),$("#skill").parents().find("#about-me-nav").siblings().removeClass("active"));var a=$(window).height()-420;$(window).scrollTop()>a?$("nav").addClass("fixed"):0===$(window).scrollTop()?$(".main-header").removeClass("small").addClass("large"):($(".main-header").removeClass("large").addClass("small"),$("nav").removeClass("fixed"))})});