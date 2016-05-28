var App = {
  viewport : {
    w : $(window).width(),
    h : $(window).height()
  },

  init : function () {
    App.bind();
  }

  ,bind : function () {
    $(window).on('load', App.drawInfographic);
  }

  ,drawInfographic : function () {
    var infographic_container = $('.infographic-container');
    var animated = infographic_container.hasClass('animated');

    if (!infographic_container || infographic_container.length < 1) return;

    var tl = new TimelineMax();

    tl.addLabel('start');

    infographic_container.removeClass('hidden').addClass('animated');

    // Infographic Animation
    var element_size = (App.viewport.w > 1280 ) ? 400 : 300;

    tl.fromTo( $('#circle'), 1, { width: 0, x: element_size/2, opacity: 0 }, { width: element_size, x: 0, opacity: 1 }, 'start+=0.2' )
      .fromTo( $('#arc-1'), 1, { width: 0, x: element_size/2, rotation: 0, opacity: 0.5 }, { width: element_size, x: 0, rotation: -360, opacity: 1 }, 'start+=0.8' )
      .fromTo( $('#arc-2'), 1, { width: 0, x: element_size/2, rotation: 0 }, { width: element_size, x: 0, rotation: -360 }, 'start+=1.0' )
      .fromTo( $('#arc-3'), 1, { width: 0, x: element_size/2, rotation: 0, opacity: 0 }, { width: element_size, x: 0, rotation: -360, opacity: 1 }, 'start+=1.2' )

    if ( App.viewport.w > 900 ) {
      tl.to( $('.point-4 .line-cover'), 1, { x: '0' }, 'start+=1.4' )
        .to( $('.point-4 .title-cover'), 1, { x: '-100%' }, 'start+=1.8' )
        .to( $('.point-3 .line-cover'), 1, { x: '0' }, 'start+=1.8' )
        .to( $('.point-3 .title-cover'), 1, { x: '100%' }, 'start+=2.0' )
        .to( $('.point-2 .line-cover'), 1, { x: '0' }, 'start+=2.0' )
        .to( $('.point-2 .title-cover'), 1, { x: '-100%' }, 'start+=2.2' )
        .to( $('.point-1 .line-cover'), 1, { x: '0' }, 'start+=2.2' )
        .to( $('.point-1 .title-cover'), 1, { x: '100%' }, 'start+=2.4' )
    }

  }

}
