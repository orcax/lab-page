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

  $('body')
    .on('activate.bs.scrollspy', function () {
      var id = $('.bs-sidenav li.active a').attr('href').slice(1);
      $('#lab-navbar li').removeClass('active');
      $('#lab-navbar li[name=' + id + ']').addClass('active');
    })
  $body.scrollspy({
      target: '.bs-sidebar',
      offset: navHeight
    })

  $('.bs-docs-container [href=#]').click(function (e) {
    e.preventDefault()
  })

  // back to top
  setTimeout(function () {
    var $sideBar = $('.bs-sidebar')

    $sideBar.affix({
      offset: {
        top: function () {
          var offsetTop      = $sideBar.offset().top
          var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10)
          var navOuterHeight = $('#lab-header-nav').height()

          return (this.top = offsetTop - navOuterHeight - sideBarMargin)
        }
      , bottom: function () {
          return (this.bottom = $('.bs-footer').outerHeight(true))
        }
      }
    })
  }, 100)

  setTimeout(function () {
    $('.bs-top').affix()
  }, 100)

});
