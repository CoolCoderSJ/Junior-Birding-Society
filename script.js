const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = element;

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });


$(document).ready(function(){

    let containers = document.getElementsByClassName('container')
    let containersArray = Array.from(containers)
    containersArray.forEach((container) => {
        let $elem = $(container)
        $elem.css('opacity', 0)
    })
    
    $(window).on('scroll', function(){
        let containersLeft = document.getElementsByClassName('slideInLeft')
        let containersLeftArray = Array.from(containersLeft)
        containersLeftArray.forEach((container) => {
            if (!$(container).hasClass('already_animated')) $(container).css("opacity", 0)
            let $elem = $(container)
            let $window = $(window)
            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            if (elemBottom < docViewBottom) {
                $elem.css('opacity', 1)
                if ($(container).hasClass('already_animated')) return
                animateCSS(container, 'slideInLeft')
                $(container).addClass('already_animated')
            }
        })

        let containersRight = document.getElementsByClassName('slideInRight')
        let containersRightArray = Array.from(containersRight)
        containersRightArray.forEach((container) => {
            if (!$(container).hasClass('already_animated')) $(container).css("opacity", 0)
            let $elem = $(container)
            let $window = $(window)
            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            if (elemBottom < docViewBottom) {
                $elem.css('opacity', 1)
                if ($(container).hasClass('already_animated')) return
                animateCSS(container, 'slideInRight')
                $(container).addClass('already_animated')
            }
        })

        let containers = document.getElementsByClassName('container')
        let containersArray = Array.from(containers)
        containersArray.forEach((container) => {
            if (!$(container).hasClass('already_animated')) $(container).css("opacity", 0)
            let $elem = $(container)
            let $window = $(window)
            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            if (elemBottom < docViewBottom+200) {
                $elem.css('opacity', 1)
                if ($(container).hasClass('already_animated')) return
                animateCSS(container, 'fadeInUp')
                $(container).addClass('already_animated')
            }
        })
    });
})