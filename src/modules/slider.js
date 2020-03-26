const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
    slider = document.querySelector('.portfolio-content'),
    portfolioDots = document.querySelector('.portfolio-dots');
    let dot;

    let currentSlide = 0,
    interval;


    const addDots = () => {
        for(let i = 0; i < slide.length; i++) {
            let dots = document.createElement('li');
            dots.classList.add('dot');
            portfolioDots.appendChild(dots);
            }
            dot = document.querySelectorAll('.dot');
            dot[0].classList.add(('dot-active'));
        };

    addDots();


    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlider = () => {

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length) {
            currentSlide = 0; 
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlider, time);

    };

    const stopSlide = () => {
        clearInterval(interval);
    };


    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if(target.matches('#arrow-right')) {
            currentSlide++;
        } else if(target.matches('#arrow-left')) {
            currentSlide--;
        } else if(target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if(elem === target) {
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if(currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn, .dot')) {
            stopSlide();
        }
    });
        

    slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn, .dot')) {
            startSlide();
        }  
    });

    

        startSlide(1500);
    };

    export default slider;