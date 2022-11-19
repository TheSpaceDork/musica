

function likeMina() {
    let like = document.getElementById('like');
   
    like.classList.toggle('color');
   
}
function secondPhase() {
let heart = document.getElementById('hearts')
heart.classList.toggle('hearts');
}
// Second det of like buttons
function likeMina2() {
    let like = document.getElementById('like2');
   
    like.classList.toggle('color');
   
}
function secondPhase2() {
let heart = document.getElementById('hearts2')
heart.classList.toggle('hearts');
}
// third set of like buttons
function likeMina3() {
    let like = document.getElementById('like3');
   
    like.classList.toggle('color');
   
}
function secondPhase3() {
let heart = document.getElementById('hearts3')
heart.classList.toggle('hearts');
}
// .chrome styling Vanilla JS


// Changes menus
 
function menuChange() {
   let tamper2 = document.getElementById('radio');
    let showDiv = document.getElementById('collections');
    let otherClose = document.getElementById('container');
    tamper2.classList.toggle('collections');
    showDiv.classList.toggle('show');
    otherClose.classList.toggle('hide');
}
function charts() {
    let showChart = document.getElementById('chart');
    let otherClose = document.getElementById('container');
   
    document.getElementById('chart').style.backgroundImage = "/images/rect26.png";
    document.body.style.zIndex = "81";
    showChart.classList.toggle('show');
    otherClose.classList.toggle('hide');
}
// Hamburger menu
function openMenu() {
    let menubtn = document.getElementById('menubtn1');
    let transmenu = document.getElementById('transMenu');
    menubtn.classList.toggle('openmenu');
    transmenu.classList.toggle('openmenu');
}
function closeMenu() {
    let closebtn = document.getElementById('closbtn');
    let transmenu = document.getElementById('transMenu');
    
    transmenu.classList.toggle('openmenu');
}
// Music player appears
function playMusic() {
    let player = document.getElementById('player');
    player.classList.toggle('music_player');
    // playsong();
}
function playAll() {
    let player = document.getElementById('player');
    player.classList.toggle('music_player');
     playsong();
}
function closePlayer() {
    let playerClose = document.getElementById('playerclose');
    let player = document.getElementById('player');
    player.classList.toggle('music_player');
}
// Mobile functionality for menu changes
function menuChange2() {
    let tamper1 = document.getElementById('radio2');
    let showDiv = document.getElementById('collections');
    let otherClose = document.getElementById('container');
    tamper1.classList.toggle('collections');
    showDiv.classList.toggle('show');
    otherClose.classList.toggle('hide');
    closeMenu();
}

// musica main functionality
let previous = document.querySelector('#pre'); 
let play = document.querySelector('#play'); 
let next = document.querySelector('#next'); 
let title = document.querySelectorAll('#title, #title2, #title3'); 

let recent_volume = document.querySelector('#volume'); 
let volume_show = document.querySelector('#volume_show'); 
let slider = document.querySelector('#duration_slider'); 
let show_duration = document.querySelector('#show_duration'); 
let track_image = document.querySelectorAll('#track_image, #track_img2, #track_img3'); 
let auto_play = document.querySelector('#auto'); 
let present = document.querySelector('#present'); 
let total = document.querySelector('#total'); 
let artist = document.querySelectorAll('#artist, #artist2, #artist3' ); 



let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// Create audio element
let track = document.createElement('audio');


