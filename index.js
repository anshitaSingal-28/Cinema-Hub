let url = (Location = window.location.href);
// console.log(url);
// http://127.0.0.1:5500/book.html?Jawan
let url_segment = (any = url.split("?"));
// console.log(url_segment[1]);
let globalSelectedSeats = [];

let play_btn = document.getElementById("play");
let video = document.getElementById("video");

play_btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    video.style.display = "unset";
    play_btn.classList.remove("bi-play-fill");
    play_btn.classList.add("bi-pause");
  } else {
    video.pause();
    video.style.display = "none";
    play_btn.classList.remove("bi-pause");
    play_btn.classList.add("bi-play-fill");
  }
});

video.addEventListener("ended", () => {
  video.play();
});

let date = new Date();
let min_date = date.getDate();
let min_time = date.getHours();
let min_month = date.getMonth() + 1;
let min_year = date.getFullYear();
console.log(min_month);
console.log(min_date);
console.log(min_year);

// console.log(date.getHours());

Array.from(document.getElementsByClassName("date_point")).forEach((el) => {
  if (el.innerText == min_date) {
    el.classList.add("h6_active");
  }
});

let pvr = [
  {
    pvr: "PVR Cinema Hub",
    movie: "Jawan",
    moviename: "Jawan",
    loc: "Rohini Sector-14 , New Delhi",
    audi: 1,
    type: "2D",
    showtime: "10:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [5, 6, 15, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 16, 15, 23, 22],
    m: [1, 2, 11, 12, 19],
    p: [8, 5],
    q: [],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date,
    img: "img/jawan.jpg",
    vid: "video/Jawan Official Trailer-(HDvideo9).mp4",
    background: "img/bg.png",
    directed: "Atlee Kumar",
    star: "Shah Rukh Khan , Nayanthara , Vijay Sethupathi , Deepika Padukone ",
    edit: "Ruben",
    music: "	Anirudh Ravichander",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Jawan",
    moviename: "Jawan",
    loc: "Rohini Sector-14 , New Delhi",
    audi: 1,
    type: "2D",
    showtime: "10:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date + 1,
    img: "img/jawan.jpg",
    vid: "video/Jawan Official Trailer-(HDvideo9).mp4",
    background: "img/bg.png",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Gadar2",
    moviename: "Gadar2",
    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "2D",
    showtime: "12:30",

    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date,
    img: "img/Gadar2.jpg",
    vid: "video/Gadar2 Official Trailer - 11th August - Sunny Deol - Ameesha Patel - Anil Sharma - Zee Studios.mp4",
    background: "img/gadar_bg.jpg",
    directed: "Anil Sharma",
    star: "Sunny Deol , Ameesha Patel , Utkarsh Sharma , Gaurav Chopra , Manish Wadhwa , Simrat Kaur",
    edit: "Ashfaque Makrani , Sanjay Sankla",
    music: "Monty Sharma",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Gadar2",
    moviename: "Gadar2",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "2D",
    showtime: "12:30",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date + 1,
    img: "img/image.png",
    vid: "video/Gadar2 Official Trailer - 11th August - Sunny Deol - Ameesha Patel - Anil Sharma - Zee Studios.mp4",
    background: "img/gadar_bg.jpg",
    directed: "Anil Sharma",
    star: "Sunny Deol , Ameesha Patel , Utkarsh Sharma , Gaurav Chopra , Manish Wadhwa , Simrat Kaur",
    edit: "Ashfaque Makrani , Sanjay Sankla",
    music: "Monty Sharma",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Stree2",
    moviename: "Stree2",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "2D",
    showtime: "14:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
    h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
    b: [1, 3, 13, 15, 22],
    g: [3, 9, 10, 20, 24],
    a: [7, 12, 9, 21, 20],
    m: [6, 8, 11, 12, 19],
    p: [8, 5, 12, 13, 14],
    q: [],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date,
    img: "img/stree2.jpg",
    vid: "video/video-stree.mp4",
    background: "img/stree.bg.jpg",
    directed: "	Amar Kaushik",
    star: "	Rajkummar Rao , Shraddha Kapoor , Pankaj Tripathi , Abhishek Banerjee , Aparshakti Khurana",
    edit: "Hemanti Sarkar",
    music: "Sachin–Jigar",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Stree2",
    moviename: "Stree2",
    showtime: "14:00",
    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "2D",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date + 1,
    img: "img/stree2.jpg",
    vid: "video/video-stree.mp4",
    background: "img/stree.bg.jpg",
    directed: "	Amar Kaushik",
    star: "	Rajkummar Rao , Shraddha Kapoor , Pankaj Tripathi , Abhishek Banerjee , Aparshakti Khurana",
    edit: "Hemanti Sarkar",
    music: "Sachin–Jigar",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Vedaa",
    moviename: "Vedaa",
    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "3D",
    showtime: "18:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
    h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
    b: [1, 3, 13, 15, 22],
    g: [3, 9, 10, 20, 24],
    a: [7, 12, 9, 21, 20],
    m: [6, 8, 11, 12, 19],
    p: [8, 5, 12, 13, 14],
    q: [],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date,
    img: "img/vedaa-1.jpg",
    vid: "video/video-veda.mp4",
    background: "img/veda-bg.avif",
    directed: "Nikkhil Advani",
    star: "	 John Abraham, Sharvari , Abhishek Banerjee and Ashish Vidyarthi.",
    edit: "	Maahir Zaveri",
    music: "Amaal Mallik , Manan Bhardwaj , Yuva , Raghav - Arjun",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Vedaa",
    moviename: "Vedaa",
    showtime: "18:00",
    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "3D",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date + 1,
    img: "img/vedaa-1.jpg",
    vid: "video/video-veda.mp4",
    background: "img/veda-bg.avif",
    directed: "Nikkhil Advani",
    star: "	 John Abraham, Sharvari , Abhishek Banerjee and Ashish Vidyarthi.",
    edit: "	Maahir Zaveri",
    music: "Amaal Mallik , Manan Bhardwaj , Yuva , Raghav - Arjun",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Khel-Khel-Mein",
    moviename: "Khel Khel Mein",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "3D",
    showtime: "20:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
    h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
    b: [1, 3, 13, 15, 22],
    g: [3, 9, 10, 20, 24],
    a: [7, 12, 9, 21, 20],
    m: [6, 8, 11, 12, 19],
    p: [8, 5, 12, 13, 14],
    q: [],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date,
    img: "img/khel.webp",
    vid: "video/khel.mp4",
    background: "img/khel-bg.jpg",
    directed: "	Mudassar Aziz",
    star: "	  Akshay Kumar, Fardeen Khan, Vaani Kapoor, Ammy Virk, Taapsee Pannu, Aditya Seal and Pragya Jaiswal.",
    edit: "		Ninad Khanolkar",
    music: "Tanishk Bagchi , Rochak Kohli and Guru Randhawa",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Khel-Khel-Mein",
    moviename: "Khel Khel Mein",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "3D",
    showtime: "20:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date + 1,
    img: "img/khel.webp",
    vid: "video/khel.mp4",
    background: "img/khel-bg.jpg",
    directed: "	Mudassar Aziz",
    star: "	  Akshay Kumar, Fardeen Khan, Vaani Kapoor, Ammy Virk, Taapsee Pannu, Aditya Seal and Pragya Jaiswal.",
    edit: "		Ninad Khanolkar",
    music: "Tanishk Bagchi , Rochak Kohli and Guru Randhawa",
  },

  {
    pvr: "PVR Cinema Hub",
    movie: "Bad-Newz",
    moviename: "Bad Newz",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "3D",
    showtime: "10:30",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
    h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
    b: [1, 3, 13, 15, 22],
    g: [3, 9, 10, 20, 24],
    a: [7, 12, 9, 21, 20],
    m: [6, 8, 11, 12, 19],
    p: [8, 5, 12, 13, 14],
    q: [],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date,
    img: "img/Bad-newz.jpg",
    vid: "video/Bad.mp4",
    background: "img/bad-bg.avif",
    directed: "		Anand Tiwari",
    star: "	  Vicky Kaushal, Triptii Dimri, and Ammy Virk.",
    edit: "Shan Mohammed",
    music:
      "Rochak Kohli , Vishal Mishra , DJ Chetas-Lijo George , Prem-Hardeep , Karan Aujla and Abhijeet Srivastava",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Bad-Newz",
    moviename: "Bad Newz",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "3D",
    showtime: "10:30",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date + 1,
    img: "img/Bad-newz.jpg",
    vid: "video/Bad.mp4",
    background: "img/bad-bg.avif",
    directed: "		Anand Tiwari",
    star: "	  Vicky Kaushal, Triptii Dimri, and Ammy Virk.",
    edit: "Shan Mohammed",
    music:
      "Rochak Kohli , Vishal Mishra , DJ Chetas-Lijo George , Prem-Hardeep , Karan Aujla and Abhijeet Srivastava",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Phir-Aayi-Hasseen-Dillruba",
    moviename: "Phir Aayi Hasseen Dillruba",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "4DX",
    showtime: "12:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
    h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
    b: [1, 3, 13, 15, 22],
    g: [3, 9, 10, 20, 24],
    a: [7, 12, 9, 21, 20],
    m: [6, 8, 11, 12, 19],
    p: [8, 5, 12, 13, 14],
    q: [],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date,
    img: "img/Dilrooba.webp",
    vid: "video/Haseen.mp4",
    background: "img/haseen-bg.jpg",
    directed: "	Jayprad Desai	",
    star: " Taapsee Pannu, Vikrant Massey and Sunny Kaushal.",
    edit: "	Hemal Kothari",
    music: "	Sachet–Parampara and Anurag Saikia",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Phir-Aayi-Hasseen-Dillruba",
    moviename: "Phir Aayi Hasseen Dillruba",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "4DX",
    showtime: "12:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date + 1,
    img: "img/Dilrooba.webp",
    vid: "video/Haseen.mp4",
    background: "img/haseen-bg.jpg",
    directed: "	Jayprad Desai	",
    star: " Taapsee Pannu, Vikrant Massey and Sunny Kaushal.",
    edit: "	Hemal Kothari",
    music: "	Sachet–Parampara and Anurag Saikia",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Crew",
    moviename: "Crew",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "4DX",
    showtime: "16:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
    h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
    b: [1, 3, 13, 15, 22],
    g: [3, 9, 10, 20, 24],
    a: [7, 12, 9, 21, 20],
    m: [6, 8, 11, 12, 19],
    p: [8, 5, 12, 13, 14],
    q: [],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date,
    img: "img/Crew.jpg",
    vid: "video/Crew.mp4",
    background: "img/crew-bg.webp",
    directed: "	Rajesh A Krishnan",
    star: " Tabu, Kareena Kapoor Khan and Kriti Sanon with Diljit Dosanjh and Kapil Sharma",
    edit: "	Manan Sagar",
    music:
      "Diljit Dosanjh , Badshah , Raj Ranjodh , Vishal Mishra , Akshay–IP , Bharg–Rohit",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Crew",
    moviename: "Crew",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "4DX",
    showtime: "16:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date + 1,
    img: "img/Crew.jpg",
    vid: "video/Crew.mp4",
    background: "img/crew-bg.webp",
    directed: "	Rajesh A Krishnan",
    star: " Tabu, Kareena Kapoor Khan and Kriti Sanon with Diljit Dosanjh and Kapil Sharma",
    edit: "	Manan Sagar",
    music:
      "Diljit Dosanjh , Badshah , Raj Ranjodh , Vishal Mishra , Akshay–IP , Bharg–Rohit",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Mr.-And-Mrs.-Mahi",
    moviename: "Mr. And Mrs. Mahi",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "2D",
    showtime: "17:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
    h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
    b: [1, 3, 13, 15, 22],
    g: [3, 9, 10, 20, 24],
    a: [7, 12, 9, 21, 20],
    m: [6, 8, 11, 12, 19],
    p: [8, 5, 12, 13, 14],
    q: [],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date,
    img: "img/Mahi.jpg",
    vid: "video/Mahi.mp4",
    background: "img/Mahi-bg.jpg",
    directed: "		Sharan Sharma",
    star: "  Rajkummar Rao and Janhvi Kapoor. ",
    edit: "	Nitin Baid",
    music:
      "Vishal Mishra , Tanishk Bagchi , Jaani , Achint-Yuva , Hunny-Bunny And Dhruv Dhalla",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Mr.-And-Mrs.-Mahi",
    moviename: "Mr. And Mrs. Mahi",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "2D",
    showtime: "17:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date + 1,
    img: "img/Mahi.jpg",
    vid: "video/Mahi.mp4",
    background: "img/Mahi-bg.jpg",
    directed: "		Sharan Sharma",
    star: "  Rajkummar Rao and Janhvi Kapoor. ",
    edit: "	Nitin Baid",
    music:
      "Vishal Mishra , Tanishk Bagchi , Jaani , Achint-Yuva , Hunny-Bunny And Dhruv Dhalla",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Sarfira",
    moviename: "Sarfira",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "3D",
    showtime: "21:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
    h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
    b: [1, 3, 13, 15, 22],
    g: [3, 9, 10, 20, 24],
    a: [7, 12, 9, 21, 20],
    m: [6, 8, 11, 12, 19],
    p: [8, 5, 12, 13, 14],
    q: [],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date,
    img: "img/Sarfira.jpg",
    vid: "video/Sarfira.mp4",
    background: "img/Sarfira-bg.jpg",
    directed: "Sudha Kongara",
    star: "Akshay Kumar, Paresh Rawal and Radhika Madan.",
    edit: "	Sathish Suriya",
    music: "	G. V. Prakash Kumar",
  },
  {
    pvr: "PVR Cinema Hub",
    movie: "Sarfira",
    moviename: "Sarfira",

    loc: "Rohini Sector-14 , New Delhi",
    audi: 2,
    type: "3D",
    showtime: "21:00",
    series: ["J", "H", "B", "G", "A", "H", "P", "Q"],
    row_section: 3,
    seat: 24,
    j: [12, 16, 4, 3, 17, , 17, 18, 19, 13, 12],
    h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
    b: [1, 2, 3, 17, 18],
    g: [2, 7, 8, 17, 18],
    a: [5, 6, 17, 10, 22],
    m: [11, 12, 13, 22, 5],
    p: [8, 5],
    q: [5, 6, 7, 8, 12, 19, 13],
    price: [800, 800, 500, 500, 500, 500, 400, 400],
    date: min_date + 1,
    img: "img/Sarfira.jpg",
    vid: "video/Sarfira.mp4",
    background: "img/Sarfira-bg.jpg",
    directed: "Sudha Kongara",
    star: "Akshay Kumar, Paresh Rawal and Radhika Madan.",
    edit: "	Sathish Suriya",
    music: "	G. V. Prakash Kumar",
  },
];

