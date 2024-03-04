var $divs = $('#text-box, #background');
var sync = function(e){
    var $other = $divs.not(this).off('scroll'), other = $other.get(0);
    var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
    other.scrollLeft = percentage * (other.scrollWidth - other.offsetWidth);
    setTimeout( function(){ $other.on('scroll', sync ); },10);
}
$divs.on( 'scroll', sync);

