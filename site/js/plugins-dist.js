"use strict";var Wedding=Wedding||{};Wedding.UIComponents=function(e){var t=$.extend({tabletBreakpoint:1199,mobileBreakpoint:767,tablet:!1,mobile:!1},e||{});$(window).width()<=t.tabletBreakpoint&&$(window).width()>t.mobileBreakpoint&&(t.tablet=!0),$(window).width()<=t.mobileBreakpoint&&(t.mobile=!0),$.fn.textLimiter=function(e){var t=$.extend({selector:this,textLength:100},e||{}),o=$(t.selector).html();return(o=o.trim()).length>t.textLength&&$(t.selector).html(o.substring(0,e.textLength)+"..."),this},$.fn.smartResize=function(e){return e?this.bind("resize",p(e)):this.trigger(smartResize)},$.fn.smartScroll=function(e){return e?this.bind("scroll touchmove",p(e)):this.trigger(smartScroll)},this.init=function(){c(),n(),s(),i(),l(),a(),o()},this.reInitFunction=function(){$(".masonry").masonry("destroy"),$(".masonry").masonry({itemSelector:".card-wrap",columWidth:".card-sizer",percentPosition:!0,gutter:".gutter-sizer",transitionDuration:"0.8s",horizontalOrder:!0}).masonry("layout"),d()};var o=function(){if($("audio").length){if($(window).width()<=767)return alert($(window).width()),$("audio,.sound-toggle").remove(),!1;console.log("lel");var e=!0;$(".sound-toggle").on("click",function(){e?($("audio")[0].pause(),e=!1,$(".sound-toggle").addClass("disable")):($("audio")[0].play(),e=!0,$(".sound-toggle").removeClass("disable"))})}},l=function(){$(window).width();var n=$(window).height();$("section").hasClass("parallax")&&$(".parallax").each(function(e,t){var o,l;o=t,l=$(o).attr("data-image"),$(o).attr("style","background-image:url("+l+");")}),$(window).on("scroll touchmove",function(){$("section").hasClass("parallax")&&$(".parallax").each(function(e,t){var o,l,i,s;l=o=t,i=$(window).scrollTop(),(s=$(o).position().top)-n<i&&$(l).css({"background-position":"center "+((i-s)/2-n/5)+"px"})})})},i=function(){$("header").length&&40<$(document).scrollTop()&&$("header").addClass("minimize")},s=function(){var e='font-size: 25px;font-family: "Raleway", sans-serif;color: #ababab;text-transform: uppercase';$(".counter-init").ClassyCountdown({theme:"flat-colors",end:Date.parse("22 April, 2018"),now:$.now(),labels:!0,labelsOptions:{lang:{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},style:'font-size: 20px;font-family: "Playfair Display", sans-serif;color: #ababab'},style:{element:"",labels:!1,days:{gauge:{thickness:.2,bgColor:"rgba( 244,244,244,1)",fgColor:"#F1A9A0"},textCSS:e},hours:{gauge:{thickness:.2,bgColor:"rgba( 244,244,244,1)",fgColor:"#F1A9A0"},textCSS:e},minutes:{gauge:{thickness:.2,bgColor:"rgba( 244,244,244,1)",fgColor:"#F1A9A0"},textCSS:e},seconds:{gauge:{thickness:.2,bgColor:"rgba( 244,244,244,1)",fgColor:"#F1A9A0"},textCSS:e}},onEndCallback:function(){}})},n=function(){$(".home").length&&(t.tablet&&t.mobile?$(".home .slider-component").hasClass("slick-initialized")&&$(".home .slider-component").slick("unslick"):(console.log("test"),!$(".home .slider-component").hasClass("slick-initialized")&&$(".home .slider-component").slick({dots:!1,infinite:!0,lazyLoad:"ondemand",arrows:!1,speed:1e3,fade:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3})))},a=function(){$(window).smartScroll(function(){r()})},r=function(){t.tablet||$("header, .to-top, main").toggleClass("minimize",40<$(document).scrollTop()),t.tablet||t.mobile?$(".to-top").hide():$(".to-top").removeAttr("style")},c=function(){0!==$(".to-top").length&&$(".to-top").smoothScroll({offset:-300,speed:500,easing:"swing"}),0!==$(".nav-menu").length&&$(".nav-menu li a").smoothScroll({offset:-66,speed:300,easing:"swing"})},d=function(){0!==$("select").length&&$("select").niceSelect()},p=function(o,l,i){var s=void 0;return function(){var e=this,t=arguments;s?clearTimeout(s):i&&o.apply(e,t),s=setTimeout(function(){i||o.apply(e,t),s=null},l||150)}}},Wedding.MapInteraction=function(e){var t=$.extend({MapKey:"AIzaSyDqG408wlPZ832I5zRMmBZoJKTMqIJZ0fQ"},e||{});this.init=function(){o()};var o=function(){function s(e){this.setValues(e)}s.prototype=new google.maps.OverlayView,s.prototype.draw=function(){var t=this,e=this.div;console.log(t);var o=this.title.split(" ").join("");e||(e=this.div=$('<div class="'+o+'"><div class="shadow"></div><div class="pulse"></div><div class="pin-wrap"><div class="pin"></div><div class="pin-label">'+this.title+"</div></div></div>")[0],this.pinLabel=this.div.getElementsByClassName("pin-label"),this.pinWrap=this.div.getElementsByClassName("pin-wrap"),this.pin=this.div.getElementsByClassName("pin"),this.pinShadow=this.div.getElementsByClassName("shadow"),e.style.position="absolute",e.style.cursor="pointer",this.getPanes().overlayImage.appendChild(e),this.pinLabel.innerHTML=this.title,console.log(this.pinLabel),google.maps.event.addDomListener(e,"click",function(e){google.maps.event.trigger(t,"click",e)}));var l=this.getProjection().fromLatLngToDivPixel(this.position);l&&(e.style.left=l.x+"px",e.style.top=l.y+"px")};var n=new google.maps.Map(document.getElementById("map"),{center:{lat:-6.9098853,lng:106.8948457},zoom:15,clickableIcons:!1,mapTypeControl:!1,styles:[{elementType:"geometry",stylers:[{color:"#e7eaf5"}]},{elementType:"labels.icon",stylers:[{visibility:"on"},{saturation:"-100"},{lightness:"41"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dbdee9"},{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#d4d7e2"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dbdee9 "}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c2c5d0"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]});new google.maps.Geocoder;$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=gedung+disen+cisaat+sukabumi&key="+t.MapKey,function(e){$.each(e,function(e,t,o,l){var i=t[0];console.log(i),console.log(o),console.log(l);new s({position:new google.maps.LatLng(t[0].geometry.location.lat,t[0].geometry.location.lng),map:n,title:"gedung disen"})})})}};