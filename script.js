let a = document.querySelector(".Brochure-btn");

a.addEventListener('click', nikhil);
function nikhil() {
    a.style.backgroundColor = "white";
    a.style.color = "black";
}




//testimonial slider

    let slides = document.querySelector(".slides");
    const Next = document.querySelector(".Next-btn");
    const images = document.querySelectorAll('.image');


    let sliderno = 1;

    Next.addEventListener('click', slidess);
    function slidess() {

        if (sliderno < images.length) {
            slides.style.transform = `translateX(-${sliderno * 100}%)`;
            slides.style.transition = "0.5s ease-in-out";
            sliderno++;
        }
        else {
            slides.style.transform = `translateX(0%)`;
            sliderno = 1;
        }

    }







