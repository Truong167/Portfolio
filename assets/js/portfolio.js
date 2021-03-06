const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const middleItem = $$('.middle-item')
const middleItem_Active = $('.middle-item.active')
const panes = $$('.tab-pane')
const line = $('.line')
const audio = $('.audio')
const music = $('.music')
const musicIcon = $$('.music-icon')
var birthday = '16 July 2023'
const daysEl = $('#days')
const hoursEl = $('#hours')
const minsEl = $('#mins')
const secEl = $('#sec')
const icon = $('.icon-theme')
const columns = $$('.column')
const btns = $$('.btn-dot')
const headerDot = $('.header-dot')
const talk = $('.talk')
const modal = $('.modal')
const iconClose = $('.icon-close')
const projectIcon = $('.project')
const contactImg = $$('.contact-right img')
const mySlides = $$('.mySlides')
const dots = $$('.dot')
const wish = $('.wish')
const countdownCon = $('.countdown-container')
const topIcon = $('.top')
const footer = $('.footer')
const footerHeader = $('.footer-header')
const menuIcon = $('.nav-right-icon')
const overlay = $('.overlay')
const mobileMenu = $('.nav-mobile')
const mobileItem = $$('.mobile-item')
const birtCou = $('.birthday-countdown')
const video = $('.video')



line.style.left = middleItem_Active.offsetLeft + 'px'
line.style.width = middleItem_Active.offsetWidth + 'px'

