let lastImage = "";

function dingDongButton() {
  const image = document.getElementById('dingimage');
  const dingdongs = ["jake2.PNG", "rallemus.PNG", "rallemus2.PNG", "dingdong1.PNG", "dingdong2.jpg",
                      "dingdong3.jpg","dingdong4.jpg","dingdong5.PNG","dingdong6.jpg","dingdong7.jpg",
                      "dingdong8.PNG","dingdong9.PNG","dingdong10.PNG","dingdong11.PNG","dingdong12.PNG",
                      "dingdong13.PNG","dingdong14.PNG","dingdong15.PNG", "The ding dong.jpg"
  ];

  if (image.style.display === 'none' || image.style.display === '') {
    image.style.display = 'block';
  } else {
    let nextImage;
    do {
      nextImage = "images/" + dingdongs[Math.floor(Math.random() * dingdongs.length)];
    } while (nextImage === lastImage);

    lastImage = nextImage;
    image.src = nextImage;
  }
}