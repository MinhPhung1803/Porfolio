// JavaScript Document
// Get all filter buttons and portfolio items
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
// Function to filter items
filterBtns.forEach(button => {
  button.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter;
    portfolioItems.forEach(item => {
      if (filter === 'all') {
        item.style.display = 'block'; // Show all items
      } else if (item.classList.contains(filter)) {
        item.style.display = 'block'; // Show items that match the filter
      } else {
        item.style.display = 'none'; // Hide items that don't match the filter
      }
    });
  });
});
var typed = new Typed('.element', {
               	strings: ["Web Designer.", "UI-UX Designer.","Apps Designer." ,"HTML- CSS."],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});

  new WOW().init();
         function createStar() {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.top = `${Math.random() * 100}vh`;
                star.style.left = `${Math.random() * 100}vw`;
                star.style.animationDuration = `${Math.random() * 2 + 1}s`; // 随机设置闪烁速度
                return star;
            }

            function addStars(numStars) {
                const container = document.body;
                for (let i = 0; i < numStars; i++) {
                    const star = createStar();
                    container.appendChild(star);
                }
            }
            function initStarField() {
                const numStars = 200;
                addStars(numStars);
            }

            initStarField();

// Khởi tạo nền sao và cập nhật khi cuộn
addStars(200); // Tạo 200 ngôi sao
window.addEventListener('scroll', updateStars);

