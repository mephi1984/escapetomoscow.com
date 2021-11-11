function createSound(uri, cb) {
    var context = new(window.AudioContext || window.webkitAudioContext)(),
        request = new XMLHttpRequest();

    request.responseType = "arraybuffer";
    request.open("GET", uri, true);

    // XHR failed
    request.onerror = function() {
        cb(new Error("Couldn't load audio from " + uri));
    };

    function success(buffer) {

        var source = null;

        function play() {

            // Stop if it's already playing
            stop();

            // Create a new source (can't replay an existing source)
            source = context.createBufferSource();


            // Set the buffer
            source.buffer = buffer;
            //source.loop = true;

            source.connect(context.destination);

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

        function isPlaying() {
            return source != null;
        }

        cb(null, {
            play: play,
            stop: stop,
            isPlaying: isPlaying
        });

    }

    // XHR complete
    request.onload = function() {
        context.decodeAudioData(request.response, success, function(err) {
            // Audio was bad
            cb(new Error("Couldn't decode audio from " + uri));
        });
    };


    request.send();


}


var audio_Runaway_01 = null;

var audio_Runaway_02 = null;

var audio_Runaway_03 = null;

var audio_Runaway_04 = null;

var audio_Runaway_05 = null;

var audio_Runaway_06 = null;

var audio_Runaway_07 = null;

var audio_Runaway_08 = null;

var audio_Runaway_09 = null;

var audio_Runaway_10 = null;

var audio_Runaway_11 = null;

var audio_Runaway_12 = null;

var audio_Runaway_13 = null;

var audio_Runaway_14 = null;

var audio_Runaway_15 = null;

var audio_Runaway_16 = null;

var audio_ambience_airplane_1ambience_before_landing_loop = null;

var audio_sound_seatbelt = null;

var audio_ambience_airplane_2landed_shortened = null;

var audio_ambience_airplane_3after_landing_loop = null;

var audio_ambience_airplane_stopped_loop = null;

var audio_sound_aeroexpress = null;

var audio_ambience_train = null;

var ambience_metro_station = null;

var ambience_metro_loop_before_train_depart = null;

var ambience_metro_doors_closing = null;

var ambience_metro_train_loop = null;

var ambience_metro_arrived = null;

var ambience_metro_loop_after_arrival = null;

var ambience_kazakhstan_airplane_before_takeoff_ambience = null;

var ambience_takeoff_kazakhstan = null;

var ambience_kazakhstan_after_takeoff_ambience = null;


var audio_sound_teaser_drum = null;

var audio_sound_teaser_vibro = null;



loopifyWithFadeIn("audio/music/Runaway_01 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_01 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_02 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_02 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_03 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_03 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_04.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_04 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_05 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_05 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_06 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_06 = loop;
});

loopify("audio/music/Runaway_07 (Main_Theme).ogg", function(err, sound) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_07 = sound;
});


loopifyWithFadeIn("audio/music/Runaway_08 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_08 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_09 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_09 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_10 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_10 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_11 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_11 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_12 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_12 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_13 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_13 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_14 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_14 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_15 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_15 = loop;
});

loopifyWithFadeIn("audio/music/Runaway_16 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_16 = loop;
});

loopifyWithFadeIn("audio/ambience/airplane_1ambience_before_landing_loop.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_ambience_airplane_1ambience_before_landing_loop = loop;
});

createSound("audio/sound/seatbelt.ogg", function(err, sound) {

    if (err) {
        console.warn(err);
    }

    audio_sound_seatbelt = sound;
});

createSound("audio/sound/aeroexpress.ogg", function(err, sound) {

    if (err) {
        console.warn(err);
    }

    audio_sound_aeroexpress = sound;
});

createSound("audio/ambience/airplane_2landed_shortened.ogg", function(err, sound) {

    if (err) {
        console.warn(err);
    }

    audio_ambience_airplane_2landed_shortened = sound;
});

loopify("audio/ambience/airplane_3after_landing_loop.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_ambience_airplane_3after_landing_loop = loop;
});

loopifyWithFadeIn("audio/ambience/airplane_stopped_loop.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_ambience_airplane_stopped_loop = loop;
});


loopifyWithFadeIn("audio/ambience/440611__florianreichelt__train-ambience.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_ambience_train = loop;
});

loopifyWithFadeIn("audio/ambience/metro_station.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    ambience_metro_station = loop;
});


loopifyWithFadeIn("audio/ambience/metro_loop_before_train_depart.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    ambience_metro_loop_before_train_depart = loop;
});