// All songs list
let All_song = [
    {
        name: "Life in a Bubble",
        path: "/music/song1.mp3",
        img: "/img/img1.jpg",
        singer: "Alpha & The Van"
    },
       {
        name: "Limits",
        path: "/music/song2.mp3",
        img: "/img/img2.jpg",
        singer: "Bad Omens"
    },
           {
        name: "Let me love you",
        path: "/music/song3.mp3",
        img: "/img/img3.jpg",
        singer: "DJ Snake ft Justin Bieber"
 },
     {
        name: "This Mountain",
        path: "/music/song4.mp3",
        img: "/img/img4.jpg",
        singer: "Faouzia"
 },
     {
        name: " Blind",
        path: "/music/song5.mp3",
        img: "/img/img5.jpg",
        singer: "Dababy ft Young Thug"
 },
     {
        name: "Everything Black",
        path: "/music/song6.mp3",
        img: "/img/img6.jpg",
        singer: "Pluto"
 },
     {
        name: "Stand Strong",
        path: "/music/song7.mp3",
        img: "/img/img7.jpg",
        singer: "Davido"
 },
     {
        name: "Nomad",
        path: "/music/song8.mp3",
        img: "/img/img8.jpg",
        singer: "BT pink"
 },
     {
        name: "Wetin man go do",
        path: "/music//song9.mp3",
        img: "/img/img9.jpg",
        singer: "Burna Boy"
 },
     {
        name: "Cancelled",
        path: "/music/song10.mp3",
        img: "/img/img10.jpg",
        singer: "Larray"
 },
     {
        name: "Closa",
        path: "/music/song11.mp3",
        img: "/img/img11.jpg",
        singer: "Ycee"
 },
     {
        name: "The Key",
        path: "/music/song12.mp3",
        img: "/img/img12.webp",
        singer: "Tems"
 },
     {
        name: "Rich Flex",
        path: "/music/song13.mp3",
        img: "/img/img13.webp",
        singer: "Drake  x  21 Savage"
 },
     {
        name: "Middle Child",
        path: "/music/song14.mp3",
        img: "/img/img14.jpg",
        singer: "Jcole"
    },
      {
        name: "Calm down",
        path: "/music/song15.mp3",
        img: "/img/img15.jpg",
        singer: "Rema ft Selena Gomez"
    },
     {
        name: "Lift me up",
        path: "/music/song16.mp3",
        img: "/img/img16.webp",
        singer: "Rihanna"
    },
      {
        name: "After Hours",
        path: "/music/song17.mp3",
        img: "/img/img17.jpg",
        singer: "The Weekend"
    },
     {
        name: "Vanilla",
        path: "/music/song18.mp3",
        img: "/img/img18.png",
        singer: "Burna Boy"
    },
];


// All functions

// Function load the track: this loads the music onto the player
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title[0].innerHTML = All_song[index_no].name;
    title[1].innerHTML = All_song[index_no].name;
    title[2].innerHTML = All_song[index_no].name;
    track_image[0].src = All_song[index_no].img;
    track_image[1].src = All_song[index_no].img;
    track_image[2].src = All_song[index_no].img;
    artist[0].innerHTML = All_song[index_no].singer;
    artist[1].innerHTML = All_song[index_no].singer;
    artist[2].innerHTML = All_song[index_no].singer;
    track.load();
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider, 1000);
}
load_track(index_no);

// Mute song
function mute_sound() {
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

// Reset song slider
function reset_slider() {
    slider.value = 0;
}

// Checking if the song is playing or not
function justplay() {
    if (playing_song == false) {
        playsong();
    } else {
        pausesong();
    }

}

// Play song
function playsong() {
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa-solid fa-pause"></i>'
};

// Pause song
function pausesong() {
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa-solid fa-play"></i>'
};

// Next song
function next_song() {
    if (index_no < All_song.length -1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();
}
}

// Previous song

function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();

    } else {
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}


// Volume change controls

function volume_change() {
    volume_show.innerHTML = recent_volume.value;
     
    
    track.volume = recent_volume.value / 100;
 
}

// Change slider location for song seeking
function change_duration() {
    
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
    track.currentTime = bottom_position;
} 

// Autoplay function
function autoplay_switch() {
    if (autoplay == 1) {
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    } else {
        autoplay = 1;
        auto_play.style.background = "#facd66";
    }
}

function range_slider() {
    let position = 0;
    //Update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    // Function  will run when thw song is over
    if (track.ended) {
        play.innerHTML = '<i class="fa-solid fa-play"></i>';
        if (autoplay==1){
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}