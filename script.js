const sliderRight = document.querySelector('#slider-right')
const sliderLeft = document.querySelector('#slider-left')

const image = document.querySelector('#image')
const testimonial = document.querySelector('#testimonial')
const name = document.querySelector('#name')
const job = document.querySelector('#job')

//track the current slide
let slide = 0;

const testimonials = [
    {
        image: './images/image-tanya.jpg',
        testimonial: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        name: 'Tanya Sinclair',
        job: 'UX Engineer',

    },
    {
        image: './images/image-john.jpg',
        testimonial: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',

    }
]



function showTestimonial(id) {
    image.src = testimonials[id].image;
    image.style.opacity = '1';
    image.style.animation = 'none'
    testimonial.style.opacity = '0';
    name.style.opacity = '0';
    job.style.opacity = '0';

    setTimeout(() => {
        testimonial.innerText = testimonials[id].testimonial;
        name.innerText = testimonials[id].name;
        job.innerText = testimonials[id].job;
        testimonial.style.opacity = '.8';
        name.style.opacity = '1';
        job.style.opacity = '1';
    }, 500)



}


sliderRight.addEventListener('click', () => {
    slide++;

    if (slide > testimonials.length - 1) {
        slide = 0
    }
    image.style.animation = 'slide-left 1.5s forwards';
    image.style.opacity = '0';

    setTimeout(() => {
        showTestimonial(slide)


    }, 1000)



})

sliderLeft.addEventListener('click', () => {
    slide--;
    if (slide < 0) {
        slide = testimonials.length - 1;
    }
    image.style.animation = 'slide-right 1.5s forwards';
    image.style.opacity = '0';

    setTimeout(() => {
        showTestimonial(slide)


    }, 1000)
})