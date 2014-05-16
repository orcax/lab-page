$(function(){

  // IE10 viewport hack for Surface/desktop Windows 8 bug
  // See Getting Started docs for more information
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
        document.createTextNode("@-ms-viewport{width:auto!important}"));
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
  }

  var $window = $(window)
  var $body   = $(document.body)

  var navHeight = $('.navbar').outerHeight(true) + 10

  $('body').on('activate.bs.scrollspy', function () {
    var id = $('.lab-sidenav li.active a').attr('href').slice(1);
    $('#lab-navbar li').removeClass('active');
    $('#lab-navbar li[name=' + id + ']').addClass('active');
  }).scrollspy({
    target: '.lab-sidebar',
    offset: navHeight
  });

  $('.lab-docs-container [href=#]').click(function (e) {
    e.preventDefault()
  });

  // back to top
  setTimeout(function () {
    var $sideBar = $('.lab-sidebar');

    $sideBar.affix({
      offset: {
        top: function () {
          var offsetTop      = $sideBar.offset().top
          var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
          var navOuterHeight = $('#lab-header-nav').height()

          return (this.top = offsetTop - navOuterHeight - sideBarMargin)
        }
      , bottom: function () {
          return (this.bottom = $('#lab-footer').outerHeight(true))
        }
      }
    })
  }, 100)

  setTimeout(function () {
    $('.affix-top').affix()
  }, 120)

  $('#typed').typed({
    strings: [
      '<span class="txt-blue">#!/usr/bin/python</span><br/>' + 
      '<span class="txt-white">lab =&nbsp</span>' +
      '<span class="txt-green">"Distributed Computing and Service Lab"</span><br/>' +
      '<span class="txt-orange">print&nbsp</span>' +
      '<span class="txt-green">"Welcome to %s !"&nbsp</span>' + 
      '<span class="txt-white">% (lab)</span><br/>' +
      '<span class="txt-white">fields = (</span>' +
      '<span class="txt-green">"Distributed Computing"</span>' + 
      '<span class="txt-white">,&nbsp</span>' +
      '<span class="txt-green">"Service Computing"</span>' + 
      '<span class="txt-white">)</span><br/>' +
      '<span class="txt-pink">for&nbsp</span>' +
      '<span class="txt-white">field&nbsp</span>' +
      '<span class="txt-pink">in&nbsp</span>' +
      '<span class="txt-white">fields:<br/>&nbsp&nbspresearch(field, level=</span>' +
      '<span class="txt-green">"state-of-the-art"</span>' + 
      '<span class="txt-white">)</span>' +
      ''
    ],
    typeSpeed: -30,
    backDelay: 500,
    loop: false,
    loopCount: false,
    callback: function() {
      $('#welcome-body').animate({height: '135px'}, {
        complete: function() {
          setTimeout(function() {
            $('#welcome-keyword').show();
          }, 500);
        }
      });
    }
  });

  $('.bottom-space').css({
    'margin-bottom': (screen.height - 710) + 'px'
  });

  function setCookie(key, value) {
    document.cookie = key + "=" + escape(value);
  }

  function getCookie(key) {
    if (document.cookie.length > 0) {
      c_start=document.cookie.indexOf(key + "=")
      if (c_start != -1) { 
        c_start = c_start + c_name.length + 1; 
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) 
          c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start,c_end));
      } 
    }
    return "";
  }
  
  var visitCount = getCookie('visit_count');
  if (visitCount == '') {
    visitCount = 0;
  }
  ++visitCount;
  setCookie('visit_count', visitCount);

});
