<<<<<<< HEAD
const musicRecord = [
    {
        song: "Believer.mp3",
        songName: 'Believer',
        singerName: 'Imagine Dragons',
        thumbnail: 'believer.jpg'
    },
    {
        song: "Friends.mp3",
        songName: 'Friends',
        singerName: 'Marshmallow',
        thumbnail: 'frienda.jpg'
    },
    {
        song: "On My Way.mp3",
        songName: 'On My Way',
        singerName: 'Alan Walker',
        thumbnail: 'onmyway.jpg'
    },
    {
        song: "Taki Taki.mp3",
        songName: 'Taki Taki',
        singerName: 'Dj Snake',
        thumbnail: 'taki.jpg'
    },
    {
        song: "KGF Theme.mp3",
        songName: 'KGF THEME',
        singerName: 'Sachin Basrur',
        thumbnail: 'taki.jpg'
    },
    {
        song: "Kgf Wolf Spirit.mp3",
        songName: 'Kgf Wolf',
        singerName: 'Ganta',
        thumbnail: 'taki.jpg'
    },
    {
        song: "Oh no no no laugh.mp3",
        songName: 'Oh No No No',
        singerName: 'Hippie Sabotage',
        thumbnail: 'taki.jpg'
    }

]

const backward = document.getElementById('backward');
const forward = document.getElementById('forward');
const play = document.getElementById('play');
const audio = document.getElementById('audio');
const songName = document.getElementById('song-name');
const singerName = document.getElementById('singer-name');
const thumbnail = document.getElementById('img-thumbnail');
let count = 0;
forward.addEventListener('click', () => {
    count++;
    if (count > musicRecord.length - 1) {
        count = 0;
    }
    audio.src = `music/${musicRecord[count].song}`;
    audio.play();
    play.className = "fas fa-pause text-white";
    songName.innerText = musicRecord[count].songName;
    singerName.innerText = musicRecord[count].singerName;
    audio.style.background = 'red';
    audio.style.color = 'red';
    let imgval = musicRecord[count].thumbnail;
    thumbnail.style.backgroundImage = `url("images/${imgval}")`;
    playMusic = setInterval(() => {
        document.body.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.color = document.body.style.background;
        audio.style.background = document.body.style.background;
    }, 700);
})
backward.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = musicRecord.length;
        count--;
    }
    audio.src = `music/${musicRecord[count].song}`;
    audio.play();
    play.className = "fas fa-pause text-white";
    songName.innerText = musicRecord[count].songName;
    singerName.innerText = musicRecord[count].singerName;
    audio.style.background = 'red';
    audio.style.color = 'red';
    thumbnail.style.backgroundImage = `url("images/${imgval}")`;
    playMusic = setInterval(() => {
        document.body.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.color = document.body.style.background;
        audio.style.background = document.body.style.background;
    }, 700);
})
play.addEventListener('click', () => {

    if (play.className === "fas fa-pause") {
        play.className = "fas fa-play";
        audio.pause();
        clearInterval(playMusic);
    }
    else {
        play.className = "fas fa-pause";
        audio.play();
        playMusic = setInterval(() => {
            document.body.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.color = document.body.style.background;
            audio.style.background = document.body.style.background;
        }, 700);
=======
const musicRecord=[
    {
        song:"Believer.mp3",
        songName:'Believer',
        singerName:'Imagine Dragons',
        thumbnail:'believer.jpg'
    },
    {
        song:"Friends.mp3",
        songName:'Friends',
        singerName:'Marshmallow',
        thumbnail:'frienda.jpg'
    },
    {
        song:"On My Way.mp3",
        songName:'On My Way',
        singerName:'Alan Walker',
        thumbnail:'onmyway.jpg'
    },
    {
        song:"Taki Taki.mp3",
        songName:'Taki Taki',
        singerName:'Dj Snake',
        thumbnail:'taki.jpg'
    },
   
]
const backward=document.getElementById('backward');
const forward=document.getElementById('forward');
const play=document.getElementById('play');
const audio=document.getElementById('audio');
const songName=document.getElementById('song-name');
const singerName=document.getElementById('singer-name');
const thumbnail=document.getElementById('img-thumbnail');
let count=0;
forward.addEventListener('click',()=>
{
    count++;
    if(count>musicRecord.length-1)
    {
        count=0;
    }
    audio.src=`music/${musicRecord[count].song}`;
    audio.play();
    play.className="fas fa-pause text-white";
    songName.innerText=musicRecord[count].songName;
    singerName.innerText=musicRecord[count].singerName;
    audio.style.background='red';
    audio.style.color='red';
    let imgval=musicRecord[count].thumbnail;
    thumbnail.style.backgroundImage=`url("images/${imgval}")`;
    playMusic=setInterval(() => {
        document.body.style.background='#'+Math.floor(Math.random()*16777215).toString(16); 
        document.body.style.color=document.body.style.background;
        audio.style.background=document.body.style.background;
}, 700);
    // thumbnail.style.backgroundImage="url(`images/${musicRecord[count].thumbnail}`)";
})
backward.addEventListener('click',()=>
{
    count--;
    if(count<0)
    {
        count=musicRecord.length;
        count--;
    }
    audio.src=`music/${musicRecord[count].song}`;
    audio.play();
    play.className="fas fa-pause text-white";
    songName.innerText=musicRecord[count].songName;
    singerName.innerText=musicRecord[count].singerName;
    audio.style.background='red';
    audio.style.color='red';
    thumbnail.style.backgroundImage=`url("images/${imgval}")`;
    playMusic=setInterval(() => {
        document.body.style.background='#'+Math.floor(Math.random()*16777215).toString(16); 
        document.body.style.color=document.body.style.background;
        audio.style.background=document.body.style.background;
}, 700);
})
play.addEventListener('click',()=>
{
   
    if(play.className==="fas fa-pause")
    {
        play.className="fas fa-play";
        audio.pause();
        clearInterval(playMusic);
    }
    else
    {
        audio.play();
        playMusic=setInterval(() => {
            document.body.style.background='#'+Math.floor(Math.random()*16777215).toString(16); 
            document.body.style.color=document.body.style.background;
            audio.style.background=document.body.style.background;
    }, 700);
        play.className="fas fa-pause"
>>>>>>> 0a6445f663fa543c4cfca213cfafe57cb3dedb19
    }
})