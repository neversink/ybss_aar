!function(t){"use strict";t.fn.toTop=function(o){var e=this,n=t(".pull-to-refresh-content"),s=t(".pull-to-refresh-content");0===n.length&&(n=t(".content"),s=t(".content"));var i=t.extend({autohide:!0,offset:300,speed:500,position:!0,right:0,bottom:80},o);e.css({cursor:"pointer"}),i.autohide&&e.css("display","none"),i.position&&e.css({position:"absolute",right:i.right,bottom:i.bottom}),e.click(function(){s.animate({scrollTop:0},i.speed)}),n.scroll(function(){var t=n.scrollTop();i.autohide&&(t>i.offset?e.fadeIn(i.speed):e.fadeOut(i.speed))})}}(jQuery);