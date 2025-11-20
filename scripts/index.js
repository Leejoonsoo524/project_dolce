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
/***************************************************************/
const yakMainBnr = new Swiper('#banner_slide',{
    //autoplay:{delay:1500},
    loop:true,
    slidesPerView: 1,
    initialSlide:1,        
    pagination:{
        el:'#main_banner .swiper-pagination',                
    },
})
/**************************************************************/