let addSeats = (arr) => {
  // console.log(arr);
  arr.forEach((el) => {
    const { series, row_section, seat, price, j, h, b, g, a, m, p, q } = el;

    // create row
    for (let index = 0; index < series.length; index++) {
      // console.log(series[index]);
      let row = document.createElement("div");
      row.className = "row";

      let booked_seats = [];
      booked_seats = [...eval(series[index].toLocaleLowerCase())];

      for (let seats = 0; seats < seat; seats++) {
        if (seats === 0) {
          let span = document.createElement("span");
          span.innerText = series[index];
          row.appendChild(span);
        }

        let li = document.createElement("li");
        let filter = booked_seats.filter((el) => {
          return el === seats;
        });

        if (filter.length > 0) {
          li.className = "seat booked";
        } else {
          li.className = "seat";
        }
        li.id = series[index] + seats;
        li.setAttribute("book", seats);
        li.setAttribute("sr", series[index]);
        li.innerText = price[index];

        li.onclick = () => {
          if (li.className === "seat booked") {
            li.classList.remove("selected");
          } else {
            li.classList.toggle("selected");
          }

          const selectedSeats = Array.from(
            document.getElementsByClassName("selected")
          ).map((seat) => seat.id);

          let len = Array.from(
            document.getElementsByClassName("selected")
          ).length;
          if (len > 0) {
            document.getElementById("book_ticket").style.display = "unset";
          } else {
            document.getElementById("book_ticket").style.display = "none";
          }
        };

        row.appendChild(li);
        if (seats === seat - 1) {
          let span = document.createElement("span");
          span.innerText = series[index];
          row.appendChild(span);
        }
      }

      document.getElementById("chair").appendChild(row);
    }
  });
};

