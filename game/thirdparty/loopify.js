(function() {

    function loopify(uri, cb) {

        var context = new(window.AudioContext || window.webkitAudioContext)(),
            request = new XMLHttpRequest();

        request.responseType = "arraybuffer";
        request.open("GET", uri, true);

        // XHR failed
        request.onerror = function() {
            cb(new Error("Couldn't load audio from " + uri));
        };

        // XHR complete
        request.onload = function() {
            context.decodeAudioData(request.response, success, function(err) {
                // Audio was bad
                cb(new Error("Couldn't decode audio from " + uri));
            });
        };

        request.send();

        function success(buffer) {

            var source;

            function play(delay) {

                // Stop if it's already playing
                stop();

                // Create a new source (can't replay an existing source)
                source = context.createBufferSource();
                source.connect(context.destination);

                // Set the buffer
                source.buffer = buffer;
                source.loop = true;

                // Play it
                source.start(delay);

            }

            function stop() {

                // Stop and clear if it's playing
                if (source) {
                    source.stop();
                    source = null;
                }

            }

            cb(null, {
                play: play,
                stop: stop
            });

        }

    }

    loopify.version = "0.1";

    if (typeof define === "function" && define.amd) {
        define(function() { return loopify; });
    } else if (typeof module === "object" && module.exports) {
        module.exports = loopify;
    } else {
        //Here is where it is connected
        this.loopify = loopify;
    }

})();