const aTag = document.querySelectorAll('a[href="#"]');
aTag.forEach(tag => {
    tag.addEventListener('click', (e) => {
        e.preventDefault(); // ← 기본 동작(맨 위로 이동) 막기
    });
});

const t_menu_list = document.querySelectorAll('#table_pc .product [class*="_lnb"]');
const t_sub_list = document.querySelectorAll('#table_pc .product li .lnb');
/**********************테블릿 메뉴안에서 메뉴 선택******************/
t_menu_list.forEach(select => {
    select.addEventListener('click', () => {
        const target = select.querySelector('.lnb');

        t_sub_list.forEach(sub => {
            if (sub !== target) {
                sub.classList.remove('active');
            }
        });        
        target.classList.toggle('active');
    });
});
/***************************************************************/



/**********************모바일 변수 선언***************************/
const m_menu = document.querySelectorAll('#m_phone .user_menu li');
const m_product = document.querySelector('#m_phone .product');
const m_menu_list = document.querySelectorAll('#m_phone .product [class*="_lnb"]');

/**********************모바일 아이콘 선택**************************/
m_menu.forEach(icon => {
    icon.addEventListener('click', () => {
        if(icon.classList.contains('menu_icon')){
            m_product.classList.toggle('active');
        }        
    });
});
/**********************모바일 메뉴안에서 메뉴 선택******************/
m_menu_list.forEach(select => {
    select.addEventListener('click', () => {
        const target = select.querySelector('.lnb');        
        target.classList.toggle('active');
    });
});
/*************************메인 배너 스와이퍼**********************/
const mainBnr = new Swiper('#banner_slide',{
    autoplay:{delay:1500},
    loop:true,
    slidesPerView: 1,
    initialSlide:1,        
    scrollbar:{
        el: '.swiper-scrollbar',        
    },
})
/************************커피 머신 스와이퍼***********************/
new Swiper(`#machin_slide`, {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {        
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },        
        768: {
            slidesPerView: 2.8,
            spaceBetween: 50,

        },        
        1024: {
            slidesPerView: 3.4,
            spaceBetween: 70,

        },        
        1280: {
            slidesPerView: 4,
            spaceBetween: 140,
        }
    }
});

/************************커피 캡슐 스와이퍼***********************/
const productSwiperSet = [
    {swiperId: 'origin_cap'},
    {swiperId: 'neo_cap'},
];
productSwiperSet.forEach(set => {
    new Swiper(`#${set.swiperId}`, {
        loop: true,        
        pagination: {
        el: ".swiper-pagination",
        },
        breakpoints: {        
            0: {
                slidesPerView: 2,
                spaceBetween: 20,

            },        
            768: {
                slidesPerView: 2.8,
                spaceBetween: 50,

            },        
            1024: {
                slidesPerView: 3.4,
                spaceBetween: 70,

            },        
            1280: {
                slidesPerView: 4,
                spaceBetween: 140,
            }
        }
    });
});
/************************커피 캡슐 선택**************************/
const capCatagory = document.querySelectorAll('#capsule .select_cap .product button');
const capSlider = document.querySelectorAll('#capsule .swiper');

capSlider.forEach((s, i) => {
    s.style.display = i === 0 ? 'block' : 'none';
});

capCatagory.forEach((btn, index) => { 
    btn.addEventListener('click', () => {    
        capCatagory.forEach((i) => i.classList.remove('active'));    
        btn.classList.add('active');

        capSlider.forEach(s => s.style.display = 'none');        
        capSlider[index].style.display = 'block';        
    });
});
/************************이벤트 배너****************************/

const eventBnr = new Swiper('#event_slide',{
    autoplay:{delay:1500},
    loop:true,
    slidesPerView: 1,
    initialSlide:1,        
    scrollbar:{
        el: '.swiper-scrollbar',        
    },
})