let data = pvr.filter(
  (obj) => obj.date === min_date && obj.movie === url_segment[1]
);
let fixtime = data[0].showtime;
Array.from(document.getElementsByClassName("time")).forEach((el) => {
  if (el.innerText == fixtime) {
    el.classList.add("h6_new");
  }
});

document.getElementById("title").innerText = data[0].moviename;
document.getElementById("poster").src = data[0].img;
document.getElementById("video").src = data[0].vid;
document.getElementById("directed").innerText = data[0].directed;
document.getElementById("star").innerText = data[0].star;
document.getElementById("edit").innerText = data[0].edit;
document.getElementById("music").innerText = data[0].music;

var styleElem = document.head.appendChild(document.createElement("style"));

styleElem.innerHTML = `.book .right:before {background: url(${data[0].background})no-repeat center -30px/cover}`;

addSeats(data);
let offDate = () => {
  Array.from(document.getElementsByClassName("date_point")).forEach((el) => {
    el.classList.remove("h6_active");
  });
};
Array.from(document.getElementsByClassName("date_point")).forEach((el) => {
  el.addEventListener("click", () => {
    if (+el.innerText > date.getDate() - 1) {
      offDate();
      el.classList.add("h6_active");
      min_date = +el.innerText;
      document.getElementById("chair").innerHTML = "";
      let data = pvr.filter(
        (obj) => obj.date === min_date && obj.movie === url_segment[1]
      );

      addSeats(data);
    }
  });
});

