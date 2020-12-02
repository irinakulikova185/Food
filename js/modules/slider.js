function slider({container, slide, prevArrow, nextArrow, totalCounter, currentCounter, wrapper, field}) {
// slider

const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      prev = document.querySelector(prevArrow),
      next = document.querySelector(nextArrow),
      currentNum = document.querySelector(currentCounter),
      totalNum = document.querySelector(totalCounter),
      sliderWrapper = document.querySelector(wrapper),
      sliderField = document.querySelector(field),
      width = window.getComputedStyle(sliderWrapper).width;

let sliderIndex = 1;
let offset = 0;

function getCurrentIndex(sliderIndex) {
    if(slides.length < 10) {
        currentNum.textContent = `0${sliderIndex}`;
    } else {
        currentNum.textContent = sliderIndex;
    }
}
function setActiveDot() {
    dots.forEach(dot => dot.style.opacity = '0.5');
    dots[sliderIndex - 1].style.opacity = '1';
}
function deleteNotNumbers(arg) {
    return +arg.replace(/\D/g, '');
}

if(slides.length < 10) {
        totalNum.textContent = `0${slides.length}`;
    } else {
        totalNum.textContent = slides.length;
    }

getCurrentIndex(sliderIndex);

sliderField.style.width = 100*slides.length + '%';
slides.forEach(slide => {
    slide.style.width = width;
});
sliderField.style.transition = 'all 1s';
sliderField.style.display = 'flex';
sliderWrapper.style.overflow = 'hidden';

next.addEventListener('click', () => {
    if(offset == deleteNotNumbers(width) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += deleteNotNumbers(width);
    }
    sliderField.style.transform = `translateX(-${offset}px)`;
    if(sliderIndex == slides.length) {
        sliderIndex = 1;
    } else {
        sliderIndex += 1;
    }
    
    getCurrentIndex(sliderIndex);

    setActiveDot();

});

prev.addEventListener('click', () => {
    if(offset == 0) {
        offset = deleteNotNumbers(width) * (slides.length - 1);
    } else {
        offset -= deleteNotNumbers(width);
    }
    sliderField.style.transform = `translateX(-${offset}px)`;
    if(sliderIndex == 1) {
        sliderIndex = slides.length;
    } else {
        sliderIndex -= 1;
    }
    
    getCurrentIndex(sliderIndex);

    setActiveDot();
});

// if(slides.length < 10) {
//     totalNum.textContent = `0${slides.length}`;
// } else {
//     totalNum.textContent = slides.length;
// }

// showSlides(sliderIndex);

// function showSlides(n) {
//     if(n > slides.length) {
//         sliderIndex = 1;
//     }
//     if(n < 1) {
//         sliderIndex = slides.length;
//     }
//     slides.forEach(item => item.style.display = 'none');
//     slides[sliderIndex - 1].style.display = 'block';

//     if(slides.length < 10) {
//         currentNum.textContent = `0${sliderIndex}`;
//     } else {
//         currentNum.textContent = sliderIndex;
//     }
// }
// // function plusSlides(n) {
// //     showSlides(sliderIndex += n);
// // }

// prev.addEventListener('click', () => {
//     sliderIndex = sliderIndex - 1;
//     showSlides(sliderIndex);
// });

// next.addEventListener('click', () => {
//     sliderIndex = sliderIndex + 1;
//     showSlides(sliderIndex);
//  });

slider.style.position = 'relative';
const indicators = document.createElement('ol'),
      dots = [];
indicators.classList.add('carousel-indicators');
indicators.style.cssText = `position: absolute;
                            right: 0;
                            bottom: 0;
                            left: 0;
                            z-index: 15;
                            display: flex;
                            justify-content: center;
                            margin-right: 15%;
                            margin-left: 15%;
                            list-style: none;`;
slider.append(indicators);

slides.forEach((slide, i) => {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    `;
    if( i == 0) {
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
});
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        sliderIndex = slideTo;
        offset = deleteNotNumbers(width) * (sliderIndex - 1);
        sliderField.style.transform = `translateX(-${offset}px)`;
        

        setActiveDot();

        getCurrentIndex(sliderIndex);

    });
});
}

export default slider;