var $divs = $('#text-box, #digital-garden');
var sync = function(e){
    var $other = $divs.not(this).off('scroll'), other = $other.get(0);
    var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
    other.scrollLeft = percentage * (other.scrollWidth - other.offsetWidth);
    setTimeout( function(){ $other.on('scroll', sync ); },10);
}
$divs.on( 'scroll', sync);

/* For the Navigation! */
function article() {
    var article = document.getElementById("article");
    var mygarden = document.getElementById("mygarden");
    var listofgardens = document.getElementById("listofgardens");
    var about = document.getElementById("about");
    var textbox = document.getElementById("text-box");
    var mobilemenulinks = document.getElementById("mobile-menu-links");

    if (article.style.display === "none") {
        article.style.display = "block";
        textbox.style.display = "block";
        mygarden.style.display = "none";
        listofgardens.style.display = "none";
        about.style.display = "none";
        mobilemenulinks.style.display = "none";
    } else {
        article.style.display = "block";
        textbox.style.display = "none";
        mygarden.style.display = "none";
        listofgardens.style.display = "none";
        about.style.display = "none";
        mobilemenulinks.style.display = "none";
    }
}

function mobilearticle() {
    var article = document.getElementById("article");
    var mygarden = document.getElementById("mygarden");
    var listofgardens = document.getElementById("listofgardens");
    var about = document.getElementById("about");
    var textbox = document.getElementById("text-box");
    var mobilemenulinks = document.getElementById("mobile-menu-links");

    if (article.style.display === "none") {
        article.style.display = "block";
        textbox.style.display = "block";
        mygarden.style.display = "none";
        listofgardens.style.display = "none";
        about.style.display = "none";
        mobilemenulinks.style.display = "none";
    } else {
        article.style.display = "none";
        textbox.style.display = "none";
        mygarden.style.display = "none";
        listofgardens.style.display = "none";
        about.style.display = "none";
        mobilemenulinks.style.display = "none";
    }
}

function listofgardens() {
    var article = document.getElementById("article");
    var mygarden = document.getElementById("mygarden");
    var listofgardens = document.getElementById("listofgardens");
    var about = document.getElementById("about");
    var textbox = document.getElementById("text-box");
    var mobilemenulinks = document.getElementById("mobile-menu-links");

    if (listofgardens.style.display === "none") {
        listofgardens.style.display = "block";
        textbox.style.display = "block";
        article.style.display = "none";
        mygarden.style.display = "none";
        about.style.display = "none";
        mobilemenulinks.style.display = "none";
    } else {
        listofgardens.style.display = "none";
        textbox.style.display = "none";
        article.style.display = "block";
        mygarden.style.display = "none";
        about.style.display = "none";
        mobilemenulinks.style.display = "none";
    }
}

function mygarden() {
    var article = document.getElementById("article");
    var mygarden = document.getElementById("mygarden");
    var listofgardens = document.getElementById("listofgardens");
    var about = document.getElementById("about");
    var textbox = document.getElementById("text-box");
    var mobilemenulinks = document.getElementById("mobile-menu-links");

    if (mygarden.style.display === "none") {
        mygarden.style.display = "block";
        textbox.style.display = "block";
        article.style.display = "none";
        listofgardens.style.display = "none";
        about.style.display = "none";
        mobilemenulinks.style.display = "none";
    } else {
        mygarden.style.display = "none";
        textbox.style.display = "none";
        article.style.display = "block";
        listofgardens.style.display = "none";
        about.style.display = "none";
        mobilemenulinks.style.display = "none";
    }
}

function about() {
    var article = document.getElementById("article");
    var mygarden = document.getElementById("mygarden");
    var listofgardens = document.getElementById("listofgardens");
    var about = document.getElementById("about");
    var textbox = document.getElementById("text-box");
    var mobilemenulinks = document.getElementById("mobile-menu-links");

    if (about.style.display === "none") {
        about.style.display = "block";
        textbox.style.display = "block";
        article.style.display = "none";
        mygarden.style.display = "none";
        listofgardens.style.display = "none";
        mobilemenulinks.style.display = "none";
    } else {
        listofgardens.style.display = "none";
        textbox.style.display = "none";
        article.style.display = "none";
        mygarden.style.display = "none";
        about.style.display = "none";
        mobilemenulinks.style.display = "none";
    }
}

/* Mobile Menu */
function openMenu() {
    var x = document.getElementById("mobile-menu-links");
    var article = document.getElementById("article");
    if (x.style.display === "block") {
      x.style.display = "none";
      article.style.display = "block";
    } else {
      x.style.display = "block";
      article.style.display = "none";
    }
  }

/* Music */
function playSounds() {
    var audio = document.getElementById("audio");
    var playButton = document.getElementById("playSounds");
    var pauseButton = document.getElementById("pauseSounds");
    audio.play();
    if (playButton.style.display === "block") {
        playButton.style.display = "none";
        pauseButton.style.display = "block";
    } else {
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
}
function pauseSounds() {
    var audio = document.getElementById("audio");
    var playButton = document.getElementById("playSounds");
    var pauseButton = document.getElementById("pauseSounds");
    audio.pause();
    if (pauseButton.style.display === "block") {
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    } else {
        playButton.style.display = "none";
        pauseButton.style.display = "block";
    }
}