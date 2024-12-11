document.addEventListener("DOMContentLoaded", function () {
  const b = document.querySelectorAll(".box");

  function check() {
    const view = window.innerHeight * 0.6;

    b.forEach(function (box) {
      const trig = box.getBoundingClientRect().top;
      if (trig < view) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
  window.addEventListener("scroll", check);
  check();
});

let slideIndex = 0; // Khởi tạo slide đầu tiên
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dots span");

function showSlides() {
  // Ẩn tất cả các slide và bỏ active cho dot
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots[index].classList.remove("active");
  });

  // Hiển thị slide tiếp theo
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Quay về slide đầu tiên
  }

  slides[slideIndex - 1].style.display = "block"; // Hiển thị slide hiện tại
  dots[slideIndex - 1].classList.add("active"); // Kích hoạt dot tương ứng

  // Tự động chuyển sau 3 giây
  setTimeout(showSlides, 3000);
}

// Chạy slideshow ngay khi tải trang
showSlides();
