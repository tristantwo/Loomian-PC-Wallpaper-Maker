let wallpaper;
let img;
let selectX = 605;
let selectY = 55;
let ghwshaw;
let ghwslug;
let ghwescar;
let ghwgas;
let grinch;
let ggcika;
let ggiciRed;
let ggiciOrange;
let ggiciYellow;
let ggiciGreen;
let ggiciNavy;
let ggiciPurple;
let ghwdRed;
let ghwdOrange;
let ghwdYellow;
let ghwdGreen;
let ghwdBlue;
let ghwdPurple;
let gemegek;
let gemeele;
let grubygek;
let grubyele;
let gsapphgek;
let gsapphele;
let rbt;
let rbd;
let gghwproto;
let ggcpropae;
let ggcmuta;
let ghwikaRed;
let ghwikaOrange;
let ghwikaYellow;
let ghwikaGreen;
let ghwikaBlue;
let ghwikaPurple;
let Loomian = "ghwshaw";
let position1 = null;
let position2 = null;
let position3 = null;
let position4 = null;
let position5 = null;
let position6 = null;
let position7 = null;
let position8 = null;
let position9 = null;
let position10 = null;
let position11 = null;
let position12 = null;
let position13 = null;
let position14 = null;
let position15 = null;
let position16 = null;
let position17 = null;
let position18 = null;
let position19 = null;
let position20 = null;
let position21 = null;
let position22 = null;
let position23 = null;
let position24 = null;
let position25 = null;
let position26 = null;
let position27 = null;
let position28 = null;
let position29 = null;
let position30 = null;

function preload() {
  ghwshaw = loadImage("assets/ghwshaw.png");
  ghwslug = loadImage("assets/ghwslug.png");
  ghwescar = loadImage("assets/ghwescar.png");
  ghwgas = loadImage("assets/ghwgas.png");
  grinch = loadImage("assets/grinch.png");
  ggcika = loadImage("assets/ggcika.png");
  ggiciRed = loadImage("assets/ggiciRed.png");
  ggiciOrange = loadImage("assets/ggiciOrange.png");
  ggiciYellow = loadImage("assets/ggiciYellow.png");
  ggiciGreen = loadImage("assets/ggiciGreen.png");
  ggiciNavy = loadImage("assets/ggiciNavy.png");
  ggiciPurple = loadImage("assets/ggiciPurple.png");
  ghwdRed = loadImage("assets/ghwdRed.png");
  ghwdOrange = loadImage("assets/ghwdOrange.png");
  ghwdYellow = loadImage("assets/ghwdYellow.png");
  ghwdGreen = loadImage("assets/ghwdGreen.png");
  ghwdBlue = loadImage("assets/ghwdBlue.png");
  ghwdPurple = loadImage("assets/ghwdPurple.png");
  gemegek = loadImage("assets/gemegek.png");
  gemeele = loadImage("assets/gemeele.png");
  grubygek = loadImage("assets/grubygek.png");
  grubyele = loadImage("assets/grubyele.png");
  gsapphgek = loadImage("assets/gsapphgek.png");
  gsapphele = loadImage("assets/gsapphele.png");
  rbt = loadImage("assets/rbt.png");
  rbd = loadImage("assets/rbd.png");
  gghwproto = loadImage("assets/gghwproto.png");
  ggcpropae = loadImage("assets/ggcpropae.png");
  ggcmuta = loadImage("assets/ggcmuta.png");
  ghwikaRed = loadImage("assets/ghwikaRed.png");
  ghwikaOrange = loadImage("assets/ghwikaOrange.png");
  ghwikaYellow = loadImage("assets/ghwikaYellow.png");
  ghwikaGreen = loadImage("assets/ghwikaGreen.png");
  ghwikaBlue = loadImage("assets/ghwikaBlue.png");
  ghwikaPurple = loadImage("assets/ghwikaPurple.png");
}

function setup() {
  createCanvas(800, 500);
  wallpaper = createGraphics(600, 500);

  createFileInput(handleFile).position(610, 10);

  //Loomian buttons
  for (let X = 0; X <= 5; X++) {
    for (let Y = 0; Y <= 4; Y++) {
      createButton("+")
        .position(60 + X * 90, 60 + Y * 90)
        .mouseClicked(setLoomian);
    }
  }
}

