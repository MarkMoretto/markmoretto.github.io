
to_seconds = function(minutes) {
    return Math.floor(minutes * 60)
}

to_ms = function(min_or_sec, is_minutes=false) {
    let s = min_or_sec;
    if (is_minutes == true) {
        s = to_seconds(s);
    }
    return s * 1000;
}

keepalive = function(t) {
    let ms = to_ms(t);
    window.setInterval(function() {
        window.location.reload();
    }, ms);
}

window.addEventListener('DOMContentLoaded', (event) => {
    var minutes = 10;
    var secs = to_ms(minutes, true);
    keepalive(secs);
});