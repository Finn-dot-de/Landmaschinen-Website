function video_volume(){
  let video = document.getElementById("myVideo");
  video.volume = 0.1;
}

function start() {
  window.location.href = "../index.html";
}

function trecker() {
  window.location.href = "../traktoren/index.html";
}

function ernte() {
  window.location.href = "../erntemaschinen/index.html";
}

function gerate() {
  window.location.href = "../geräte/index.html";
}

function toggleChipper(chipperFunction) {
  // let infoElement = document.getElementById(chipperFunction);
  let infoBox = document.getElementById(chipperFunction);

  if (infoBox.style.opacity === "1") {
    infoBox.style.opacity = "0";
  } else {
    infoBox.style.opacity = "1";
  }

  if (infoBox.style.display === "block") {
    infoBox.style.display = "none";
  } else {
    infoBox.style.display = "block";
  }
}

// function isMobileDevice() {
//   return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
// }

// if (isMobileDevice()) {
//   console.log("Das Gerät ist ein Mobilgerät.");
// } else {
//   console.log("Das Gerät ist kein Mobilgerät.");
// }

// isMobileDevice();
