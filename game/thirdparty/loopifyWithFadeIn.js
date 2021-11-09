(function() {

    function loopifyWithFadeIn(uri, cb) {

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

            var source = null;

            var gainNode = null;

            function play(delay = 0) {

                // Stop if it's already playing
                stop();

                // Create a new source (can't replay an existing source)
                source = context.createBufferSource();


                // Set the buffer
                source.buffer = buffer;
                source.loop = true;

                gainNode = context.createGain();

                source.connect(gainNode);
                gainNode.connect(context.destination);

                gainNode.gain.setValueAtTime(0.0, context.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.0, delay + context.currentTime);
                gainNode.gain.linearRampToValueAtTime(1.0, delay + context.currentTime + 2);

                // Play it
                source.start(0);



            }

            function stop() {

                // Stop and clear if it's playing
                if (source) {
                    source.stop();
                    source = null;
                }

            }

            function stopWithFadeOut(dt) {
                if (gainNode) {
                    gainNode.gain.setValueAtTime(1.0, context.currentTime);
                    gainNode.gain.linearRampToValueAtTime(0.0, context.currentTime + dt);

                }

                if (source) {

                    source.stop(context.currentTime + dt);
                    source = null;
                }
            }

            function isPlaying() {
                return source != null;
            }

            cb(null, {
                play: play,
                stop: stop,
                stopWithFadeOut: stopWithFadeOut,
                isPlaying: isPlaying
            });

        }

    }

    loopifyWithFadeIn.version = "0.1";

    if (typeof define === "function" && define.amd) {
        define(function() { return loopifyWithFadeIn; });
    } else if (typeof module === "object" && module.exports) {
        module.exports = loopifyWithFadeIn;
    } else {
        this.loopifyWithFadeIn = loopifyWithFadeIn;
    }

})();