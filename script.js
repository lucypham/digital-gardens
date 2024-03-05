var $divs = $('#text-box, #background');
var sync = function(e){
    var $other = $divs.not(this).off('scroll'), other = $other.get(0);
    var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
    other.scrollLeft = percentage * (other.scrollWidth - other.offsetWidth);
    setTimeout( function(){ $other.on('scroll', sync ); },10);
}
$divs.on( 'scroll', sync);

function article() {
    var article = document.getElementById("text-box");
    var listofgardens = document.getElementById("listofgardens");
    var about = document.getElementById("about");

    if (article.style.display === "none") {
        article.style.display = "block";
        listofgardens.style.display = "none";
        about.style.display = "none";
    } else {
        article.style.display = "none";
        listofgardens.style.display = "none";
        about.style.display = "none";
    }
}

function listofgardens() {
    var article = document.getElementById("article");
    var listofgardens = document.getElementById("listofgardens");
    var about = document.getElementById("about");

    if (listofgardens.style.display === "none") {
        listofgardens.style.display = "block";
        article.style.display = "none";
        about.style.display = "none";
    } else {
        listofgardens.style.display = "none";
        article.style.display = "block";
        about.style.display = "none";
    }
}

function about() {
    var article = document.getElementById("article");
    var listofgardens = document.getElementById("listofgardens");
    var about = document.getElementById("about");

    if (about.style.display === "none") {
        about.style.display = "block";
        article.style.display = "none";
        listofgardens.style.display = "none";
    } else {
        listofgardens.style.display = "none";
        article.style.display = "none";
        about.style.display = "none";
    }
}