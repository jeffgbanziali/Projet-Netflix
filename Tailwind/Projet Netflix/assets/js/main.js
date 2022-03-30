   //scroll bar(type carousel)

   // right event
   function rightScroll(carousel, rightArrow) {

       const scroll = document.querySelector(carousel);

       const right = document.querySelector(rightArrow);

       right.addEventListener("click", () => {
           scroll.scrollLeft += scroll.offsetWidth;
       })

   }

   // left event
   function leftScroll(carousel, leftArrow) {

       const scroll = document.querySelector(carousel);

       const left = document.querySelector(leftArrow);

       left.addEventListener("click", () => {
           scroll.scrollLeft -= scroll.offsetWidth;
       })

   };

   //scroll bar(type carousel)


   // Nav bar scroll 

   window.onscroll = function() {
       if (document.documentElement.scrollTop > 80) {
           document.getElementById("navbar").style.background = "black";

       } else {
           document.getElementById("navbar").style.background = "none";

       }
   };
   // Nav bar scroll

   // functions to change images after updates


   function randomImg() {

       for (let i = 1; i < 30; i++) {

           var internationalRandom = Math.floor(Math.random() * internationalImg.length);
           document.getElementById("international" + i.toString()).src = internationalImg[internationalRandom];

           var animeRandom = Math.floor(Math.random() * animeImg.length);
           document.getElementById("anime" + i.toString()).src = animeImg[animeRandom];

           var comedyRandom = Math.floor(Math.random() * comedyImg.length);
           document.getElementById("comedy" + i.toString()).src = comedyImg[comedyRandom];

           var animeRandom = Math.floor(Math.random() * animeImg.length);
           document.getElementById("anime" + i.toString()).src = animeImg[animeRandom];
       }
   }

   var internationalImg = new Array(
       "assets/img/horror/horror1.jpg",
       "assets/img/horror/horror2.jpg",
       "assets/img/horror/horror3.jpg",
       "assets/img/horror/horror4.jpg",
       "assets/img/horror/horror5.jpg",
       "assets/img/horror/horror6.jpg",
       "assets/img/horror/horror7.jpg",
       "assets/img/horror/horror8.jpg",
       "assets/img/horror/horror9.jpg",
       "assets/img/horror/horror10.jpg",
       "assets/img/horror/horror11.jpg",
       "assets/img/horror/horror12.jpg",
       "assets/img/horror/horror12.jpg",
       "assets/img/horror/horror13.jpg",
       "assets/img/horror/horror14.jpg",
       "assets/img/horror/horror15.jpg",

   );
   var animeImg = new Array(
       "assets/img/anime/anim1.jpg",
       "assets/img/anime/anim2.jpg",
       "assets/img/anime/anim3.jpg",
       "assets/img/anime/anim4.webp",
       "assets/img/anime/anim5.jpg",
       "assets/img/anime/anim6.png",
       "assets/img/anime/anim7.png",
       "assets/img/anime/anim8.png",
       "assets/img/anime/anim9.png",
       "assets/img/anime/anim10.png",
       "assets/img/anime/anim11.jpg",
       "assets/img/anime/anim12.jpg",
       "assets/img/anime/anim13.jpg",
       "assets/img/anime/anim14.jpg",
       "assets/img/anime/anim15.png",


   );
   window.onload = randomImg;






   // functions to change images after updates


   // video background

   function play(video) {

       document.querySelector(video).classList.add("z-[2]")

       document.querySelector(video).play()

   }

   function pause(video) {

       document.querySelector(video).pause()

       document.querySelector(video).classList.remove("z-[2]")

   }

   function toggleMuted(elm) {

       let video = document.querySelector(elm)

       video.muted = !video.muted;

   }

   let image = document.querySelector('movie-container');

   let video = document.querySelector('movie-hover');

   image.onmouseover = () => video.play();

   image.onmouseout = () => video.pause();

   // video background







   /*-----------------------------------------------JS link------------------------------------------------>*/