createSound("audio/ambience/metro_doors_closing.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    ambience_metro_doors_closing = loop;
});



loopifyWithFadeIn("audio/ambience/metro_train_loop.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    ambience_metro_train_loop = loop;
});


createSound("audio/ambience/metro_arrived.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    ambience_metro_arrived = loop;
});



loopifyWithFadeIn("audio/ambience/metro_loop_after_arrival.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    ambience_metro_loop_after_arrival = loop;
});

loopifyWithFadeIn("audio/ambience/kazakhstan_airplane_before_takeoff_ambience.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    ambience_kazakhstan_airplane_before_takeoff_ambience = loop;
});




createSound("audio/ambience/takeoff_kazakhstan.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    ambience_takeoff_kazakhstan = loop;
});


createSound("audio/ambience/kazakhstan_after_takeoff_ambience.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    ambience_kazakhstan_after_takeoff_ambience = loop;
});




createSound("audio/sound/teaser/546621__jose-danielms__cinematic-drum-sub.ogg", function(err, sound) {

    if (err) {
        console.warn(err);
    }

    audio_sound_teaser_drum = sound;
});


createSound("audio/sound/teaser/555154__nomerodin1__vibrating-message.ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_sound_teaser_vibro = loop;
});


function stopAllMusicExceptRunaway05andRunaway07() {
    if (audio_Runaway_01) {
        audio_Runaway_01.stop();
    }

    if (audio_Runaway_02) {
        audio_Runaway_02.stop();
    }

    if (audio_Runaway_03) {
        audio_Runaway_03.stop();
    }

    if (audio_Runaway_04) {
        audio_Runaway_04.stop();
    }

    if (audio_Runaway_06) {
        audio_Runaway_06.stop();
    }

    if (audio_Runaway_08) {
        audio_Runaway_08.stop();
    }

    if (audio_Runaway_09) {
        audio_Runaway_09.stop();
    }

    if (audio_Runaway_10) {
        audio_Runaway_10.stop();
    }

    if (audio_Runaway_11) {
        audio_Runaway_11.stop();
    }

    if (audio_Runaway_12) {
        audio_Runaway_12.stop();
    }

    if (audio_Runaway_13) {
        audio_Runaway_13.stop();
    }

    if (audio_Runaway_14) {
        audio_Runaway_14.stop();
    }

    if (audio_Runaway_15) {
        audio_Runaway_15.stop();
    }

    if (audio_Runaway_16) {
        audio_Runaway_16.stop();
    }

    if (audio_ambience_airplane_1ambience_before_landing_loop) {
        audio_ambience_airplane_1ambience_before_landing_loop.stop();
    }

    if (audio_ambience_airplane_2landed_shortened) {
        audio_ambience_airplane_2landed_shortened.stop();
    }

    if (audio_ambience_airplane_3after_landing_loop) {
        audio_ambience_airplane_3after_landing_loop.stop();
    }

    if (audio_ambience_airplane_stopped_loop) {
        audio_ambience_airplane_stopped_loop.stop();
    }

    if (audio_ambience_train) {
        audio_ambience_train.stop();
    }

    if (ambience_metro_station) {
        ambience_metro_station.stop();
    }

    if (ambience_metro_loop_before_train_depart) {
        ambience_metro_loop_before_train_depart.stop();
    }

    if (ambience_metro_doors_closing) {
        ambience_metro_doors_closing.stop();
    }

    if (ambience_metro_train_loop) {
        ambience_metro_train_loop.stop();
    }

    if (ambience_metro_arrived) {
        ambience_metro_arrived.stop();
    }

    if (ambience_metro_loop_after_arrival) {
        ambience_metro_loop_after_arrival.stop();
    }

    if (ambience_kazakhstan_airplane_before_takeoff_ambience) {
        ambience_kazakhstan_airplane_before_takeoff_ambience.stop();
    }

    if (ambience_takeoff_kazakhstan) {
        ambience_takeoff_kazakhstan.stop();
    }

    if (ambience_kazakhstan_after_takeoff_ambience) {
        ambience_kazakhstan_after_takeoff_ambience.stop();
    }
}

function stopAllMusicExceptRunaway05() {

    stopAllMusicExceptRunaway05andRunaway07();

    if (audio_Runaway_07) {
        audio_Runaway_07.stop();
    }

}

function stopAllMusicExceptRunaway07() {

    stopAllMusicExceptRunaway05andRunaway07();

    if (audio_Runaway_05) {
        audio_Runaway_05.stop();
    }
}

