var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)




const namChiMoMovie = [
    {
        id: '1',
        img: './assets/img/Mộ-Nam-Chi-Tập-1.webp',
        name: 'Nam Chi Mộ Tập 1'
    },
    {
        id: '2',
        img: './assets/img/Mộ-Nam-Chi-Tập-2.webp',
        name: 'Nam Chi Mộ Tập 2'
    },
    {
        id: '3',
        img: './assets/img/Mộ-Nam-Chi-Tập-3.webp',
        name: 'Nam Chi Mộ Tập 3'
    },
    {
        id: '4',
        img: './assets/img/Mộ-Nam-Chi-Tập-4.webp',
        name: 'Nam Chi Mộ Tập 4'
    },
    {
        id: '5',
        img: './assets/img/Mộ-Nam-Chi-Tập-5.webp',
        name: 'Nam Chi Mộ Tập 5'
    },
    {
        id: '6',
        img: './assets/img/Mộ-Nam-Chi-Tập-6.webp',
        name: 'Nam Chi Mộ Tập 6'
    },
    {
        id: '7',
        img: './assets/img/Mộ-Nam-Chi-Tập-7.webp',
        name: 'Nam Chi Mộ Tập 7'
    },
    {
        id: '8',
        img: './assets/img/Mộ-Nam-Chi-Tập-8.webp',
        name: 'Nam Chi Mộ Tập 8'
    },
    {
        id: '9',
        img: './assets/img/Mộ-Nam-Chi-Tập-9.webp',
        name: 'Nam Chi Mộ Tập 9'
    },
    {
        id: '10',
        img: './assets/img/Mộ-Nam-Chi-Tập-10.webp',
        name: 'Nam Chi Mộ Tập 10'
    },
    {
        id: '11',
        img: './assets/img/Mộ-Nam-Chi-Tập-11.webp',
        name: 'Nam Chi Mộ Tập 11'
    },
    {
        id: '12',
        img: './assets/img/Mộ-Nam-Chi-Tập-12.webp',
        name: 'Nam Chi Mộ Tập 12'
    },
    {
        id: '13',
        img: './assets/img/Mộ-Nam-Chi-Tập-13.webp',
        name: 'Nam Chi Mộ Tập 13'
    },
    {
        id: '14',
        img: './assets/img/Mộ-Nam-Chi-Tập-14.webp',
        name: 'Nam Chi Mộ Tập 14'
    },
    {
        id: '15',
        img: './assets/img/Mộ-Nam-Chi-Tập-15.webp',
        name: 'Nam Chi Mộ Tập 15'
    },
    {
        id: '16',
        img: './assets/img/Mộ-Nam-Chi-Tập-16.webp',
        name: 'Nam Chi Mộ Tập 16'
    },
    {
        id: '17',
        img: './assets/img/Mộ-Nam-Chi-Tập-17.webp',
        name: 'Nam Chi Mộ Tập 17'
    },
    {
        id: '18',
        img: './assets/img/Mộ-Nam-Chi-Tập-18.webp',
        name: 'Nam Chi Mộ Tập 18'
    },
    {
        id: '19',
        img: './assets/img/Mộ-Nam-Chi-Tập-19.webp',
        name: 'Nam Chi Mộ Tập 19'
    },
    {
        id: '20',
        img: './assets/img/Mộ-Nam-Chi-Tập-20.webp',
        name: 'Nam Chi Mộ Tập 20'
    },
    {
        id: '21',
        img: './assets/img/Mộ-Nam-Chi-Tập-21.webp',
        name: 'Nam Chi Mộ Tập 21'
    },
    {
        id: '22',
        img: './assets/img/Mộ-Nam-Chi-Tập-22.webp',
        name: 'Nam Chi Mộ Tập 22'
    },
    {
        id: '23',
        img: './assets/img/Mộ-Nam-Chi-Tập-23.webp',
        name: 'Nam Chi Mộ Tập 23'
    },
    {
        id: '24',
        img: './assets/img/Mộ-Nam-Chi-Tập-24.webp',
        name: 'Nam Chi Mộ Tập 24'
    }
]

function listMovieUpDate(options) {
    const carouselMove = $(options.carouselMoveSelector)
    function render() {
        const htmls = options.movies.map((movie, index) => {
            return `
            <li id="${movie.id}" class="wow fadeInLeft carousel-item carousel_item-ncm col l-3 m-4 c-6">
                <a href="./videodemo.html" class="carousel_link-ncm">
                    <div class="carousel_rank-img img-ncm">
                        <img src="${movie.img}" alt="">
                        <div class="carousel_rank-overlay">
                            <div class="btns-play-and-add">
                                <span class="btn-play"><i class="fas fa-play"></i></span>
                            </div>
                         </div>
                    </div>
                    <div class="carousel_rank-content carousel_rank-content-video">
                        <p class="carousel_rank-title">${movie.name}</p>
                    </div>
                </a>
            </li>
            `
        })
        carouselMove.innerHTML = htmls.join('')
    }
    render()

}

listMovieUpDate({
    movies: [   
        namChiMoMovie[0],
        namChiMoMovie[1],
        namChiMoMovie[2],
        namChiMoMovie[3],
        namChiMoMovie[4],
        namChiMoMovie[5],
        namChiMoMovie[6],
        namChiMoMovie[7],
        namChiMoMovie[8],
        namChiMoMovie[9],
        namChiMoMovie[10],
        namChiMoMovie[11],
        namChiMoMovie[12],
        namChiMoMovie[13],
        namChiMoMovie[14],
        namChiMoMovie[15],
        namChiMoMovie[16],
        namChiMoMovie[17],
        namChiMoMovie[18],
        namChiMoMovie[19],
        namChiMoMovie[20],
        namChiMoMovie[21],
        namChiMoMovie[22],
        namChiMoMovie[23],
       
    ],
    carouselSelector : '#list_movie-1',
    carouselMoveSelector : '#list_movie-1 .carousel_move-ncm',
    carouselItemsSelector: '#list_movie-1 .carousel-item'
})



