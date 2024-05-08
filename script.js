for (elem of document.querySelectorAll('.fancy')) {
    let text = elem.innerHTML;
    elem.innerHTML = '';
    for (let i = 0; i < text.length; ++i) {
        let span = document.createElement('span');
        span.classList.add(`fancy-${i}`);
        span.innerHTML = text[i];
        span.style['transition-delay'] = `${50 * i}ms`;
        span.style['animation-delay'] = `${150 * i + 750}ms`;
        elem.appendChild(span);
    }
}


const invert = document.querySelector('#invert');

if (document.body.style.backdropFilter === undefined) {
    document.body.style.backdropFilter = 'none';
    invert.style.background = 'rgba(100,100,100,0.5)';
}

const hero = document.querySelector('.hero-container');
const math = document.querySelector('#math');
const code = document.querySelector('#code');
const photo = document.querySelector('#photo');
hero.addEventListener('mouseenter', (event) => {
    
    invert.animate({
        transform: `translate(calc(${event.clientX}px - 50%), calc(${event.clientY}px - 50%)) scale(${document.querySelector('.fancy:hover')? 1: 0.5})`
    }, {
        duration: 500,
        fill: 'forwards'
    })
});

hero.addEventListener('mousemove', (event) => {
    invert.animate({
        transform: `translate(calc(${event.clientX}px - 50%), calc(${event.clientY}px - 50%)) scale(${document.querySelector('.fancy:hover')? 1: 0.5})`
    }, {
        duration: 800,
        fill: 'forwards'
    })
});

hero.addEventListener('mouseleave', (event) => {
    invert.animate({
        transform: 'translate(calc(50vw - 50%), calc(50vh - 47.9%)) scale(0.3)'
    }, {
        duration: 200,
        fill: 'forwards'
    })
});