function draw() {
  noSmooth();
  wallpaper.noSmooth();
  //background
  background(255);
  wallpaper.background(255);
  if (img) {
    image(img, 0, 0, 600, 500);
    wallpaper.image(img, 0, 0, 600, 500);
  }
  //upper menu
  strokeWeight(0);
  fill(245);
  rect(600, 0, 200, 50);
  //file input
  textSize(8);
  fill(0);
  text("upload Loomian PC wallpaper background", 620, 40);
  //lower menu
  fill(235);
  rect(600, 50, 200, 450);
  //menu buttons
  fill(245);
  for (let x = 0; x <= 5; x++) {
    for (let y = 0; y <= 11; y++) {
      rect(605 + x * 30, 55 + y * 30, 25, 25);
    }
  }
  rect(605, 415, 25, 25);
  rect(635, 415, 25, 25);
  fill(0);
  text("erase", 610 - 2.5, 420 + 7.5);
  text("save", 640 - 2.5, 420 + 7.5);
  image(ghwshaw, 605 - (25 / 90) * 15, 55, (4 / 3) * 25, 25);
  image(ghwslug, 635 - (25 / 90) * 15, 55, (4 / 3) * 25, 25);
  image(ghwescar, 665 - (25 / 90) * 15, 55, (4 / 3) * 25, 25);
  image(ghwgas, 695 - (25 / 90) * 15, 55, (4 / 3) * 25, 25);
  image(grinch, 725 - (25 / 90) * 15, 55, (4 / 3) * 25, 25);
  image(ggcika, 755 - (25 / 90) * 15, 55, (4 / 3) * 25, 25);
  image(ggiciRed, 605 - (25 / 90) * 15, 85, (4 / 3) * 25, 25);
  image(ggiciOrange, 635 - (25 / 90) * 15, 85, (4 / 3) * 25, 25);
  image(ggiciYellow, 665 - (25 / 90) * 15, 85, (4 / 3) * 25, 25);
  image(ggiciGreen, 695 - (25 / 90) * 15, 85, (4 / 3) * 25, 25);
  image(ggiciNavy, 725 - (25 / 90) * 15, 85, (4 / 3) * 25, 25);
  image(ggiciPurple, 755 - (25 / 90) * 15, 85, (4 / 3) * 25, 25);
  image(ghwdRed, 605 - (25 / 90) * 15, 115, (4 / 3) * 25, 25);
  image(ghwdOrange, 635 - (25 / 90) * 15, 115, (4 / 3) * 25, 25);
  image(ghwdYellow, 665 - (25 / 90) * 15, 115, (4 / 3) * 25, 25);
  image(ghwdGreen, 695 - (25 / 90) * 15, 115, (4 / 3) * 25, 25);
  image(ghwdBlue, 725 - (25 / 90) * 15, 115, (4 / 3) * 25, 25);
  image(ghwdPurple, 755 - (25 / 90) * 15, 115, (4 / 3) * 25, 25);
  image(gemegek, 605 - (25 / 90) * 15, 145, (4 / 3) * 25, 25);
  image(gemeele, 635 - (25 / 90) * 15, 145, (4 / 3) * 25, 25);
  image(grubygek, 665 - (25 / 90) * 15, 145, (4 / 3) * 25, 25);
  image(grubyele, 695 - (25 / 90) * 15, 145, (4 / 3) * 25, 25);
  image(gsapphgek, 725 - (25 / 90) * 15, 145, (4 / 3) * 25, 25);
  image(gsapphele, 755 - (25 / 90) * 15, 145, (4 / 3) * 25, 25);
  image(rbt, 605 - (25 / 90) * 15, 175, (4 / 3) * 25, 25);
  image(rbd, 635 - (25 / 90) * 15, 175, (4 / 3) * 25, 25);
  image(gghwproto, 665 - (25 / 90) * 15, 175, (4 / 3) * 25, 25);
  image(ggcpropae, 695 - (25 / 90) * 15, 175, (4 / 3) * 25, 25);
  image(ggcmuta, 725 - (25 / 90) * 15, 175, (4 / 3) * 25, 25);
  //image(, 755 - (25 / 90) * 15, 175, (4 / 3) * 25, 25);
  image(ghwikaRed, 605 - (25 / 90) * 15, 205, (4 / 3) * 25, 25);
  image(ghwikaOrange, 635 - (25 / 90) * 15, 205, (4 / 3) * 25, 25);
  image(ghwikaYellow, 665 - (25 / 90) * 15, 205, (4 / 3) * 25, 25);
  image(ghwikaGreen, 695 - (25 / 90) * 15, 205, (4 / 3) * 25, 25);
  image(ghwikaBlue, 725 - (25 / 90) * 15, 205, (4 / 3) * 25, 25);
  image(ghwikaPurple, 755 - (25 / 90) * 15, 205, (4 / 3) * 25, 25);
  //select
  strokeWeight(5);
  stroke("pink");
  noFill();
  rect(selectX, selectY, 25, 25);
  //Loomians
  for (let i = 1; i <= 30; i++) {
    let loomianX;
    if (i % 6 === 0) {
      loomianX = 465;
    } else {
      loomianX = (i % 6) * 90 - 75;
    }
    const loomianY = Math.ceil(i / 6) * 90 - 65;
    //Loomians
    // if (position1 !== null) {image(position1, loomianX, loomianY, 120, 90); wallpaper.image(position1, loomianX, loomianY, 120, 90);}
    string =
      "if (position" +
      i +
      " !== null) {image(position" +
      i +
      ", " +
      loomianX +
      ", " +
      loomianY +
      ", 120, 90);wallpaper.image(position" +
      i +
      ", " +
      loomianX +
      ", " +
      loomianY +
      ", 120, 90);}";
    eval(string);
  }
}

