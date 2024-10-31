let slideIndex = 1;
let slideInterval;

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }
}

function changeSlide(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

function nextSlide() {
    // Kiểm tra nếu không phải slide đầu tiên thì yêu cầu trả lời câu hỏi
    if (slideIndex > 1 && slideIndex < 17) {
        const answerInput = document.getElementById(`answer${slideIndex}`);
        if (answerInput && answerInput.value.trim() === "") {
            alert("Vui lòng trả lời câu hỏi trước khi tiếp tục.");
            return;
        }
    }
    changeSlide(1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

function autoChangeSlide() {
    nextSlide();
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoChangeSlide, 500000); // Chuyển slide sau mỗi 5 giây
}

showSlides(slideIndex);
resetTimer();
