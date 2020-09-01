(function(){
    'use strict'
    //dpr ->scale=1/dpr
    var docEl = document.documentElement,
        viewportEl = document.querySelector('meta[name="viewport"]'),
        dpr = window.devicePixelRatio || 1,
        maxWidth = 1140,
        minWidth = 0;
    
    dpr = (dpr>=3) ? 3 : (dpr >= 2 ? 2 : 1);
    docEl.setAttribute('data-dpr', dpr);
    docEl.setAttribute('max-width', maxWidth);
    docEl.setAttribute('min-width', minWidth);
    
    var scale = 1 / dpr,
        content = 'width=device-width,minimum-scale=' + scale + ',maximum-scale=' + scale + ',initial-scale=' + scale + ',user-scalable=no';
    if(viewportEl){ 
        viewportEl.setAttribute('content', content);
    } else {
        viewportEl= document.createElement('meta');
        viewportEl.setAttribute('name','viewport');
        viewportEl.setAttribute('content',content);
        document.head.appendChild(viewportEl);
    }
    setRemUnit();
    window.addEventListener('resize',setRemUnit);
    function  setRemUnit(){
        var radio = 18.75;
        var viewWidth = docEl.getBoundingClientRect().width || window.innerWidth;
        if(maxWidth && (viewWidth / dpr > maxWidth)){
            viewWidth = maxWidth * dpr;
        } else if(minWidth && (viewWidth / dpr < minWidth)){
            viewWidth = minWidth * dpr;
        }
        docEl.style.fontSize = viewWidth / radio + 'px';
        // :root
        // docEl.style.setProperty('--rect-width', '  7px  ');
    }
}())