function handleFile(file) {
  if (file.type === "image") {
    img = createImg(file.data, "");
    img.hide();
  } else {
    img = null;
  }
}

function touchStarted() {
  if (touches.length >= 1) {
    mouseClicked();
  }
}

function mouseClicked() {
  if (mouseX > 600 && mouseX < 780 && mouseY > 50 && mouseY < 410) {
    if ((mouseX - 600) % 30 > 0 && (mouseX - 600) % 30 <= 5) {
      return;
    } else if ((mouseY - 50) % 30 > 0 && (mouseY - 50) % 30 <= 5) {
      return;
    }
    selectX = 600 + floor((mouseX - 600) / 30) * 30 + 5;
    selectY = 50 + floor((mouseY - 50) / 30) * 30 + 5;
    Loomian = floor((mouseY - 50) / 30) * 6 + floor((mouseX - 600) / 30) + 1;
    if (Loomian === 1) {
      Loomian = "ghwshaw"
    } else if (Loomian === 2) {
      Loomian = "ghwslug"
    } else if (Loomian === 3) {
      Loomian = "ghwescar"
    } else if (Loomian === 4) {
      Loomian = "ghwgas"
    } else if (Loomian === 5) {
      Loomian = "grinch"
    } else if (Loomian === 6) {
      Loomian = "ggcika"
    } else if (Loomian === 7) {
      Loomian = "ggiciRed"
    } else if (Loomian === 8) {
      Loomian = "ggiciOrange"
    } else if (Loomian === 9) {
      Loomian = "ggiciYellow"
    } else if (Loomian === 10) {
      Loomian = "ggiciGreen"
    } else if (Loomian === 11) {
      Loomian = "ggiciNavy"
    } else if (Loomian === 12) {
      Loomian = "ggiciPurple"
    } else if (Loomian === 13) {
      Loomian = "ghwdRed";
    } else if (Loomian === 14) {
      Loomian = "ghwdOrange";
    } else if (Loomian === 15) {
      Loomian = "ghwdYellow";
    } else if (Loomian === 16) {
      Loomian = "ghwdGreen";
    } else if (Loomian === 17) {
      Loomian = "ghwdBlue";
    } else if (Loomian === 18) {
      Loomian = "ghwdPurple";
    } else if (Loomian === 19) {
      Loomian = "gemegek";
    } else if (Loomian === 20) {
      Loomian = "gemeele";
    } else if (Loomian === 21) {
      Loomian = "grubygek";
    } else if (Loomian === 22) {
      Loomian = "grubyele";
    } else if (Loomian === 23) {
      Loomian = "gsapphgek";
    } else if (Loomian === 24) {
      Loomian = "gsapphele";
    } else if (Loomian === 25) {
      Loomian = "rbt";
    } else if (Loomian === 26) {
      Loomian = "rbd";
    } else if (Loomian === 27) {
      Loomian = "gghwproto";
    } else if (Loomian === 28) {
      Loomian = "ggcpropae";
    } else if (Loomian === 29) {
      Loomian = "ggcmuta";
    } else if (Loomian === 31) {
      Loomian = "ghwikaRed";
    } else if (Loomian === 32) {
      Loomian = "ghwikaOrange";
    } else if (Loomian === 33) {
      Loomian = "ghwikaYellow";
    } else if (Loomian === 34) {
      Loomian = "ghwikaGreen";
    } else if (Loomian === 35) {
      Loomian = "ghwikaBlue";
    } else if (Loomian === 36) {
      Loomian = "ghwikaPurple";
    } else {
      Loomian = null;
    }
  } else if (mouseX > 605 && mouseX < 630 && mouseY > 415 && mouseY < 440) {
    selectX = 605;
    selectY = 415;
    Loomian = null;
  } else if (mouseX > 635 && mouseX < 660 && mouseY > 415 && mouseY < 440) {
    save(wallpaper, "wallpaper", "png");
  }
}

function setLoomian() {
  //position1 = Loomian
  let i = floor((mouseY - 60) / 90) * 6 + floor((mouseX - 60) / 90) + 1;
  let string = "position" + i + " = " + Loomian + ";";
  eval(string);
}
