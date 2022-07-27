const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const nextBtn = document.querySelector(".play-forward");
const prevBtn = document.querySelector(".play-back");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-name");
const musicThumbnail = document.querySelector(".music-thumb");
const musicImage = document.querySelector(".music-thumb img");
const playRepeat = document.querySelector(".play-repeat");

let isPlaying = true;
let indexSong = 0;
let isRepeat = false;
// const musics = ["BatNhacLen.mp3", "HaiMuoiHai.mp3", "CuoiThoi.mp3"]
const musics = [
  {
    id: 1,
    title: "Liều thuốc tâm hồn",
    file: "BatNhacLen.mp3",
    image:
    "https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-9/289562363_772024224152194_6777128746593227904_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ClxNFCbJVyEAX8qNxs8&_nc_ht=scontent.fhan5-1.fna&oh=03_AVKmx_t8tDgdatjp2gztjMkjywLlXPl0-lHwFVZO8QO4mg&oe=62E7D201",
  },
  {
    id: 2,
    title: "22",
    file: "HaiMuoiHai.mp3",
    image:
      "https://scontent.fhan5-1.fna.fbcdn.net/v/t1.15752-9/290667542_883080322626166_4625614368391556979_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Z3y3OlNKPH4AX9aOIdq&tn=FffqEKN0s3fNey_7&_nc_ht=scontent.fhan5-1.fna&oh=03_AVKq5ZXauPp9nvT4twHp_VIRO6JWvnIO3TG9nIoF2sHsfw&oe=62E89906",
  },
  {
    id: 3,
    title: "CuoiThoi",
    file: "CuoiThoi.mp3",
    image:
      "https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.15752-9/290020311_341899458100390_5876968776130909769_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ib3rrnWy2iAAX_b9SUQ&_nc_ht=scontent.fsgn5-8.fna&oh=03_AVITE2AIlc7PzXfO376yuhRy6dqzYU4x0xkLMjJTasYY_w&oe=62E71F29",
  },
  {
    id: 4,
    title: "KhiEmLon",
    file: "KhiEmLon.mp3",
    image:
      "https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/290396258_586118276442561_4492574744199453898_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DThd0yf827gAX8lByZ8&_nc_ht=scontent.fhan5-9.fna&oh=03_AVIq3m50udzA1F2SQgy5kYiD1rSE4Kttn2IBQaRdZf9f2w&oe=62E7D5DF",
  },
  {
    id: 5,
    title: "ThoiQuen",
    file: "ThoiQuen.mp3",
    image:
      "https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/289971013_519247896658584_2559536460826791192_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xewajHOoh0gAX-sJyRq&_nc_ht=scontent.fhan5-9.fna&oh=03_AVJwYh1_oLA-c3TrMpkEBOeec0TQReFbv6DOKu455EKrFw&oe=62E8D7ED",
  },
  {
    id: 6,
    title: "ChuyenDoiTa",
    file: "ChuyenDoiTa.mp3",
    image:
      "https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/290643167_547184843761944_8123844995513231110_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=9r46jkSBFr4AX8P4y7h&_nc_ht=scontent.fhan15-1.fna&oh=03_AVJjax6oyyWRUl34-JaEOFYLI5buj34F-mlnexkP0G8Sag&oe=62ECAB4F",
  },
  {
    id: 7,
    title: "Bài này đặc biệt",
    file: "LoiDuongMat.mp3",
    image:
      "https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/290594278_708447036893883_5753933706532650095_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mbAvaQ7fh8sAX9S4uKA&_nc_ht=scontent.fhan15-1.fna&oh=03_AVIav9eC4pgSPKnfhwgOQmgm27mKzDHooweF2DL3C3YWgg&oe=62EC5B55",
  },
  {
    id: 7,
    title: "BaBy",
    file: "EmBe.mp3",
    image:
      "https://i.pinimg.com/originals/c7/6d/7a/c76d7a26125c24ceeda1175e0d613b1c.gif",
  },
  {
    id: 7,
    title: "Hẹn em dưới ánh trăng",
    file: "HenEm.mp3",
    image:
      "https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/290594278_708447036893883_5753933706532650095_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mbAvaQ7fh8sAX9KJOmB&_nc_ht=scontent.fhan5-10.fna&oh=03_AVJxD_uL_aqT5X5tmK6jftoXDjYGk2nW7fnFKmufYWNBgw&oe=62EC5B55",
  },
  {
    id: 8,
    title: "Tối nay đi đâu nhờ",
    file: "EmOiToiNayTaDiDau.mp3",
    image:
      "https://i.pinimg.com/564x/72/79/9f/72799fb105e9b8c3002217f86b1eaee9.jpg",
  },
  {
    id: 9,
    title: "Bai Nay Khong Biet Ten HjHj",
    file: "NhacKhongLoi.mp3",
    image:
      "https://i.pinimg.com/736x/84/4c/e6/844ce6b551406ba6e31972bc59d0c0f0.jpg",
  },
  {
    id: 10,
    title: "Bài này nghe lúc trời mưa nhé !",
    file: "SaiGonHomNayMua.mp3",
    image:
      "https://i.pinimg.com/236x/f7/36/d1/f736d19144f76c7efe7c9bce923d9337.jpg",
  },
  {
    id: 11,
    title: "Bài này của phương ly lập thích nghe th",
    file: "ThichThich.mp3",
    image:
      "https://i.pinimg.com/564x/5f/a5/68/5fa5681462ac8e5e9e982b92f3d0ebd9.jpg",
  },
  {
    id: 12,
    title: "Bài này là Last Call",
    file: "LastCall.mp3",
    image:
      "https://i.pinimg.com/236x/9c/a8/50/9ca850397b2c7d0d5115dffb52587bf2.jpg",
  },
  {
    id: 13,
    title: "Va Zào Zai Địu Lày",
    file: "Vavaogiaidieulay.mp3",
    image:
      "https://i.pinimg.com/564x/18/5a/e5/185ae560f3e6d9e5809669fd5510e61a.jpg",
  },
];

