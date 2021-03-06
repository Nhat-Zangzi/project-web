var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const header = $('.header')
window.onscroll = function() {
    header.classList.toggle('black', window.scrollY > 0)
    $('.backtop-btn').classList.toggle('visibility', window.scrollY > screen.availWidth - header.offsetHeight)
}


// Navbar

const navBtn = $('.navbar_btn')
const navOverlay = $('.navbar_overlay')
const navBlock = $('.navbar_block')
const navClose = $('.navbar_close')
const navTitles = $$('.navbar_menu-item-title')


navBtn.onclick = () => {
    navOverlay.style.display = 'block'
    navBlock.classList.add('active')

    navClose.onclick = () => {
        navOverlay.style.display = 'none'
        navBlock.classList.remove('active')
    }

    navOverlay.onclick = () => {
        navOverlay.style.display = 'none'
        navBlock.classList.remove('active')
    }
}

navTitles.forEach((navTitle) => {
    navTitle.onclick = function () {
        this.classList.toggle('active')
    }
})


// ---- Slider  ---- //

var slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides2(slideIndex += n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("slider-wrap");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider-wrap");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// Modal 

function joinModalVip () {
    const registerVip = [$('.header__vip-btn'), $('.container_banner') ]
    const modal = $('#modal-join-vip')
    const modalContainer = $('#modal-join-vip .modal-container')
    const modalClose = $('#modal-join-vip .modal_close')
    const modalPackages = $('.modal_package')
    function showModal () {
        modal.classList.add('open')
    }
    
    function hideModal () {
        modal.classList.remove('open')
    }
    for(const item of registerVip) {
        item.onclick = showModal
    }
    
    modalClose.onclick = hideModal
    modal.onclick = hideModal
    
    modalContainer.onclick = function (event) {
        event.stopPropagation();
    }
    
    modalPackages.forEach((modalPackage, index)=> {
        modalPackage.onclick = function () {
            $('.modal_package.active').classList.remove('active')
            this.classList.add('active')
        }
    })
}

setTimeout(joinModalVip, 2000)


function downAppModal () {
    const downBtn = $('#header__icon-wrap--focus .header-wrap-icon')
    const modal = $('#modal-down-app')
    const modalContainer = $('#modal-down-app .modal-container')
    const modalClose = $('#modal-down-app .modal_close')

    function showModal() {
        modal.classList.add('open');
    }

    function hideModal() {
        modal.classList.remove('open');
    }

    downBtn.onclick = showModal

    modalClose.onclick = hideModal
    modal.onclick = hideModal

    modalContainer.onclick = function(event) {
        event.stopPropagation()
    }

}

downAppModal();



// Movies List
const movieList = [   
  {
      id: '1',
      name: 'C??c t??? b??o c???a Yumi',
      category: 'Th???n t?????ng, Th??nh th???, T??nh y??u',
      update: '12',
      imgMin: './assets/img/movie-photo-1-min.webp',
      imgMax: './assets/img/movie-photo-1-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '2',
      name: 'Huynh ????? Th??n M???n C???a Ta',
      category: 'T??nh y??u, C??? trang, Vi???n t?????ng',
      update: '35',
      imgMin: './assets/img/movie-photo-2-min.webp',
      imgMax: './assets/img/movie-photo-2-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '3',
      name: 'B?? ???n N??i Jiri (Jirisan)',
      category: 'Gi???t g??n, Vi???n t?????ng',
      update: 'C???p nh???t 4',
      imgMin: './assets/img/movie-photo-3-min.webp',
      imgMax: './assets/img/movie-photo-3-max.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '4',
      name: 'B??c S?? X??? L???',
      category: 'T??nh y??u, Chi???n tranh',
      update: '20',
      imgMin: './assets/img/movie-photo-4-min.webp',
      imgMax: './assets/img/movie-photo-4-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '5',
      name: 'Tr?????ng An Nh?? C???',
      category: 'T??nh y??u, C??? trang',
      update: '24',
      imgMin: './assets/img/movie-photo-5-min.webp',
      imgMax: './assets/img/movie-photo-5-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '6',
      name: '?????i T??c ????ng Ng???',
      category: 'T???i ph???m, Phim h??i',
      update: '20',
      imgMin: './assets/img/movie-photo-6-min.webp',
      imgMax: './assets/img/movie-photo-6-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '7',
      name: 'SupermodelMe Revolution (T??i L?? Si??u M???u Ch??u ?? 2021)',
      category: 'Show',
      update: 'C???p nh???t 4',
      imgMin: './assets/img/movie-photo-7-min.webp',
      imgMax: './assets/img/movie-photo-7-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
      id: '8',
      name: 'M?? G???p S?? T???',
      category: 'Th??nh th???, T??nh y??u',
      update: '30',
      imgMin: './assets/img/movie-photo-8-min.webp',
      imgMax: './assets/img/movie-photo-8-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '9',
      name: 'B???ng X???p H???ng Qu???c V????ng',
      category: 'Ho???t h??nh',
      update: 'C???p nh???t 4',
      imgMin: './assets/img/movie-photo-9-min.webp',
      imgMax: './assets/img/movie-photo-9-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '10',
      name: 'Boruto: Naruto h???u sinh kh??? ??y',
      category: 'Thanh xu??n, T??nh y??u, C??? trang',
      update: 'C???p nh???t 222',
      imgMin: './assets/img/movie-photo-10-min.webp',
      imgMax: './assets/img/movie-photo-10-max.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '11',
      name: 'Xu??n Thu Phong Th???n',
      category: 'Ho???t h??nh',
      update: 'C???p nh???t 21',
      imgMin: './assets/img/movie-photo-11-min.webp',
      imgMax: './assets/img/movie-photo-11-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '12',
      name: 'Tr?????ng Qu??n ?????i Li???t H???a ( H???c Vi???n Qu??n S??? Li???t H???a )',
      category: 'Thanh xu??n, T??nh y??u',
      update: '48',
      imgMin: './assets/img/movie-photo-12-min.webp',
      imgMax: './assets/img/movie-photo-12-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '13',
      name: 'Thanh G????m Di???t Qu?????B???n ??i???n ???nh',
      category: '',
      update: '1',
      imgMin: './assets/img/movie-photo-13-min.webp',
      imgMax: './assets/img/movie-photo-13-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '14',
      name: 'Mouse K??? S??n Ng?????i',
      category: 'T???i ph???m, H??nh ?????ng',
      update: '20',
      imgMin: './assets/img/movie-photo-14-min.webp',
      imgMax: './assets/img/movie-photo-14-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
      id: '15',
      name: 'One Piece (?????o H???i T???c)',
      category: 'Ho???t h??nh',
      update: '997',
      imgMin: './assets/img/movie-photo-15-min.webp',
      imgMax: './assets/img/movie-photo-15-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '16',
      name: 'H???c Qu???n Gia - Ph???n 1',
      category: 'Ho???t h??nh',
      update: '25',
      imgMin: './assets/img/movie-photo-16-min.webp',
      imgMax: './assets/img/movie-photo-16-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '17',
      name: 'B???y Vi??n Ng???c R???ng Si??u C???p',
      category: 'Ho???t h??nh',
      update: '131',
      imgMin: './assets/img/movie-photo-17-min.webp',
      imgMax: './assets/img/movie-photo-17-min.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '18',
      name: 'Th???i Gian L????ng Th???n M??? C???nh',
      category: 'Th???n t?????ng, Th??nh th???, T??nh y??u',
      update: '31',
      imgMin: './assets/img/movie-photo-18-min.webp',
      imgMax: './assets/img/movie-photo-18-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '19',
      name: 'Thanh G????m Di???t Qu???: Chuy???n T??u V?? T???n (B???n TV)',
      category: 'Ho???t h??nh',
      update: 'C???p nh???t 3',
      imgMin: './assets/img/movie-photo-19-min.webp',
      imgMax: './assets/img/movie-photo-19-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '20',
      name: 'B???n Trai T??i L?? H??? Ly ( C???u V?? H??? Truy???n )',
      category: 'Th???n t?????ng, Th??nh th???, T??nh y??u',
      update: '16',
      imgMin: './assets/img/movie-photo-20-min.webp',
      imgMax: './assets/img/movie-photo-20-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '21',
      name: 'C???m Y Chi H???',
      category: 'T??nh y??u, Vi???n t?????ng',
      update: '55',
      imgMin: './assets/img/movie-photo-21-min.webp',
      imgMax: './assets/img/movie-photo-21-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
      id: '22',
      name: 'C???m T??m T???a Ng???c',
      category: 'T??nh y??u, C??? trang',
      update: '45',
      imgMin: './assets/img/movie-photo-22-min.webp',
      imgMax: './assets/img/movie-photo-22-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '23',
      name: 'Thanh Xu??n C?? B???n M??a 2',
      category: 'Show',
      update: '24',
      imgMin: './assets/img/movie-photo-23-min.webp',
      imgMax: './assets/img/movie-photo-23-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '24',
      name: 'Ngh???ch Thi??n Ki???m Th???n',
      category: '????????????',
      update: '78',
      imgMin: './assets/img/movie-photo-24-min.webp',
      imgMax: './assets/img/movie-photo-24-max.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '25',
      name: 'H??a Ra Em R???t Y??u Anh',
      category: 'Thanh xu??n, Th??nh th???, T??nh y??u',
      update: '24',
      imgMin: './assets/img/movie-photo-25-min.webp',
      imgMax: './assets/img/movie-photo-25-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '26',
      name: 'JUJUTSU KAISEN',
      category: 'Ho???t h??nh',
      update: '24',
      imgMin: './assets/img/movie-photo-26-min.webp',
      imgMax: './assets/img/movie-photo-26-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '27',
      name: 'Nh?? ?? Ph????ng Phi',
      category: 'Thanh xu??n, T??nh y??u, C??? trang',
      update: '44',
      imgMin: './assets/img/movie-photo-27-min.webp',
      imgMax: './assets/img/movie-photo-27-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '28',
      name: 'Chi???n C?? C???nh Gi???i',
      category: 'Ho???t h??nh',
      update: 'C???p nh???t 5',
      imgMin: './assets/img/movie-photo-28-min.webp',
      imgMax: './assets/img/movie-photo-28-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
      id: '29',
      name: 'Th???y Th??? M???t Tr??ng Pha L??',
      category: 'Ho???t h??nh',
      update: '39',
      imgMin: './assets/img/movie-photo-29-min.webp',
      imgMax: './assets/img/movie-photo-29-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '30',
      name: 'V?? Em Ti??n T??n ??i ??? R???',
      category: '????????????',
      update: 'C???p nh???t 71',
      imgMin: './assets/img/movie-photo-30-min.webp',
      imgMax: './assets/img/movie-photo-30-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '31',
      name: 'Thi??n V?? K???',
      category: 'Th???n t?????ng, Th??nh th???, T??nh y??u',
      update: '12',
      imgMin: './assets/img/movie-photo-31-min.webp',
      imgMax: './assets/img/movie-photo-31-max.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '32',
      name: '??? R???',
      category: 'T??nh y??u, C??? trang, Vi???n t?????ng',
      update: '35',
      imgMin: './assets/img/movie-photo-32-min.webp',
      imgMax: './assets/img/movie-photo-32-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '33',
      name: 'B???n C??ng Ph??ng C???a T??i L?? Gumiho',
      category: 'Gi???t g??n, Vi???n t?????ng',
      update: 'C???p nh???t 4',
      imgMin: './assets/img/movie-photo-33-min.webp',
      imgMax: './assets/img/movie-photo-33-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '34',
      name: 'C???a H??ng Ti???n L???i Saet Byul',
      category: 'T??nh y??u, Chi???n tranh',
      update: '20',
      imgMin: './assets/img/movie-photo-34-min.webp',
      imgMax: './assets/img/movie-photo-34-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '35',
      name: 'Khuynh Th??? C???m L??n C???c V?? Lai',
      category: 'T??nh y??u, C??? trang',
      update: '24',
      imgMin: './assets/img/movie-photo-35-min.webp',
      imgMax: './assets/img/movie-photo-35-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
      id: '36',
      name: 'L??m Tr??i Tim Em M???m C?????i',
      category: 'T???i ph???m, Phim h??i',
      update: '20',
      imgMin: './assets/img/movie-photo-36-min.webp',
      imgMax: './assets/img/movie-photo-36-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '37',
      name: 'Chuy???n T??u Sinh T???',
      category: 'Thanh xu??n, T??nh y??u, C??? trang',
      update: '1',
      imgMin: './assets/img/movie-photo-37-min.webp',
      imgMax: './assets/img/movie-photo-37-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '38',
      name: 'Truy???n Thuy???t V??? ??c Nh??n',
      category: 'Th??nh th???, T??nh y??u',
      update: '30',
      imgMin: './assets/img/movie-photo-38-min.webp',
      imgMax: './assets/img/movie-photo-38-max.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '39',
      name: '??c Qu??? ?????i ?????u',
      category: 'Th???n t?????ng, Th??nh th???, T??nh y??u',
      update: '16',
      imgMin: './assets/img/movie-photo-39-min.webp',
      imgMax: './assets/img/movie-photo-39-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '40',
      name: 'S??? Gi??? C???a Ch??a',
      category: 'Thanh xu??n, Th??nh th???, T??nh y??u',
      update: '24',
      imgMin: './assets/img/movie-photo-40-min.webp',
      imgMax: './assets/img/movie-photo-40-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '41',
      name: 'Nhi???m V??? Kh??? Thi',
      category: 'T??nh y??u, Chi???n tranh',
      update: '20',
      imgMin: './assets/img/movie-photo-41-min.webp',
      imgMax: './assets/img/movie-photo-41-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '42',
      name: 'Nh??n ????i T??nh Y??u',
      category: 'T??nh y??u, C??? trang',
      update: '24',
      imgMin: './assets/img/movie-photo-42-min.webp',
      imgMax: './assets/img/movie-photo-42-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
    id: '43',
    name: 'L???p tr??nh vi??n ????ng y??u',
    category: 'T??nh y??u, C??? trang',
    update: '24',
    imgMin: './assets/img/movie-photo-43-min.jpg',
    imgMax: './assets/img/movie-photo-43-max.jpg',
    video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
    id: '44',
    name: 'Phong Kh???i L???c D????ng',
    category: 'B?? ???n, T??nh ti???t',
    update: '36',
    imgMin: './assets/img/Phong Kh???i L???c D????ng.jpg',
    imgMax: './assets/img/Phong Kh???i L???c D????ng-img-max.jpg',
    video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
    id: '45',
    name: '???Thuy???t minh???Xu??n Lai Ch???m Tinh H??',
    category: 'L??ng m???n, T??nh ti???t',
    update: '24',
    imgMin: './assets/img/???Thuy???t minh???Xu??n Lai Ch???m Tinh H??-img-min.jpg',
    imgMax: './assets/img/???Thuy???t minh???Xu??n Lai Ch???m Tinh H??-img-max.webp',
    video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
    id: '46',
    name: 'Khanh Khanh Ng?? T??m',
    category: 'L??ng m???n, H?? c???u',
    update: '24',
    imgMin: './assets/img/Khanh Khanh Ng?? T??m-img-min.jpg',
    imgMax: './assets/img/Khanh Khanh Ng?? T??m-img-max.jpg',
    video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
    id: '47',
    name: 'M??? Nam Chi',
    category: 'L??ng m???n, T??nh ti???t',
    update: '40',
    imgMin: './assets/img/M???-Nam-Chi.webp',
    imgMax: './assets/img/M??? Nam Chi - slider.webp',
    video: './assets/img/Teaser_DanhVong.mp4'
  },
]


// Carousel 
function sliderStyle1(options) {
  const carouselMove = $(options.carouselMoveSelector)
  const carouselWidth = $(options.carouselSelector).offsetWidth
  const prevBtn = $(options.prevBtnSelector)
  const nextBtn = $(options.nextBtnSelector)
  prevBtn.style.display = 'none'

  function render() {
      const htmls = options.movies.map((movie, index) => {
          return `
              <a href="./monamchi.html" id="${movie.id}" class="carousel_item col l-2 m-3 c-4">
                  <div class="carousel_item-images">
                      <div class="carousel_img-min">
                          <img src="${movie.imgMin}" alt="">
                          <div class="carousel_img-min-overlay carousel_img-overlay">
                              <span>${movie.update} t???p</span>
                          </div>
                      </div>
                      <div class="carousel_img-max">
                          <img src="${movie.imgMax}" alt="">
                          <div class="carousel_img-max-overlay carousel_img-overlay">
                              <span><span>Th??? lo???i:</span> ${movie.category}</span>
                              <div class="btns-play-and-add">
                                  <span class="btn-play">
                                      <i class="fas fa-play"></i>
                                  </span>
                                  <span class="btn-add">
                                      <i class="far fa-bookmark">
                                          <i class="fas fa-plus"></i>
                                      </i>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="carousel_item-title">
                      <p>${movie.name}</p>
                  </div>
              </a>
          `
      })
      carouselMove.innerHTML = htmls.join('')
  }
  render()

  const carouselItems = $$(options.carouselItemsSelector)
  const carouselMoveQuantity = Math.round(carouselItems.length/(carouselMove.getBoundingClientRect().width / carouselItems[0].getBoundingClientRect().width))
  var l = 0
  nextBtn.onclick = () => {
      prevBtn.style.display = 'block'
      l++;
      if(l < carouselMoveQuantity) {
          carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
          if(l == carouselMoveQuantity - 1) {
              nextBtn.style.display = 'none'
          }
      } else {
          l = carouselMoveQuantity - 1
          nextBtn.style.display = 'none'
      }
  }

  prevBtn.onclick = () => {
      nextBtn.style.display = 'block'
      l--;
      if(l>=0) {
          carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
          if(l==0) {
              prevBtn.style.display = 'none'
          }
      } else {
          l=0
          prevBtn.style.display = 'none'
      }
  }

  

  for (let i = 1; i <= carouselItems.length; i++) {
      if((i + 1) % 6 == 0) {
          carouselItems[i].onmouseover = function () {
              carouselItems[i].style.transform = `translateX(-${carouselItems[i].offsetWidth / 2}px)`
              carouselItems[i-1].style.opacity = '0'
          }
          carouselItems[i].onmouseout = function () {
              carouselItems[i].style.transform = 'translateX(0)'
              carouselItems[i-1].style.opacity = '1'
          }
      }
  }

}

sliderStyle1({
  movies: [
      movieList[46],
      movieList[26],
      movieList[43],
      movieList[44],
      movieList[45],
      movieList[41],
      movieList[1],  
      movieList[0],
      movieList[2],
      movieList[3],
      movieList[21],
      movieList[5],
      movieList[6],
      movieList[8],
      movieList[9],
      movieList[10],
      movieList[12],
      movieList[14],
      movieList[15],
      movieList[16],
      movieList[18],
      movieList[19],
      movieList[22],
      movieList[23],
      movieList[24],
      movieList[25],
      movieList[26],
      movieList[27],
      movieList[28],
      movieList[29]
  ],
  carouselSelector : '#carousel-1',
  carouselMoveSelector : '#carousel-1 .carousel-move',
  prevBtnSelector : '#carousel-1 .carousel_btn-prev',
  nextBtnSelector : '#carousel-1 .carousel_btn-next',
  carouselItemsSelector: '#carousel-1 .carousel_item'
})

sliderStyle1({
  movies: [
    movieList[42],
    movieList[22],
    movieList[4],
    movieList[13],
    movieList[7],
    movieList[1],
    movieList[2],
    movieList[3],
    movieList[5],
    movieList[6],
    movieList[42],
    movieList[8],
    movieList[9],
    movieList[10],
    movieList[11],
    movieList[12],
    movieList[14],
    movieList[15],
    movieList[16],
    movieList[17],
    movieList[18],
    movieList[19],
    movieList[20],
    movieList[21],
    movieList[23],
    movieList[24],
    movieList[25],
    movieList[26],
    movieList[27],
    movieList[28],
    movieList[29]
  ],
  carouselSelector : '#carousel-2',
  carouselMoveSelector : '#carousel-2 .carousel-move',
  prevBtnSelector : '#carousel-2 .carousel_btn-prev',
  nextBtnSelector : '#carousel-2 .carousel_btn-next',
  carouselItemsSelector: '#carousel-2 .carousel_item'
})

sliderStyle1({
  movies: [   
      movieList[30],
      movieList[34],
      movieList[35],
      movieList[46],
      movieList[43],
      movieList[44],
      movieList[20],
      movieList[31],
      movieList[32],
      movieList[33],
      movieList[19],  
      movieList[21],
      movieList[22],
      movieList[9],
      movieList[10],
      movieList[11],
      movieList[12],
      movieList[13],
      movieList[14],
      movieList[6],
      movieList[7],
      movieList[8],
      movieList[15],
      movieList[16],
      movieList[17],
      movieList[18],
      movieList[23],
      movieList[24],
      movieList[25],
      movieList[26],
      movieList[27],
      movieList[28],
      movieList[29]
  ],
  carouselSelector : '#carousel-4',
  carouselMoveSelector : '#carousel-4 .carousel-move',
  prevBtnSelector : '#carousel-4 .carousel_btn-prev',
  nextBtnSelector : '#carousel-4 .carousel_btn-next',
  carouselItemsSelector: '#carousel-4 .carousel_item'
})

sliderStyle1({
  movies: [ 
      movieList[8],
      movieList[10],
      movieList[14],
      movieList[15],
      movieList[16],
      movieList[18],
      movieList[12],  
      movieList[23],
      movieList[25],
      movieList[27],
      movieList[28],
      movieList[29],
      movieList[14],
      movieList[15],
      movieList[16],
      movieList[18],
      movieList[12],  
      movieList[23],
  ],
  carouselSelector : '#carousel-6',
  carouselMoveSelector : '#carousel-6 .carousel-move',
  prevBtnSelector : '#carousel-6 .carousel_btn-prev',
  nextBtnSelector : '#carousel-6 .carousel_btn-next',
  carouselItemsSelector: '#carousel-6 .carousel_item'
})

sliderStyle1({
  movies: [
      movieList[26],
      movieList[7],
      movieList[19],
      movieList[24],
      movieList[33],
      movieList[4],
      movieList[11],  
      movieList[17],
      movieList[20],
      movieList[13],
      movieList[21],
      movieList[1],
      movieList[0],
      movieList[2],
      movieList[3],
      movieList[5],
      movieList[6],
      movieList[22]
  ],
  carouselSelector : '#carousel-7',
  carouselMoveSelector : '#carousel-7 .carousel-move',
  prevBtnSelector : '#carousel-7 .carousel_btn-prev',
  nextBtnSelector : '#carousel-7 .carousel_btn-next',
  carouselItemsSelector: '#carousel-7 .carousel_item'
})

sliderStyle1({
  movies: [
      movieList[36],
      movieList[37],
      movieList[38],
      movieList[39],
      movieList[40],
      movieList[41],
      movieList[11],  
      movieList[17],
      movieList[20],
      movieList[13],
      movieList[21],
      movieList[1],
      movieList[0],
      movieList[2],
      movieList[3],
      movieList[5]
  ],
  carouselSelector : '#carousel-8',
  carouselMoveSelector : '#carousel-8 .carousel-move',
  prevBtnSelector : '#carousel-8 .carousel_btn-prev',
  nextBtnSelector : '#carousel-8 .carousel_btn-next',
  carouselItemsSelector: '#carousel-8 .carousel_item'
})

sliderStyle1({
  movies: [   
      movieList[11],
      movieList[32],
      movieList[30],
      movieList[35],
      movieList[19],  
      movieList[20],
      movieList[33],
      movieList[22],
      movieList[9],
      movieList[34],
      movieList[10],
      movieList[12],
      movieList[13],
      movieList[21],
      movieList[14],
      movieList[6],
      movieList[31], 
      movieList[7],
      movieList[15],
      movieList[8],
      movieList[16],
      movieList[17],
      movieList[18],
      movieList[23],
      movieList[24],
      movieList[25],
      movieList[26],
      movieList[27],
      movieList[28],
      movieList[29]
  ],
  carouselSelector : '#carousel-9',
  carouselMoveSelector : '#carousel-9 .carousel-move',
  prevBtnSelector : '#carousel-9 .carousel_btn-prev',
  nextBtnSelector : '#carousel-9 .carousel_btn-next',
  carouselItemsSelector: '#carousel-9 .carousel_item'
})

function sliderStyle2(options) {
  const carouselMove = $(options.carouselMoveSelector)
  const carouselWidth = $(options.carouselSelector).offsetWidth
  const prevBtn = $(options.prevBtnSelector)
  const nextBtn = $(options.nextBtnSelector)
  prevBtn.style.display = 'none'

  if($(`${options.carouselSelector}.carousel-rank`)) {
      function render() {
          const htmls = options.movies.map((movie, index) => {
              return `
                  <div class="carousel_item col l-3 m-4 c-6">
                      <div class="carousel_rank-img">
                          <img src="${movie.img}" alt="">
                          <div class="carousel_rank-overlay">
                              <div class="btns-play-and-add">
                                  <span class="btn-play">
                                      <i class="fas fa-play"></i>
                                  </span>
                                  <span class="btn-add">
                                      <i class="far fa-bookmark">
                                          <i class="fas fa-plus"></i>
                                      </i>
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div class="carousel_rank-block">
                          <img src="${movie.rank}" alt="" class="carousel_rank-number">
                          <div class="carousel_rank-content">
                              <p class="carousel_rank-title">${movie.name}</p>
                              <p class="carousel_rank-update">${movie.update} t???p</p>
                          </div>
                      </div>
                  </div>
              `
          })
          carouselMove.innerHTML = htmls.join('')
      }
      render()
  }

  if($(`${options.carouselSelector}.carousel-comingsoon`)) {
      function render() {
          const htmls = options.movies.map((movie, index) => {
              return `
                  <div class="carousel_item col l-2-4 m-3 c-4">
                      <div class="carousel-comingsoon_timeline">
                          <div class="comingsoon_timeline-line"></div>
                          <div class="comingsoon_timeline-point"></div>
                          <div class="comingsoon_timeline-time">
                              <p class="comingsoon_timeline-date">${movie.date}</p>
                              <p class="comingsoon_timeline-day">${movie.day}</p>
                          </div>
                      </div>
                      <div class="carousel-comingsoon_poster">
                          <div class="comingsoon_poster-img-wrap">
                              <img src="${movie.img}" alt="">
                              <div class="comingsoon_poster-img-overlay">
                                  <div class="btns-play-and-add">
                                      <span class="btn-play">
                                          <i class="fas fa-play"></i>
                                      </span>
                                      <span class="btn-add">
                                          <i class="far fa-bookmark">
                                              <i class="fas fa-plus"></i>
                                          </i>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          <div class="comingsoon_poster-content">
                              <div class="comingsoon_poster-title">${movie.name}</div>
                              <div class="comingsoon_poster-hagtag">
                                  <span>${movie.hagtag[0]}</span>
                                  <span>${movie.hagtag[1]}</span>
                              </div>
                              <div class="comingsoon_poster-info">
                                  <p>
                                      <span>?????o di???n: </span>${movie.director}
                                  </p>
                                  <p>
                                      <span>Di???n vi??n: </span>${movie.actor}
                                  </p>
                                  <p>
                                      <span>Mi??u t???: </span>${movie.decs}
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="carousel-comingsoon_title">
                          <p>${movie.name}</p>
                      </div>
                  </div>
              `
          })
          carouselMove.innerHTML = htmls.join('')
      }
      render()
  }

  const carouselItems = $$(options.carouselItemsSelector)
  const carouselMoveQuantity = Math.round(carouselItems.length/(carouselMove.getBoundingClientRect().width / carouselItems[0].getBoundingClientRect().width))
  var l = 0
  nextBtn.onclick = () => {
      prevBtn.style.display = 'block'
      l++;
      if(l < carouselMoveQuantity) {
          carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
          if(l == carouselMoveQuantity - 1) {
              nextBtn.style.display = 'none'
          }
      } else {
          l = carouselMoveQuantity - 1
          nextBtn.style.display = 'none'
      }
  }

  prevBtn.onclick = () => {
      nextBtn.style.display = 'block'
      l--;
      if(l>=0) {
          carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
          if(l==0) {
              prevBtn.style.display = 'none'
          }
      } else {
          l=0
          prevBtn.style.display = 'none'
      }
  }
}

const rankList = [   
  {
      name: 'Khang Khang Ng?? T??m',
      update: '24',
      img: './assets/img/Khanh Khanh Ng?? T??m-img-max.jpg',
      rank: './assets/img/rank-number1.png'
  },
  {
      name: 'B?? M???t N??i G??c T???i',
      update: '24',
      img: './assets/img/rank-img1.jpg',
      rank: './assets/img/rank-number2.png'
  },
  {
      name: 'Phong Kh???i L???c D????ng',
      update: '39',
      img: './assets/img/Phong Kh???i L???c D????ng-img-max.jpg',
      rank: './assets/img/rank-number3.png'
  },
  {
      name: '???Thuy???t minh???Xu??n Lai Ch???m Tinh H??',
      update: '24',
      img: './assets/img/???Thuy???t minh???Xu??n Lai Ch???m Tinh H??-img-max.webp',
      rank: './assets/img/rank-number4.png'
  },
  {
      name: 'H??? Ti??n Sinh L??u Luy???n Kh??ng Qu??n (N???i V????ng V???n C???a H??? Ti??n Sinh)',
      update: '24',
      img: './assets/img/rank-img3.jpg',
      rank: './assets/img/rank-number5.png'
  },
  {
      name: 'B???n G??i L???u D?????i Xin H??y K?? Nh???n',
      update: '36',
      img: './assets/img/rank-img4.jpg',
      rank: './assets/img/rank-number6.png'
  },
  {
      name: '???Thuy???t minh???M???t ?????i M???t Ki???p (Nh???t Sinh Nh???t Th???)',
      update: '24',
      img: './assets/img/rank-img5.jpg',
      rank: './assets/img/rank-number7.png'
  },
  {
      name: 'Tr?????ng An nh?? c???',
      update: '24',
      img: './assets/img/rank-img6.jpg',
      rank: './assets/img/rank-number8.png'
  },
  {
      name: 'B??c s?? x??? l???',
      update: '24',
      img: './assets/img/rank-img7.jpg',
      rank: './assets/img/rank-number9.png'
  },
  {
      name: 'N???a L?? ???????ng M???t N???a L?? ??au Th????ng',
      update: '24',
      img: './assets/img/rank-img8.jpg',
      rank: './assets/img/rank-number10.png'
  },
  {
      name: '?????i t??c ????ng ng???',
      update: '24',
      img: './assets/img/rank-img9.jpg',
      rank: './assets/img/rank-number11.png'
  },
  {
      name: 'H???c vi???n qu??n s??? Li???t H???a',
      update: '24',
      img: './assets/img/rank-img10.jpg',
      rank: './assets/img/rank-number12.png'
  },
  {
      name: 'B?? M???t N??i G??c T???i',
      update: '24',
      img: './assets/img/rank-img11.jpg',
      rank: './assets/img/rank-number11.png'
  },
  {
      name: 'B?? M???t N??i G??c T???i',
      update: '24',
      img: './assets/img/rank-img12.jpg',
      rank: './assets/img/rank-number13.png'
  },
]

sliderStyle2({
  movies: rankList,
  carouselSelector : '#carousel-3',
  carouselMoveSelector : '#carousel-3 .carousel-move',
  prevBtnSelector : '#carousel-3 .carousel_btn-prev',
  nextBtnSelector : '#carousel-3 .carousel_btn-next',
  carouselItemsSelector: '#carousel-3 .carousel_item'
})

const comingsoonList = [   
    {
        date: '11-16',
        day: 'Th??? Ba',
        name: 'Gia Nam Truy???n',
        img: './assets/img/poster7.jpg',
        hagtag: ['Ti???ng H??n', 'Thanh xu??n'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'B??? phim H??n Qu???c ???Em S??? Tr??? Th??nh Ban ????m C???a Anh??? k??? v??? c??u chuy???n ng???t ng??o l???i h???i h???p gi???a n??? b??c s?? v?? n??m th??nh vi??n ban nh???c.'
    },
    {
        date: 'Xin h??y ????n ?????i!',
        day: '&nbsp',
        name: 'Ch??? L?? Quan H??? H??n Nh??n',
        img: './assets/img/poster8.jpg',
        hagtag: ['Ti???ng H??n', 'Thanh xu??n'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'B??? phim H??n Qu???c ???Em S??? Tr??? Th??nh Ban ????m C???a Anh??? k??? v??? c??u chuy???n ng???t ng??o l???i h???i h???p gi???a n??? b??c s?? v?? n??m th??nh vi??n ban nh???c.'
    },
    {
        date: 'Xin h??y ????n ?????i!',
        day: '&nbsp',
        name: '????i V??ng',
        img: './assets/img/poster9.jpg',
        hagtag: ['Ti???ng H??n', 'Thanh xu??n'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'B??? phim H??n Qu???c ???Em S??? Tr??? Th??nh Ban ????m C???a Anh??? k??? v??? c??u chuy???n ng???t ng??o l???i h???i h???p gi???a n??? b??c s?? v?? n??m th??nh vi??n ban nh???c.'
    },
    {
        date: 'Xin h??y ????n ?????i!',
        day: '&nbsp',
        name: 'Ai L?? Hung Th???',
        img: './assets/img/poster10.jpg',
        hagtag: ['Ti???ng H??n', 'Thanh xu??n'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'B??? phim H??n Qu???c ???Em S??? Tr??? Th??nh Ban ????m C???a Anh??? k??? v??? c??u chuy???n ng???t ng??o l???i h???i h???p gi???a n??? b??c s?? v?? n??m th??nh vi??n ban nh???c.'
    },
    {
        date: '11-9',
        day: 'Th??? Ba',
        name: 'Jo Yi V?? ??m H??nh Ng??? X???',
        img: './assets/img/poster5.jpg',
        hagtag: ['Ti???ng H??n', 'Thanh xu??n'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'B??? phim H??n Qu???c ???Em S??? Tr??? Th??nh Ban ????m C???a Anh??? k??? v??? c??u chuy???n ng???t ng??o l???i h???i h???p gi???a n??? b??c s?? v?? n??m th??nh vi??n ban nh???c.'
    },
    {
        date: '11-11',
        day: 'Th??? N??m',
        name: 'G??c khu???t h???c ???????ng',
        img: './assets/img/poster6.jpg',
        hagtag: ['Ti???ng H??n', 'Thanh xu??n'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'B??? phim H??n Qu???c ???Em S??? Tr??? Th??nh Ban ????m C???a Anh??? k??? v??? c??u chuy???n ng???t ng??o l???i h???i h???p gi???a n??? b??c s?? v?? n??m th??nh vi??n ban nh???c.'
    },
  {
      date: '11-7',
      day: 'Ch??? Nh???t',
      name: 'Anh L?? Hi???p S?? B??ng ????m C???a Em',
      img: './assets/img/poster1.jpg',
      hagtag: ['Ti???ng H??n', 'Thanh xu??n'],
      director: 'Ahn Ji-Sook',
      actor: 'Lee Jun-Young',
      decs: 'B??? phim H??n Qu???c ???Em S??? Tr??? Th??nh Ban ????m C???a Anh??? k??? v??? c??u chuy???n ng???t ng??o l???i h???i h???p gi???a n??? b??c s?? v?? n??m th??nh vi??n ban nh???c.'
  },
  {
      date: '11-8',
      day: 'Th??? Hai',
      name: '??????ng Gia Ch??? M???u',
      img: './assets/img/poster2.jpg',
      hagtag: ['Ti???ng Ph??? Th??ng', 'C???n ?????i'],
      director: 'Yu Zheng',
      actor: 'Angel, Tr????ng Tu??? V??n',
      decs: 'B??? phim H??n Qu???c ???Em S??? Tr??? Th??nh Ban ????m C???a Anh??? k??? v??? c??u chuy???n ng???t ng??o l???i h???i h???p gi???a n??? b??c s?? v?? n??m th??nh vi??n ban nh???c.'
  },
  {
      date: '11-8',
      day: 'Th??? Hai',
      name: 'Th???n t?????ng: Cu???c ?????o ch??nh',
      img: './assets/img/poster3.jpg',
      hagtag: ['Ti???ng H??n', 'Thanh xu??n'],
      director: 'Ahn Ji-Sook',
      actor: 'Lee Jun-Young',
      decs: 'B??? phim H??n Qu???c ???Em S??? Tr??? Th??nh Ban ????m C???a Anh??? k??? v??? c??u chuy???n ng???t ng??o l???i h???i h???p gi???a n??? b??c s?? v?? n??m th??nh vi??n ban nh???c.'
  },
  {
      date: '11-9',
      day: 'Th??? Ba',
      name: 'Love At Night',
      img: './assets/img/poster4.jpg',
      hagtag: ['Ti???ng H??n', 'Thanh xu??n'],
      director: 'Ahn Ji-Sook',
      actor: 'Lee Jun-Young',
      decs: 'B??? phim H??n Qu???c ???Em S??? Tr??? Th??nh Ban ????m C???a Anh??? k??? v??? c??u chuy???n ng???t ng??o l???i h???i h???p gi???a n??? b??c s?? v?? n??m th??nh vi??n ban nh???c.'
  },
  
]

sliderStyle2({
  movies: comingsoonList,
  carouselSelector : '#carousel-5',
  carouselMoveSelector : '#carousel-5 .carousel-move',
  prevBtnSelector : '#carousel-5 .carousel_btn-prev',
  nextBtnSelector : '#carousel-5 .carousel_btn-next',
  carouselItemsSelector: '#carousel-5 .carousel_item'
})


function loginModal () {
    const loginBtn = $('#header__icon-wrap--login .header-wrap-icon')
    const loginUserBtn = $('#header__icon-wrap--login .header__user-btn')
    const loginTab = $('.header__icon-wrap .header__tab-btn')
    const modal = $('#modal-login')
    const modalContainer = $('#modal-login .modal-container')
    const modalClose = $('#modal-login .modal_close')

    function showModal() {
        modal.classList.add('open')
    }
    function hideModal () {
        modal.classList.remove('open')
    }
    loginBtn.onclick = showModal 
    loginUserBtn.onclick = showModal
    loginTab.onclick = showModal
    modalClose.onclick = hideModal
    modal.onclick = hideModal

    modalContainer.onclick = function(event) {
        event.stopPropagation()
    }
}

loginModal()
