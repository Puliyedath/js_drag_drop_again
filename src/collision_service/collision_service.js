module.exports = function (divs, draggableDiv){
    [].map.call(divs, (div) => {
        console.log(doesCollide.call(div, draggableDiv));
        if ( doesCollide.call(div, draggableDiv) ){
            div.classList.add('collided');
        }else{
            div.classList.remove('collided');
        }
    });

    function doesCollide(draggableDiv) {
        //application of SAT
        var rectangle = this.getBoundingClientRect();
        var draggable_div_rect = draggableDiv.getBoundingClientRect();
        var draggable_div_bottom = draggable_div_rect.bottom;
        var draggable_div_right = draggable_div_rect.right;

        console.log(draggable_div_bottom, draggable_div_right);

        return true &&
            ( (draggable_div_rect.top) < rectangle.bottom ) &&
            ( draggable_div_bottom > rectangle.top ) &&
            ( draggable_div_right > rectangle.left ) &&
            ( (draggable_div_rect.left) < rectangle.right ) ;

    }

    function doesCollide_backup(draggableDiv) {
        //application of SAT
        var rectangle = this.getBoundingClientRect();
        var draggable_div_bottom = parseInt(draggableDiv.style.top) + parseInt(draggableDiv.style.height);
        var draggable_div_right = parseInt(draggableDiv.style.left) + parseInt(draggableDiv.style.width);

        console.log(draggable_div_bottom, draggable_div_right);

        return true &&
            ( parseInt(draggableDiv.style.top) < rectangle.bottom ) &&
            ( draggable_div_bottom > rectangle.top ) &&
            ( draggable_div_right > rectangle.left ) &&
            ( parseInt(draggableDiv.style.left) < rectangle.right ) ;

    }
};