document.getElementById("book_ticket").addEventListener("click", () => {
  Array.from(document.getElementsByClassName("selected")).forEach((el) => {
    let seat_no = el.getAttribute("book");
    let seat_sr = el.getAttribute("sr").toLocaleLowerCase();
    let seat_price = el.innerText;

    //  let Movie_name = data[0].moviename;
    let obj = {
      movie: url_segment[1],
      date: min_date,
    };
    let getData = pvr.map((obj) => {
      if (obj.movie === url_segment[1] && obj.date === min_date) {
        obj[seat_sr].push(+seat_no);
      }
      return obj;
    });

    //  console.log(getData);

    document.getElementById("chair").innerHTML = "";
    let data = getData.filter(
      (obj) => obj.date === min_date && obj.movie === url_segment[1]
    );
    addSeats(data);
    let Movie_name = data[0].moviename;
    let ticket_bg = data[0].background;

    let od = data[0].type;
    let timing = data[0].showtime;
    document.getElementById("screen").style.display = "none";
    document.getElementById("chair").style.display = "none";
    document.getElementById("det").style.display = "none";
    document.getElementById("book_ticket").style.display = "none";
    document.getElementById("back_ticket").style.display = "unset";
    document.getElementById("ticket").style.display = "block";

    let tic = document.createElement("div");
    tic.className = "tic";
    tic.innerHTML = `<div class="barcode">
            <div class="card">
             <h6>ROW ${seat_sr.toLocaleUpperCase()}</h6>
             <h6>${min_date} August 2023</h6>
            </div>
            <div class="card">
                <h6>Seat ${seat_no}</h6>
                <h6>${timing}</h6>
               </div>
               <svg id="${seat_sr}${seat_no}barcode"></svg>

            <h5>CINEMA HUB</h5>
        </div>
        <div class="tic_details">

<div class="div">${od}</div>

<h5 class="pvr"><span>Cinema </span>Hub</h5>
<h1>${Movie_name}</h1>
  <div class="seat_det ">
     <div class="seat_cr">
        <h6>ROW</h6>
        <h6>${seat_sr.toLocaleUpperCase()}</h6>
     </div>
     <div class="seat_cr">
        <h6>SEAT</h6>
        <h6>${seat_no}</h6>
     </div>
     <div class="seat_cr">
        <h6>DATE</h6>
        <h6>${min_date} <sub>Aug</sub> </h6>
     </div>
     <div class="seat_cr">
        <h6>TIME</h6>
        <h6>${timing} <sub>pm</sub></h6>
     </div>

  </div>
        </div>`;

    document.getElementById("ticket").appendChild(tic);
    JsBarcode(
      `#${seat_sr}${seat_no}barcode`,
      `${seat_sr.toLocaleUpperCase()}${seat_no}${seat_price}${min_date}${min_month}${min_year}`
    );

    let ticDetails = tic.querySelector(".tic_details");
    ticDetails.style.background = `url(${ticket_bg}) no-repeat center -20px/cover`;
  });
});
document.getElementById("back_ticket").addEventListener("click", () => {
  document.getElementById("screen").style.display = "inline-block";
  document.getElementById("chair").style.display = "block";
  document.getElementById("det").style.display = "flex";
  document.getElementById("book_ticket").style.display = "unset";
  document.getElementById("back_ticket").style.display = "none";
  document.getElementById("ticket").style.display = "none";
});

// const localSeats = JSON.parse(localStorage.getItem("selectedSeats"));
// const allSeats = document.querySelectorAll(".seat");
// allSeats.forEach((seat) =>{
//     localSeats.forEach((localSeat) =>{
//         if(seat.id === localSeat){
//            seat.style.background = '#ADFF2F';
//            seat.style.color = 'black';
//         }
// //         document.getElementById('book_ticket').style.display='unset';
//     })
// });