const info_star = [
    {
        id: '1',
        imgInfo: './assets/img/Cúc-Tịnh-Y-info.jpg',
        nameStar: 'Cúc Tịnh Y',
        vocation: 'Diễn viên | Ca sĩ',
        RelatedMovies: './assets/img/Như-Ý-Phương-Phi.webp',
        nameRelatedMovies: 'Như ý phương phi',
        RelatedMovies2: './assets/img/Tân-Bạch-Nương-Tử-Truyền-Kỳ.webp',
        nameRelatedMovies2: 'Tân bạch nương tử truyền kỳ',
    },
    {
        id: '2',
        imgInfo: './assets/img/Tăng-Thuấn-Hy-info.jpg',
        nameStar: 'Tăng Thuấn Hy',
        vocation: 'Diễn viên | Ca sĩ',
        RelatedMovies: './assets/img/Mộ-Nam-Chi.webp',
        nameRelatedMovies: 'Nam chi mộ',
        RelatedMovies2: './assets/img/Chung-Cực-Bút-Ký.webp',
        nameRelatedMovies2: 'Chung cư bút ký',
    },
    {
        id: '3',
        imgInfo: './assets/img/Marius-info.jpg',
        nameStar: 'Marius',
        vocation: 'Diễn viên',
        RelatedMovies: './assets/img/Mộ-Nam-Chi.webp',
        nameRelatedMovies: 'Nam chi mộ',
        RelatedMovies2: './assets/img/Đại-Chúa-Tế.webp',
        nameRelatedMovies2: 'Đại chúa tế',
    },
    {
        id: '4',
        imgInfo: './assets/img/Eating,Wang Yi Ting.jpg',
        nameStar: 'Eating,Wang Yi Ting',
        vocation: 'Diễn viên',
        RelatedMovies: './assets/img/Mộ-Nam-Chi.webp',
        nameRelatedMovies: 'Nam chi mộ',
        RelatedMovies2: './assets/img/Đại-Chúa-Tế.webp',
        nameRelatedMovies2: 'Đại chúa tế',
    },

    {
        id: '5',
        imgInfo: './assets/img/Li Yun Rui-info.jpg',
        nameStar: 'Li Yun Rui',
        vocation: 'Diễn viên',
        RelatedMovies: './assets/img/Mộ-Nam-Chi.webp',
        nameRelatedMovies: 'Nam chi mộ',
        RelatedMovies2: './assets/img/MY IDOL Season 2.webp',
        nameRelatedMovies2: 'MY IDOL Season',
    },
    {
        id: '6',
        imgInfo: './assets/img/Li Yun Rui-info.jpg',
        nameStar: 'Zhi Lei',
        vocation: 'Đạo diễn',
        RelatedMovies: './assets/img/Mộ-Nam-Chi.webp',
        nameRelatedMovies: 'Mộ Nam Chi',
        RelatedMovies2: './assets/img/Tân-Bạch-Nương-Tử-Truyền-Kỳ.webp',
        nameRelatedMovies2: 'Tân bạch nương tử truyền kỳ',
    },

]



function listInfo(options) {
    const carouselMove = $(options.carouselMoveSelector)
    function render() {
        const htmls = options.movies.map((movie, index) => {
            return `
            <div id="${movie.id}" class="wow fadeInRight container_wrapper-star-item col l-4 m-6 c-12">
                <div class="container_item-box">
                    <a href="#">
                        <div class="connect_top-info">
                            <div class="connect_img-box">
                                <img src="${movie.imgInfo}" alt="">
                            </div>
                            <div class="connect-info">
                                <div class="connect-name">
                                    <span>${movie.nameStar}</span>
                                </div>
                                <div class="connect-opera">
                                    <div class="connect-vocation">
                                        <span class="connect_vocation-item">${movie.vocation}</span>
                                    </div>

                                    <div class="connect-more">
                                        <div class="connect_more-icon">
                                            Khác
                                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div class="connect-content">
                        <div class="connect_content-list row">
                            <div class="connect_content-item col l-6">
                                <div class="connect_content-img">
                                    <img src="${movie.RelatedMovies}" alt="">
                                    <div class="connect_content-overlay">
                                        <div class="btns-play-and-add">
                                            <span class="btn-play"><i class="fas fa-play"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="connect_content-title">
                                    <p>${movie.nameRelatedMovies}</p>
                                </div>
                            </div>
                            <div class="connect_content-item col l-6">
                                <div class="connect_content-img">
                                    <img src="${movie.RelatedMovies2}" alt="">
                                    <div class="connect_content-overlay">
                                        <div class="btns-play-and-add">
                                            <span class="btn-play"><i class="fas fa-play"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="connect_content-title">
                                    <p>${movie.nameRelatedMovies2}</p>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        carouselMove.innerHTML = htmls.join('')
    }
    render()

}

listInfo ({
    movies: [
        info_star[0],
        info_star[1],
        info_star[2],
        info_star[3],
        info_star[4],
        info_star[5],
    ],
    carouselSelector : '#list_info-1',
    carouselMoveSelector : '#list_info-1 .container_wrapper-star--list',
    carouselItemsSelector: '#list_info-1 .container_wrapper-star-item'
})


