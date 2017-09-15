(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var rectangle = require('./src/rectangle/rectangle.js');
var rect = new Rectangle();

},{"./src/rectangle/rectangle.js":2}],2:[function(require,module,exports){
'use strict';

module.exports = function () {
    var rect;
    var draw = function draw(document, x, y) {
        var div = document.createElement('div');
        div.id = 'rectangle';
        div.style.position = 'absolute';
        div.style.display = 'none';
        div.style.border = '1px solid black';
        div.style.top = 0;
        div.style.left = 0;
        div.style.right = 'auto';
        rect = div;
        return div;
    };

    function positionDiv(event) {
        rect.style.display = rect.style.display === 'none' ? 'inline-block' : rect.style.display;
        rect.style.top = event.pageY + 'px';
        rect.style.left = event.pageX + 'px';
        rect.style.height = 0;
        rect.style.width = 0;
        document.addEventListener('mousemove', incHeightAndWidth, false);
    }

    function incHeightAndWidth(event) {
        var top = parseInt(rect.style.top);
        var left = parseInt(rect.style.left);

        if (event.pageX < left && event.pageY < top) {
            rect.style.transform = 'translate(-100%, -100%)';
        } else if (event.pageX < left) {
            rect.style.transform = 'translateX(-100%)';
        } else if (event.pageY < top) {
            rect.style.transform = 'translateY(-100%)';
        } else {
            rect.style.transform = 'none';
        }

        rect.style.height = Math.abs(top - event.pageY) + 'px';
        rect.style.width = Math.abs(left - event.pageX) + 'px';
    }

    function rem_incHeightAndWidth(event) {
        document.removeEventListener('mousemove', incHeightAndWidth, false);
    }

    window.addEventListener("load", function () {
        document.body.append(draw(document, 0, 0)); //appends rectangle to the dom
        document.addEventListener('mousedown', positionDiv, false);
        document.addEventListener('mouseup', rem_incHeightAndWidth, false);
    }, false);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92NC4zLjAvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlbnRyeS5qcyIsInNyYy9yZWN0YW5nbGUvcmVjdGFuZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFlBQVksUUFBUSw4QkFBUixDQUFoQjtBQUNBLElBQUksT0FBTyxJQUFJLFNBQUosRUFBWDs7Ozs7QUNEQSxPQUFPLE9BQVAsR0FBaUIsWUFBWTtBQUN6QixRQUFJLElBQUo7QUFDQSxRQUFJLE9BQU8sU0FBUCxJQUFPLENBQUMsUUFBRCxFQUFXLENBQVgsRUFBYyxDQUFkLEVBQW9CO0FBQzNCLFlBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLFlBQUksRUFBSixHQUFTLFdBQVQ7QUFDQSxZQUFJLEtBQUosQ0FBVSxRQUFWLEdBQXFCLFVBQXJCO0FBQ0EsWUFBSSxLQUFKLENBQVUsT0FBVixHQUFvQixNQUFwQjtBQUNBLFlBQUksS0FBSixDQUFVLE1BQVYsR0FBbUIsaUJBQW5CO0FBQ0EsWUFBSSxLQUFKLENBQVUsR0FBVixHQUFnQixDQUFoQjtBQUNBLFlBQUksS0FBSixDQUFVLElBQVYsR0FBaUIsQ0FBakI7QUFDQSxZQUFJLEtBQUosQ0FBVSxLQUFWLEdBQWtCLE1BQWxCO0FBQ0EsZUFBTyxHQUFQO0FBQ0EsZUFBTyxHQUFQO0FBQ0gsS0FYRDs7QUFhQSxhQUFTLFdBQVQsQ0FBcUIsS0FBckIsRUFBMkI7QUFDdkIsYUFBSyxLQUFMLENBQVcsT0FBWCxHQUFxQixLQUFLLEtBQUwsQ0FBVyxPQUFYLEtBQXVCLE1BQXZCLEdBQWdDLGNBQWhDLEdBQWlELEtBQUssS0FBTCxDQUFXLE9BQWpGO0FBQ0EsYUFBSyxLQUFMLENBQVcsR0FBWCxHQUFvQixNQUFNLEtBQTFCO0FBQ0EsYUFBSyxLQUFMLENBQVcsSUFBWCxHQUFxQixNQUFNLEtBQTNCO0FBQ0EsYUFBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixDQUFwQjtBQUNBLGFBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsQ0FBbkI7QUFDQSxpQkFBUyxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxpQkFBdkMsRUFBMEQsS0FBMUQ7QUFDSDs7QUFFRCxhQUFTLGlCQUFULENBQTJCLEtBQTNCLEVBQWtDO0FBQzlCLFlBQUksTUFBTSxTQUFTLEtBQUssS0FBTCxDQUFXLEdBQXBCLENBQVY7QUFDQSxZQUFJLE9BQU8sU0FBUyxLQUFLLEtBQUwsQ0FBVyxJQUFwQixDQUFYOztBQUVBLFlBQUksTUFBTSxLQUFOLEdBQWMsSUFBZCxJQUFzQixNQUFNLEtBQU4sR0FBYyxHQUF4QyxFQUE2QztBQUN6QyxpQkFBSyxLQUFMLENBQVcsU0FBWCxHQUF1Qix5QkFBdkI7QUFDSCxTQUZELE1BRU0sSUFBSSxNQUFNLEtBQU4sR0FBYyxJQUFsQixFQUF3QjtBQUMxQixpQkFBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixtQkFBdkI7QUFDSCxTQUZLLE1BRUEsSUFBSSxNQUFNLEtBQU4sR0FBYyxHQUFsQixFQUF1QjtBQUN6QixpQkFBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixtQkFBdkI7QUFDSCxTQUZLLE1BRUE7QUFDRixpQkFBSyxLQUFMLENBQVcsU0FBWCxHQUF1QixNQUF2QjtBQUNIOztBQUVELGFBQUssS0FBTCxDQUFXLE1BQVgsR0FBdUIsS0FBSyxHQUFMLENBQVMsTUFBTSxNQUFNLEtBQXJCLENBQXZCO0FBQ0EsYUFBSyxLQUFMLENBQVcsS0FBWCxHQUFzQixLQUFLLEdBQUwsQ0FBUyxPQUFPLE1BQU0sS0FBdEIsQ0FBdEI7QUFFSDs7QUFFRCxhQUFTLHFCQUFULENBQStCLEtBQS9CLEVBQXNDO0FBQ2xDLGlCQUFTLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDLGlCQUExQyxFQUE2RCxLQUE3RDtBQUVIOztBQUVELFdBQU8sZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBaUMsWUFBVTtBQUN2QyxpQkFBUyxJQUFULENBQWMsTUFBZCxDQUFxQixLQUFLLFFBQUwsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBQXJCLEVBRHVDLENBQ0k7QUFDM0MsaUJBQVMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsV0FBdkMsRUFBbUQsS0FBbkQ7QUFDQSxpQkFBUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxxQkFBckMsRUFBNEQsS0FBNUQ7QUFDSCxLQUpELEVBSUcsS0FKSDtBQU1ILENBdEREIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCByZWN0YW5nbGUgPSByZXF1aXJlKCcuL3NyYy9yZWN0YW5nbGUvcmVjdGFuZ2xlLmpzJyk7XG52YXIgcmVjdCA9IG5ldyBSZWN0YW5nbGUoKTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlY3QgOyBcbiAgICB2YXIgZHJhdyA9IChkb2N1bWVudCwgeCwgeSkgPT4ge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pZCA9ICdyZWN0YW5nbGUnO1xuICAgICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZGl2LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgYmxhY2snO1xuICAgICAgICBkaXYuc3R5bGUudG9wID0gMDtcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSAwIDtcbiAgICAgICAgZGl2LnN0eWxlLnJpZ2h0ID0gJ2F1dG8nIDtcbiAgICAgICAgcmVjdCA9IGRpdjtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcG9zaXRpb25EaXYoZXZlbnQpe1xuICAgICAgICByZWN0LnN0eWxlLmRpc3BsYXkgPSByZWN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICdpbmxpbmUtYmxvY2snIDogcmVjdC5zdHlsZS5kaXNwbGF5IDtcbiAgICAgICAgcmVjdC5zdHlsZS50b3AgPSBgJHtldmVudC5wYWdlWX1weGA7XG4gICAgICAgIHJlY3Quc3R5bGUubGVmdCA9IGAke2V2ZW50LnBhZ2VYfXB4YDtcbiAgICAgICAgcmVjdC5zdHlsZS5oZWlnaHQgPSAwO1xuICAgICAgICByZWN0LnN0eWxlLndpZHRoID0gMDtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaW5jSGVpZ2h0QW5kV2lkdGgsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmNIZWlnaHRBbmRXaWR0aChldmVudCkge1xuICAgICAgICB2YXIgdG9wID0gcGFyc2VJbnQocmVjdC5zdHlsZS50b3ApO1xuICAgICAgICB2YXIgbGVmdCA9IHBhcnNlSW50KHJlY3Quc3R5bGUubGVmdCk7XG5cbiAgICAgICAgaWYgKGV2ZW50LnBhZ2VYIDwgbGVmdCAmJiBldmVudC5wYWdlWSA8IHRvcCkge1xuICAgICAgICAgICAgcmVjdC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC0xMDAlLCAtMTAwJSknO1xuICAgICAgICB9ZWxzZSBpZiAoZXZlbnQucGFnZVggPCBsZWZ0KSB7XG4gICAgICAgICAgICByZWN0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSc7XG4gICAgICAgIH1lbHNlIGlmIChldmVudC5wYWdlWSA8IHRvcCkge1xuICAgICAgICAgICAgcmVjdC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTAwJSknO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZWN0LnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3Quc3R5bGUuaGVpZ2h0ID0gYCR7TWF0aC5hYnModG9wIC0gZXZlbnQucGFnZVkpfXB4YDtcbiAgICAgICAgcmVjdC5zdHlsZS53aWR0aCA9IGAke01hdGguYWJzKGxlZnQgLSBldmVudC5wYWdlWCl9cHhgO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtX2luY0hlaWdodEFuZFdpZHRoKGV2ZW50KSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGluY0hlaWdodEFuZFdpZHRoLCBmYWxzZSk7XG5cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiAsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGRyYXcoZG9jdW1lbnQsIDAsMCkpOyAvL2FwcGVuZHMgcmVjdGFuZ2xlIHRvIHRoZSBkb21cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcG9zaXRpb25EaXYsZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcmVtX2luY0hlaWdodEFuZFdpZHRoLCBmYWxzZSk7XG4gICAgfSwgZmFsc2UpO1xuXG59O1xuIl19
