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
      name: 'Các tế bào của Yumi',
      category: 'Thần tượng, Thành thị, Tình yêu',
      update: '12',
      imgMin: './assets/img/movie-photo-1-min.webp',
      imgMax: './assets/img/movie-photo-1-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '2',
      name: 'Huynh Đệ Thân Mến Của Ta',
      category: 'Tình yêu, Cổ trang, Viễn tưởng',
      update: '35',
      imgMin: './assets/img/movie-photo-2-min.webp',
      imgMax: './assets/img/movie-photo-2-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '3',
      name: 'Bí Ẩn Núi Jiri (Jirisan)',
      category: 'Giật gân, Viễn tưởng',
      update: 'Cập nhật 4',
      imgMin: './assets/img/movie-photo-3-min.webp',
      imgMax: './assets/img/movie-photo-3-max.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '4',
      name: 'Bác Sĩ Xứ Lạ',
      category: 'Tình yêu, Chiến tranh',
      update: '20',
      imgMin: './assets/img/movie-photo-4-min.webp',
      imgMax: './assets/img/movie-photo-4-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '5',
      name: 'Trường An Như Cố',
      category: 'Tình yêu, Cổ trang',
      update: '24',
      imgMin: './assets/img/movie-photo-5-min.webp',
      imgMax: './assets/img/movie-photo-5-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '6',
      name: 'Đối Tác Đáng Ngờ',
      category: 'Tội phạm, Phim hài',
      update: '20',
      imgMin: './assets/img/movie-photo-6-min.webp',
      imgMax: './assets/img/movie-photo-6-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '7',
      name: 'SupermodelMe Revolution (Tôi Là Siêu Mẫu Châu Á 2021)',
      category: 'Show',
      update: 'Cập nhật 4',
      imgMin: './assets/img/movie-photo-7-min.webp',
      imgMax: './assets/img/movie-photo-7-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
      id: '8',
      name: 'Mơ Gặp Sư Tử',
      category: 'Thành thị, Tình yêu',
      update: '30',
      imgMin: './assets/img/movie-photo-8-min.webp',
      imgMax: './assets/img/movie-photo-8-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '9',
      name: 'Bảng Xếp Hạng Quốc Vương',
      category: 'Hoạt hình',
      update: 'Cập nhật 4',
      imgMin: './assets/img/movie-photo-9-min.webp',
      imgMax: './assets/img/movie-photo-9-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '10',
      name: 'Boruto: Naruto hậu sinh khả úy',
      category: 'Thanh xuân, Tình yêu, Cổ trang',
      update: 'Cập nhật 222',
      imgMin: './assets/img/movie-photo-10-min.webp',
      imgMax: './assets/img/movie-photo-10-max.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '11',
      name: 'Xuân Thu Phong Thần',
      category: 'Hoạt hình',
      update: 'Cập nhật 21',
      imgMin: './assets/img/movie-photo-11-min.webp',
      imgMax: './assets/img/movie-photo-11-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '12',
      name: 'Trường Quân Đội Liệt Hỏa ( Học Viện Quân Sự Liệt Hỏa )',
      category: 'Thanh xuân, Tình yêu',
      update: '48',
      imgMin: './assets/img/movie-photo-12-min.webp',
      imgMax: './assets/img/movie-photo-12-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '13',
      name: 'Thanh Gươm Diệt Quỷ·Bản điện ảnh',
      category: '',
      update: '1',
      imgMin: './assets/img/movie-photo-13-min.webp',
      imgMax: './assets/img/movie-photo-13-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '14',
      name: 'Mouse Kẻ Săn Người',
      category: 'Tội phạm, Hành động',
      update: '20',
      imgMin: './assets/img/movie-photo-14-min.webp',
      imgMax: './assets/img/movie-photo-14-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
      id: '15',
      name: 'One Piece (Đảo Hải Tặc)',
      category: 'Hoạt hình',
      update: '997',
      imgMin: './assets/img/movie-photo-15-min.webp',
      imgMax: './assets/img/movie-photo-15-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '16',
      name: 'Hắc Quản Gia - Phần 1',
      category: 'Hoạt hình',
      update: '25',
      imgMin: './assets/img/movie-photo-16-min.webp',
      imgMax: './assets/img/movie-photo-16-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '17',
      name: 'Bảy Viên Ngọc Rồng Siêu Cấp',
      category: 'Hoạt hình',
      update: '131',
      imgMin: './assets/img/movie-photo-17-min.webp',
      imgMax: './assets/img/movie-photo-17-min.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '18',
      name: 'Thời Gian Lương Thần Mỹ Cảnh',
      category: 'Thần tượng, Thành thị, Tình yêu',
      update: '31',
      imgMin: './assets/img/movie-photo-18-min.webp',
      imgMax: './assets/img/movie-photo-18-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '19',
      name: 'Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận (Bản TV)',
      category: 'Hoạt hình',
      update: 'Cập nhật 3',
      imgMin: './assets/img/movie-photo-19-min.webp',
      imgMax: './assets/img/movie-photo-19-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '20',
      name: 'Bạn Trai Tôi Là Hồ Ly ( Cửu Vĩ Hồ Truyện )',
      category: 'Thần tượng, Thành thị, Tình yêu',
      update: '16',
      imgMin: './assets/img/movie-photo-20-min.webp',
      imgMax: './assets/img/movie-photo-20-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '21',
      name: 'Cẩm Y Chi Hạ',
      category: 'Tình yêu, Viễn tưởng',
      update: '55',
      imgMin: './assets/img/movie-photo-21-min.webp',
      imgMax: './assets/img/movie-photo-21-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
      id: '22',
      name: 'Cẩm Tâm Tựa Ngọc',
      category: 'Tình yêu, Cổ trang',
      update: '45',
      imgMin: './assets/img/movie-photo-22-min.webp',
      imgMax: './assets/img/movie-photo-22-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '23',
      name: 'Thanh Xuân Có Bạn Mùa 2',
      category: 'Show',
      update: '24',
      imgMin: './assets/img/movie-photo-23-min.webp',
      imgMax: './assets/img/movie-photo-23-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '24',
      name: 'Nghịch Thiên Kiếm Thần',
      category: '动态漫画',
      update: '78',
      imgMin: './assets/img/movie-photo-24-min.webp',
      imgMax: './assets/img/movie-photo-24-max.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '25',
      name: 'Hóa Ra Em Rất Yêu Anh',
      category: 'Thanh xuân, Thành thị, Tình yêu',
      update: '24',
      imgMin: './assets/img/movie-photo-25-min.webp',
      imgMax: './assets/img/movie-photo-25-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '26',
      name: 'JUJUTSU KAISEN',
      category: 'Hoạt hình',
      update: '24',
      imgMin: './assets/img/movie-photo-26-min.webp',
      imgMax: './assets/img/movie-photo-26-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '27',
      name: 'Như Ý Phương Phi',
      category: 'Thanh xuân, Tình yêu, Cổ trang',
      update: '44',
      imgMin: './assets/img/movie-photo-27-min.webp',
      imgMax: './assets/img/movie-photo-27-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '28',
      name: 'Chiến Cơ Cảnh Giới',
      category: 'Hoạt hình',
      update: 'Cập nhật 5',
      imgMin: './assets/img/movie-photo-28-min.webp',
      imgMax: './assets/img/movie-photo-28-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
      id: '29',
      name: 'Thủy Thủ Mặt Trăng Pha Lê',
      category: 'Hoạt hình',
      update: '39',
      imgMin: './assets/img/movie-photo-29-min.webp',
      imgMax: './assets/img/movie-photo-29-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '30',
      name: 'Vú Em Tiên Tôn Đi Ở Rể',
      category: '动态漫画',
      update: 'Cập nhật 71',
      imgMin: './assets/img/movie-photo-30-min.webp',
      imgMax: './assets/img/movie-photo-30-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '31',
      name: 'Thiên Vũ Kỷ',
      category: 'Thần tượng, Thành thị, Tình yêu',
      update: '12',
      imgMin: './assets/img/movie-photo-31-min.webp',
      imgMax: './assets/img/movie-photo-31-max.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '32',
      name: 'Ở Rể',
      category: 'Tình yêu, Cổ trang, Viễn tưởng',
      update: '35',
      imgMin: './assets/img/movie-photo-32-min.webp',
      imgMax: './assets/img/movie-photo-32-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '33',
      name: 'Bạn Cùng Phòng Của Tôi Là Gumiho',
      category: 'Giật gân, Viễn tưởng',
      update: 'Cập nhật 4',
      imgMin: './assets/img/movie-photo-33-min.webp',
      imgMax: './assets/img/movie-photo-33-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '34',
      name: 'Cửa Hàng Tiện Lợi Saet Byul',
      category: 'Tình yêu, Chiến tranh',
      update: '20',
      imgMin: './assets/img/movie-photo-34-min.webp',
      imgMax: './assets/img/movie-photo-34-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '35',
      name: 'Khuynh Thế Cẩm Lân Cốc Vũ Lai',
      category: 'Tình yêu, Cổ trang',
      update: '24',
      imgMin: './assets/img/movie-photo-35-min.webp',
      imgMax: './assets/img/movie-photo-35-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
      id: '36',
      name: 'Làm Trái Tim Em Mỉm Cười',
      category: 'Tội phạm, Phim hài',
      update: '20',
      imgMin: './assets/img/movie-photo-36-min.webp',
      imgMax: './assets/img/movie-photo-36-max.webp',
      video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
  },
  {
      id: '37',
      name: 'Chuyến Tàu Sinh Tử',
      category: 'Thanh xuân, Tình yêu, Cổ trang',
      update: '1',
      imgMin: './assets/img/movie-photo-37-min.webp',
      imgMax: './assets/img/movie-photo-37-max.webp',
      video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
  },
  {
      id: '38',
      name: 'Truyền Thuyết Về Ác Nhân',
      category: 'Thành thị, Tình yêu',
      update: '30',
      imgMin: './assets/img/movie-photo-38-min.webp',
      imgMax: './assets/img/movie-photo-38-max.webp',
      video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
  },
  {
      id: '39',
      name: 'Ác Quỷ Đối Đầu',
      category: 'Thần tượng, Thành thị, Tình yêu',
      update: '16',
      imgMin: './assets/img/movie-photo-39-min.webp',
      imgMax: './assets/img/movie-photo-39-max.webp',
      video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
  },
  {
      id: '40',
      name: 'Sứ Giả Của Chúa',
      category: 'Thanh xuân, Thành thị, Tình yêu',
      update: '24',
      imgMin: './assets/img/movie-photo-40-min.webp',
      imgMax: './assets/img/movie-photo-40-max.webp',
      video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
  },
  {
      id: '41',
      name: 'Nhiệm Vụ Khả Thi',
      category: 'Tình yêu, Chiến tranh',
      update: '20',
      imgMin: './assets/img/movie-photo-41-min.webp',
      imgMax: './assets/img/movie-photo-41-max.webp',
      video: './assets/img/Teaser_Penthouse3_ep14.mp4'
  },
  {
      id: '42',
      name: 'Nhân Đôi Tình Yêu',
      category: 'Tình yêu, Cổ trang',
      update: '24',
      imgMin: './assets/img/movie-photo-42-min.webp',
      imgMax: './assets/img/movie-photo-42-max.webp',
      video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
    id: '43',
    name: 'Lập trình viên đáng yêu',
    category: 'Tình yêu, Cổ trang',
    update: '24',
    imgMin: './assets/img/movie-photo-43-min.jpg',
    imgMax: './assets/img/movie-photo-43-max.jpg',
    video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
    id: '44',
    name: 'Phong Khởi Lạc Dương',
    category: 'Bí ẩn, Tình tiết',
    update: '36',
    imgMin: './assets/img/Phong Khởi Lạc Dương.jpg',
    imgMax: './assets/img/Phong Khởi Lạc Dương-img-max.jpg',
    video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
    id: '45',
    name: '【Thuyết minh】Xuân Lai Chẩm Tinh Hà',
    category: 'Lãng mạn, Tình tiết',
    update: '24',
    imgMin: './assets/img/【Thuyết minh】Xuân Lai Chẩm Tinh Hà-img-min.jpg',
    imgMax: './assets/img/【Thuyết minh】Xuân Lai Chẩm Tinh Hà-img-max.webp',
    video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
    id: '46',
    name: 'Khanh Khanh Ngã Tâm',
    category: 'Lãng mạn, Hư cấu',
    update: '24',
    imgMin: './assets/img/Khanh Khanh Ngã Tâm-img-min.jpg',
    imgMax: './assets/img/Khanh Khanh Ngã Tâm-img-max.jpg',
    video: './assets/img/Teaser_DanhVong.mp4'
  },
  {
    id: '47',
    name: 'Mộ Nam Chi',
    category: 'Lãng mạn, Tình tiết',
    update: '40',
    imgMin: './assets/img/Mộ-Nam-Chi.webp',
    imgMax: './assets/img/Mộ Nam Chi - slider.webp',
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
                              <span>${movie.update} tập</span>
                          </div>
                      </div>
                      <div class="carousel_img-max">
                          <img src="${movie.imgMax}" alt="">
                          <div class="carousel_img-max-overlay carousel_img-overlay">
                              <span><span>Thể loại:</span> ${movie.category}</span>
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
                              <p class="carousel_rank-update">${movie.update} tập</p>
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
                                      <span>Đạo diễn: </span>${movie.director}
                                  </p>
                                  <p>
                                      <span>Diễn viên: </span>${movie.actor}
                                  </p>
                                  <p>
                                      <span>Miêu tả: </span>${movie.decs}
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
      name: 'Khang Khang Ngã Tâm',
      update: '24',
      img: './assets/img/Khanh Khanh Ngã Tâm-img-max.jpg',
      rank: './assets/img/rank-number1.png'
  },
  {
      name: 'Bí Mật Nơi Góc Tối',
      update: '24',
      img: './assets/img/rank-img1.jpg',
      rank: './assets/img/rank-number2.png'
  },
  {
      name: 'Phong Khởi Lạc Dương',
      update: '39',
      img: './assets/img/Phong Khởi Lạc Dương-img-max.jpg',
      rank: './assets/img/rank-number3.png'
  },
  {
      name: '【Thuyết minh】Xuân Lai Chẩm Tinh Hà',
      update: '24',
      img: './assets/img/【Thuyết minh】Xuân Lai Chẩm Tinh Hà-img-max.webp',
      rank: './assets/img/rank-number4.png'
  },
  {
      name: 'Hạ Tiên Sinh Lưu Luyến Không Quên (Nỗi Vương Vấn Của Hạ Tiên Sinh)',
      update: '24',
      img: './assets/img/rank-img3.jpg',
      rank: './assets/img/rank-number5.png'
  },
  {
      name: 'Bạn Gái Lầu Dưới Xin Hãy Ký Nhận',
      update: '36',
      img: './assets/img/rank-img4.jpg',
      rank: './assets/img/rank-number6.png'
  },
  {
      name: '【Thuyết minh】Một Đời Một Kiếp (Nhất Sinh Nhất Thế)',
      update: '24',
      img: './assets/img/rank-img5.jpg',
      rank: './assets/img/rank-number7.png'
  },
  {
      name: 'Trường An như cố',
      update: '24',
      img: './assets/img/rank-img6.jpg',
      rank: './assets/img/rank-number8.png'
  },
  {
      name: 'Bác sĩ xứ lạ',
      update: '24',
      img: './assets/img/rank-img7.jpg',
      rank: './assets/img/rank-number9.png'
  },
  {
      name: 'Nửa Là Đường Mật Nửa Là Đau Thương',
      update: '24',
      img: './assets/img/rank-img8.jpg',
      rank: './assets/img/rank-number10.png'
  },
  {
      name: 'Đối tác đáng ngờ',
      update: '24',
      img: './assets/img/rank-img9.jpg',
      rank: './assets/img/rank-number11.png'
  },
  {
      name: 'Học viện quân sự Liệt Hỏa',
      update: '24',
      img: './assets/img/rank-img10.jpg',
      rank: './assets/img/rank-number12.png'
  },
  {
      name: 'Bí Mật Nơi Góc Tối',
      update: '24',
      img: './assets/img/rank-img11.jpg',
      rank: './assets/img/rank-number11.png'
  },
  {
      name: 'Bí Mật Nơi Góc Tối',
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
        day: 'Thứ Ba',
        name: 'Gia Nam Truyện',
        img: './assets/img/poster7.jpg',
        hagtag: ['Tiếng Hàn', 'Thanh xuân'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
    },
    {
        date: 'Xin hãy đón đợi!',
        day: '&nbsp',
        name: 'Chỉ Là Quan Hệ Hôn Nhân',
        img: './assets/img/poster8.jpg',
        hagtag: ['Tiếng Hàn', 'Thanh xuân'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
    },
    {
        date: 'Xin hãy đón đợi!',
        day: '&nbsp',
        name: 'Đãi Vàng',
        img: './assets/img/poster9.jpg',
        hagtag: ['Tiếng Hàn', 'Thanh xuân'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
    },
    {
        date: 'Xin hãy đón đợi!',
        day: '&nbsp',
        name: 'Ai Là Hung Thủ',
        img: './assets/img/poster10.jpg',
        hagtag: ['Tiếng Hàn', 'Thanh xuân'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
    },
    {
        date: '11-9',
        day: 'Thứ Ba',
        name: 'Jo Yi Và Ám Hành Ngự Xử',
        img: './assets/img/poster5.jpg',
        hagtag: ['Tiếng Hàn', 'Thanh xuân'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
    },
    {
        date: '11-11',
        day: 'Thứ Năm',
        name: 'Góc khuất học đường',
        img: './assets/img/poster6.jpg',
        hagtag: ['Tiếng Hàn', 'Thanh xuân'],
        director: 'Ahn Ji-Sook',
        actor: 'Lee Jun-Young',
        decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
    },
  {
      date: '11-7',
      day: 'Chủ Nhật',
      name: 'Anh Là Hiệp Sĩ Bóng Đêm Của Em',
      img: './assets/img/poster1.jpg',
      hagtag: ['Tiếng Hàn', 'Thanh xuân'],
      director: 'Ahn Ji-Sook',
      actor: 'Lee Jun-Young',
      decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
  },
  {
      date: '11-8',
      day: 'Thứ Hai',
      name: 'Đương Gia Chủ Mẫu',
      img: './assets/img/poster2.jpg',
      hagtag: ['Tiếng Phổ Thông', 'Cận Đại'],
      director: 'Yu Zheng',
      actor: 'Angel, Trương Tuệ Văn',
      decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
  },
  {
      date: '11-8',
      day: 'Thứ Hai',
      name: 'Thần tượng: Cuộc đảo chính',
      img: './assets/img/poster3.jpg',
      hagtag: ['Tiếng Hàn', 'Thanh xuân'],
      director: 'Ahn Ji-Sook',
      actor: 'Lee Jun-Young',
      decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
  },
  {
      date: '11-9',
      day: 'Thứ Ba',
      name: 'Love At Night',
      img: './assets/img/poster4.jpg',
      hagtag: ['Tiếng Hàn', 'Thanh xuân'],
      director: 'Ahn Ji-Sook',
      actor: 'Lee Jun-Young',
      decs: 'Bộ phim Hàn Quốc “Em Sẽ Trở Thành Ban Đêm Của Anh” kể về câu chuyện ngọt ngào lại hồi hộp giữa nữ bác sĩ và năm thành viên ban nhạc.'
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
