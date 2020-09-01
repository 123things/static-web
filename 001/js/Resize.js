// web resize
(function(document, window){
   console.info('reSize.js');
    var docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ?
                    'orientationchange' : 'resize',
                    
        recalc = function(){
            var clientWidth = docEl.clientWidth;
            console.info(clientWidth);
            if(!clientWidth) return ;
            // if(clientWidth >= 1200){
            //     docEl.style.fontSize = '100px';
            // } else{
            //     docEl.style.fontSize = 100 * (clientWidth / 1200) + 'px';
            // }
            docEl.style.fontSize = 100 * (clientWidth / 1200) + 'px';
        };
        if(!document.addEventListener) return;
        window.addEventListener(resizeEvt, recalc, false);
        document.addEventListener('DOMContentLoaded', recalc, false);
        // :root
        
}(document, window));