/**
 * Music
 * id: 1
 * title: Holo
 * file: holo.mp3
 * image: unsplash
 */
let timer;
let repeatCount = 0;
playRepeat.addEventListener("click", function () {
  if (isRepeat) {
    isRepeat = false;
    playRepeat.removeAttribute("style");
  } else {
    isRepeat = true;
    playRepeat.style.color = "#ffb86c";
  }
});
nextBtn.addEventListener("click", function () {
  changeSong(1);
});
prevBtn.addEventListener("click", function () {
  changeSong(-1);
});
song.addEventListener("ended", handleEndedSong);
function handleEndedSong() {
  repeatCount++;
  if (isRepeat && repeatCount === 1) {
    // handle repeat song
    isPlaying = true;
    playPause();
  } else {
    changeSong(1);
  }
}
function changeSong(dir) {
  if (dir === 1) {
    // next song
    indexSong++;
    if (indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if (dir === -1) {
    // prev song
    indexSong--;
    if (indexSong < 0) {
      indexSong = musics.length - 1;
    }
    isPlaying = true;
  }
  init(indexSong);
  // song.setAttribute("src", `./music/${musics[indexSong].file}`);
  playPause();
}
playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    musicThumbnail.classList.add("is-playing");
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 500);
  } else {
    musicThumbnail.classList.remove("is-playing");
    song.pause();
    playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`;
    isPlaying = true;
    clearInterval(timer);
  }
}
function displayTimer() {
  const { duration, currentTime } = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
  remainingTime.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTimer(duration);
  }
}
function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
  song.currentTime = rangeBar.value;
}
function init(indexSong) {
  song.setAttribute("src", `./music/${musics[indexSong].file}`);
  musicImage.setAttribute("src", musics[indexSong].image);
  musicName.textContent = musics[indexSong].title;
}
displayTimer();
init(indexSong);