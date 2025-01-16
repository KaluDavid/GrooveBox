import nowPlaying from "/imgs/nowPlaying.png";
import img1 from "/imgs/artist.svg";
import img2 from "/imgs/nightMare.png";
import img3 from "/imgs/this.png";
import img4 from "/imgs/pain.png";
import heart from "/icons/heart.svg";

const Trend = [
  {
    id: 1,
    artist: "Sorfcore",
    title: "Synk",
    album: "Dance The Night(From Barbie Movie)",
    duration: "3:23",
    num: 1,
    img: img1,
    date: "Nov 4, 2023",
    favorite: heart,
  },
  {
    id: 2,
    artist: "Sorfcore",
    title: "The neighborhood",
    album: "Dance The Night(From Barbie Movie)",
    duration: "3:23",
    num: 2,
    numb: false,
    img: img2,
    date: "Nov 4, 2023",
    favorite: heart,
  },
  {
    id: 3,
    artist: "Sorfcore",
    title: "The neighborhood",
    album: "Dance The Night(From Barbie Movie)",
    duration: "2:23",
    num: nowPlaying,
    numb: true,
    img: img3,
    date: "Nov 4, 2023",
    favorite: heart,
  },
  {
    id: 4,
    artist: "Sorfcore",
    title: "The neighborhood",
    album: "Dance The Night(From Barbie Movie)",
    duration: "2:23",
    num: 4,
    numb: false,
    img: img4,
    date: "Nov 4, 2023",
    favorite: heart,
  },
];

export { Trend };
