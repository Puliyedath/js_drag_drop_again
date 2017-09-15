var collision_service = require("../collision_service/collision_service.js");
module.exports = function () {

    var rect ;
    var boxes;
    var draw = (document, x, y) => {
        var div = document.createElement('div');
        boxes = document.querySelectorAll('.box');

        div.id = 'rectangle';
        div.style.position = 'absolute';
        div.style.display = 'none';
        div.style.border = '1px solid black';
        div.style.top = 0;
        div.style.left = 0 ;
        div.style.right = 'auto' ;
        rect = div;
        return div;
    };

    function positionDiv(event){
        rect.style.display = rect.style.display === 'none' ? 'inline-block' : rect.style.display ;
        rect.style.top = `${event.pageY}px`;
        rect.style.left = `${event.pageX}px`;
        rect.style.height = 0;
        rect.style.width = 0;
        document.addEventListener('mousemove', incHeightAndWidth, false);
    }

    function incHeightAndWidth(event) {
        var top = parseInt(rect.style.top);
        var left = parseInt(rect.style.left);

        if (event.pageX < left && event.pageY < top) {
            rect.style.transform = 'translate(-100%, -100%)';
        }else if (event.pageX < left) {
            rect.style.transform = 'translateX(-100%)';
        }else if (event.pageY < top) {
            rect.style.transform = 'translateY(-100%)';
        }else {
            rect.style.transform = 'none';
        }

        rect.style.height = `${Math.abs(top - event.pageY)}px`;
        rect.style.width = `${Math.abs(left - event.pageX)}px`;

        //check for collisions
        collision_service(boxes,rect);

    }

    function rem_incHeightAndWidth(event) {
        document.removeEventListener('mousemove', incHeightAndWidth, false);
        

    }

    window.addEventListener("load" , function(){
        document.body.append(draw(document, 0,0)); //appends rectangle to the dom
        document.addEventListener('mousedown', positionDiv,false);
        document.addEventListener('mouseup', rem_incHeightAndWidth, false);
    }, false);

};