function stopAllMusic() {

    stopAllMusicExceptRunaway05andRunaway07();

    if (audio_Runaway_05) {
        audio_Runaway_05.stop();
    }

    if (audio_Runaway_07) {
        audio_Runaway_07.stop();
    }

}

function playRunaway01IfNotPlaying() {
    if (audio_Runaway_01) {
        if (!audio_Runaway_01.isPlaying()) {
            stopAllMusic();
            audio_Runaway_01.play();
        }
    }
}

function playRunaway01() {
    stopAllMusic();
    if (audio_Runaway_01) {
        audio_Runaway_01.play();
    }
}

function playRunaway02() {
    stopAllMusic();
    audio_Runaway_02.play();
}

function playRunaway03() {
    stopAllMusic();
    audio_Runaway_03.play();
}

function playRunaway04() {
    stopAllMusic();
    audio_Runaway_04.play();
}

function playRunaway05() {
    stopAllMusic();
    audio_Runaway_05.play();
}


function playCrossFadeRunaway06() {

    stopAllMusicExceptRunaway05();

    if (audio_Runaway_05) {
        audio_Runaway_05.stop();
    }
    audio_Runaway_06.play();
}

function playRunaway07() {
    audio_Runaway_07.play();
}


function stopRunaway07() {

    if (audio_Runaway_07) {
        audio_Runaway_07.stop(0);
    }
}

function playRunaway08() {
    stopAllMusic();
    audio_Runaway_08.play();
}


function playRunaway09() {
    stopAllMusic();
    audio_Runaway_09.play();
}


function playRunaway10() {
    stopAllMusic();
    audio_Runaway_10.play();
}

function playRunaway11() {
    stopAllMusic();
    audio_Runaway_11.play();
}

function playRunaway12() {
    stopAllMusic();
    audio_Runaway_12.play();
}

function playRunaway13() {
    stopAllMusic();
    audio_Runaway_13.play();
}

function playRunaway14() {
    stopAllMusic();
    audio_Runaway_14.play();
}

function playRunaway15() {
    stopAllMusic();
    audio_Runaway_15.play();
}


function playRunaway16() {
    stopAllMusic();
    audio_Runaway_16.play();
}

function play_airplane_1ambience_before_landing_loop() {
    stopAllMusicExceptRunaway07();
    audio_ambience_airplane_1ambience_before_landing_loop.play();
}

function play_sound_seatbelt() {
    audio_sound_seatbelt.play();
}

function play_airplane_2landed_shortened() {
    stopAllMusicExceptRunaway07();
    audio_ambience_airplane_2landed_shortened.play();
}


function play_audio_ambience_airplane_3after_landing_loop(delay = 2.5) {
    stopAllMusicExceptRunaway07();
    audio_ambience_airplane_3after_landing_loop.play(delay);
}


function play_audio_ambience_airplane_stopped_loop() {
    stopAllMusic();
    audio_ambience_airplane_stopped_loop.play();
}

function play_sound_aeroexpress() {
    audio_sound_aeroexpress.play();
}


function play_audio_ambience_train() {
    stopAllMusic();
    audio_ambience_train.play();
}

function play_ambience_metro_station() {
    stopAllMusic();
    ambience_metro_station.play();
}

function play_ambience_metro_loop_before_train_depart() {
    stopAllMusic();
    ambience_metro_loop_before_train_depart.play();
}


function play_ambience_metro_doors_closing() {
    stopAllMusic();
    ambience_metro_doors_closing.play();
}


function play_ambience_metro_train_loop(delay) {
    ambience_metro_train_loop.play(delay);
}


function play_ambience_metro_arrived() {
    stopAllMusic();
    ambience_metro_arrived.play();
}


function play_ambience_metro_loop_after_arrival(delay = 2.5) {
    ambience_metro_loop_after_arrival.play(delay);
}

function play_ambience_kazakhstan_airplane_before_takeoff_ambience() {
    stopAllMusic();
    ambience_kazakhstan_airplane_before_takeoff_ambience.play();
}


function play_ambience_takeoff_kazakhstan() {
    stopAllMusic();
    ambience_takeoff_kazakhstan.play();
}


function play_ambience_kazakhstan_after_takeoff_ambience(delay = 2.5) {
    ambience_kazakhstan_after_takeoff_ambience.play(delay);
}


function play_sound_teaser_drum() {
    audio_sound_teaser_drum.play();
}

function play_sound_teaser_vibro() {
    audio_sound_teaser_vibro.play();
}