const app = {
    InitMusic: function(){
        audio.play()
        audio.loop = true
        audio.volume = 0.17
    },
    HandleEvents: function(){
        let i = 0
        var isStop = true
        var isLap
        
        music.onclick = function(){
            if(isStop){
                audio.play()
            } else {
                audio.pause()
            }
        }

        audio.onplay = function(){
            isStop = false
            music.classList.add('playing')
        }

        audio.onpause = function(){
            isStop = true
            music.classList.remove('playing')
        }

        
        middleItem.forEach((item, index) => {
            const pane = panes[index]
            item.onclick = function(){
                $('.middle-item.active').classList.remove('active')
                $('.tab-pane.active').classList.remove('active')

                line.style.left = item.offsetLeft + 'px'
                line.style.width = item.offsetWidth + 'px'
                
                pane.classList.add('active')
                item.classList.add('active')
            }
        });

        mobileItem.forEach((item, index) => {
            const pane = panes[index]
            item.onclick = function(){
                $('.mobile-item.active').classList.remove('active')
                $('.tab-pane.active').classList.remove('active')

                line.style.left = item.offsetLeft + 'px'
                line.style.width = item.offsetWidth + 'px'
                
                pane.classList.add('active')
                item.classList.add('active')
                overlay.style.display = 'none'
                mobileMenu.style.transform = 'translateX(100%)'
            }
        });

        iconClose.onclick = function(){
            modal.classList.add('none')
        }, 
        projectIcon.onclick = function(){
            modal.classList.remove('none')
        },

        menuIcon.onclick = function(){
            overlay.style.display = 'block'
            mobileMenu.style.transform = 'translateX(0)'
        }

        overlay.onclick = function(){
            overlay.style.display = 'none'
            mobileMenu.style.transform = 'translateX(100%)'
        }

        setInterval(function(){
            if(i == 0){
                contactImg[i].className = 'fade-in-image'
            } else if (i == contactImg.length) {
                contactImg[i-1].className = 'fade-out-image'
                contactImg[0].className = 'fade-in-image'
                i = 0
            } else {
                contactImg[i-1].className = 'fade-out-image'
                contactImg[i].className = 'fade-in-image'
            }
            i++
        }, 2500)

        window.onscroll = function(){
           if(document.documentElement.scrollTop > 300){
                topIcon.style.display = 'block'
           }
           else {
                topIcon.style.display = 'none'
           }
        }

        topIcon.onclick = function(){
            // document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }

    },
    CreateImageCarousel: function(images){
        let i = 0;

        setInterval(function(){ 

            if(i == 0) {
                images[i].className = "fade-in-image";
            } else if(i == images.length ) {
                images[i - 1].className = "fade-out-image";
                images[0].className = "fade-in-image";
                i = 0;
            } else {
                images[i - 1].className = "fade-out-image";
                images[i].className = "fade-in-image";
            }

            i++;
        }, 2500);
    },
    ChangeTheme: function(){
        icon.onclick = function(){
            document.body.classList.toggle("light-theme")
            if(document.body.classList.contains("light-theme")){
                icon.classList.add('fa-moon')
                icon.classList.remove('fa-sun')
            } else {
                icon.classList.add('fa-sun')
                icon.classList.remove('fa-moon')
            }
        }
    },

    ChangeDot: function(){
        btns.forEach((item, index) => {
            var i
            const btn = btns[index]
            item.onclick = function(){
                $('.btn-dot.active').classList.remove('active')
                console.log([item])
                if(index == 0){
                    for(i = 0; i < columns.length; i++){
                        columns[i].style.flex = "25%"
                    }
                } else {
                    for(i = 0; i < columns.length; i++){
                        columns[i].style.flex = "50%"
                    }
                }
                btn.classList.add('active')
            }
        })
    },

    Countdown: function(){
            const birthdayDate = new Date(birthday)
            const currentDate = new Date()
            const newDate = currentDate.getDate()
            let days, hours, mins, seconds

            if(newDate - birthdayDate.getDate() >= 1  && currentDate.getMonth() == birthdayDate.getMonth() && birthdayDate.getFullYear() == currentDate.getFullYear()){
                wish.classList.add('none')
                countdownCon.classList.remove('none')
                birthdayDate.setFullYear(birthdayDate.getFullYear() + 1)
                const totalSeconds = (birthdayDate - currentDate) / 1000
                days = Math.floor(totalSeconds / 3600 / 24)
                hours = Math.floor(totalSeconds / 3600) % 24
                mins = Math.floor(totalSeconds / 60) % 60
                seconds = Math.floor(totalSeconds % 60)
            } else if (newDate - birthdayDate.getDate() == 0) {
                wish.classList.remove('none')
                countdownCon.classList.add('none')
                video.style.display = 'block'
                footerHeader.style.display = 'none'
            }
            else {
                wish.classList.add('none')
                countdownCon.classList.remove('none')
                const totalSeconds = (birthdayDate - currentDate) / 1000
                days = Math.floor(totalSeconds / 3600 / 24)
                hours = Math.floor(totalSeconds / 3600) % 24
                mins = Math.floor(totalSeconds / 60) % 60
                seconds = Math.floor(totalSeconds % 60)
            }
                daysEl.innerHTML = formatTime(days)
                hoursEl.innerHTML = formatTime(hours)
                minsEl.innerHTML = formatTime(mins)
                secEl.innerHTML = formatTime(seconds)

        function formatTime(time){
            return time < 10 ? (`0${time}`) : time
        }
    },
    start: function(){
        this.InitMusic()
        this.HandleEvents()
        this.ChangeTheme()
        this.ChangeDot()
        this.CreateImageCarousel(contactImg)
        setInterval(this.Countdown, 1000)
    }

}

var i = 0;
var p = `D??? ??n n??y ???????c l??n k??? ho???ch v??o ng??y 14/3 v?? b???t ?????u th???c hi???n v??o ng??y 5/4 v?? ho??n th??nh v??o ng??y 9/7.
Trong qu?? tr??nh th???c hi???n c?? 1 v??i chuy???n kh??ng theo k??? ho???ch ban ?????u ...... Nh??ng m?? k??? c??? l??m th??i v?? Panh lu??n l?? ngu???n c???m h???ng c???a t??i m??.
C???m ??n Panh r???t nhi???u v?? ???? gi??p t??i r???t nhi???u trong th???i gian qua. 
Hy v???ng Panh s??? xem trang web n??y v?? vui v???i n??. N???u Panh xem n?? v??o ng??y 16/7 th?? h??y l?????t xu???ng cu???i trang ????? xem m??n qu?? c???a t??i nh??. C???m ??n Panh r???t nhi???u`
var speed = 50
function typeWriter(){
    if(i < p.length){
    talk.innerHTML += p.charAt(i)
    i++
    setTimeout(typeWriter, speed)
    }
    
}
typeWriter()

var t = 'H??y quay l???i v??o sinh nh???t c???a Panh nha. M??n qu?? si??u ?????c bi???t s??? xu???t hi???n ??? ????y !!!!'
var index = 0
function auto(){
    footerHeader.innerHTML = t.slice(0, index)
    index++
    if(index > t.length){
        index = 0
    }
}

setInterval(auto, 110)

app.start()

