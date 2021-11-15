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

console.log("Ololo audio.js 6")

var music_stage_preload = "music_Runaway02"

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

var currentPlaySong = null;




function loopifyWithFadeInAsync(audioFileName) {
    return new Promise((resolve, reject) => {

        loopifyWithFadeIn(audioFileName, (err, loop) => {

            if (err) {
                console.warn(err);
                reject(err);
            }

            resolve(loop);
        });

    });
}


function loopifyAsync(audioFileName) {
    return new Promise((resolve, reject) => {

        loopify(audioFileName, (err, loop) => {

            if (err) {
                console.warn(err);
                reject(err);
            }

            resolve(loop);
        });

    });
}


function createSoundAsync(audioFileName) {
    return new Promise((resolve, reject) => {

        createSound(audioFileName, (err, loop) => {

            if (err) {
                console.warn(err);
                reject(err);
            }

            resolve(loop);
        });

    });
}

loopifyWithFadeIn("audio/music/Runaway_01 (Loop).ogg", function(err, loop) {

    if (err) {
        console.warn(err);
    }

    audio_Runaway_01 = loop;
});
/*
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
*/
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
/*
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
*/
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

/*
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


*/

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
    /*
        if (!audio_Runaway_02) {

            audio_Runaway_02 = await loopifyWithFadeInAsync("audio/music/Runaway_02 (Loop).ogg");
        }*/

    if (audio_Runaway_02) {
        audio_Runaway_02.play();
    } else {
        currentPlaySong = "Runaway02";
    }
}

function playRunaway03() {
    stopAllMusic();

    /*
    if (!audio_Runaway_03) {

        audio_Runaway_03 = await loopifyWithFadeInAsync("audio/music/Runaway_03 (Loop).ogg");
    }*/

    if (audio_Runaway_03) {
        audio_Runaway_03.play();
    } else {
        currentPlaySong = "Runaway03";
    }
}

function playRunaway04() {
    stopAllMusic();
    /*
        if (!audio_Runaway_04) {

            audio_Runaway_04 = await loopifyWithFadeInAsync("audio/music/Runaway_04 (Loop).ogg");
        }*/

    if (audio_Runaway_04) {
        audio_Runaway_04.play();
    } else {
        currentPlaySong = "Runaway04";
    }
}

function playRunaway05() {
    stopAllMusic();

    if (audio_Runaway_05) {
        audio_Runaway_05.play();
    } else {
        currentPlaySong = "Runaway05";
    }
}


function playCrossFadeRunaway06() {

    stopAllMusicExceptRunaway05();

    if (audio_Runaway_05) {
        audio_Runaway_05.stop();
    }
    if (audio_Runaway_06) {
        audio_Runaway_06.play();
    } else {
        currentPlaySong = "Runaway06";
    }
}

function playRunaway07() {

    if (audio_Runaway_07) {
        audio_Runaway_07.play();
    } else {
        currentPlaySong = "Runaway07";
    }
}


function stopRunaway07() {

    if (audio_Runaway_07) {
        audio_Runaway_07.stop(0);
    }
}

function playRunaway08() {
    stopAllMusic();

    if (audio_Runaway_08) {
        audio_Runaway_08.play();
    } else {
        currentPlaySong = "Runaway08";
    }
}


function playRunaway09() {
    stopAllMusic();
    console.log("playRunaway09 called");
    if (audio_Runaway_09) {
        console.log("playRunaway09 called, step 1");
        audio_Runaway_09.play();
    } else {
        console.log("playRunaway09 called, step 2");
        currentPlaySong = "Runaway09";
    }
    console.log("playRunaway09 called, step 3");
}


function playRunaway10() {
    stopAllMusic();
    if (audio_Runaway_10) {
        audio_Runaway_10.play();
    } else {
        currentPlaySong = "Runaway10";
    }
}

function playRunaway11() {
    stopAllMusic();
    if (audio_Runaway_11) {
        audio_Runaway_11.play();
    } else {
        currentPlaySong = "Runaway11";
    }
}

function playRunaway12() {
    stopAllMusic();
    if (audio_Runaway_12) {
        audio_Runaway_12.play();
    } else {
        currentPlaySong = "Runaway12";
    }
}

function playRunaway13() {
    stopAllMusic();
    if (audio_Runaway_13) {
        audio_Runaway_13.play();
    } else {
        currentPlaySong = "Runaway13";
    }
}

function playRunaway14() {
    stopAllMusic();
    if (audio_Runaway_14) {
        audio_Runaway_14.play();
    } else {
        currentPlaySong = "Runaway14";
    }
}

function playRunaway15() {
    stopAllMusic();
    if (audio_Runaway_15) {
        audio_Runaway_15.play();
    } else {
        currentPlaySong = "Runaway15";
    }
}


function playRunaway16() {
    stopAllMusic();
    if (audio_Runaway_16) {
        audio_Runaway_16.play();
    } else {
        currentPlaySong = "Runaway16";
    }
}

function play_airplane_1ambience_before_landing_loop() {
    stopAllMusicExceptRunaway07();

    if (audio_ambience_airplane_1ambience_before_landing_loop) {
        audio_ambience_airplane_1ambience_before_landing_loop.play();
    } else {
        currentPlaySong == "audio_ambience_airplane_1ambience_before_landing_loop";
    }
}

function play_sound_seatbelt() {
    if (audio_sound_seatbelt) {
        audio_sound_seatbelt.play();
    }
}

function play_airplane_2landed_shortened() {
    stopAllMusicExceptRunaway07();

    if (audio_ambience_airplane_2landed_shortened) {
        audio_ambience_airplane_2landed_shortened.play();
    } else {
        currentPlaySong == "audio_ambience_airplane_2landed_shortened";
    }
}


function play_audio_ambience_airplane_3after_landing_loop(delay = 2.5) {
    stopAllMusicExceptRunaway07();

    if (audio_ambience_airplane_3after_landing_loop) {
        audio_ambience_airplane_3after_landing_loop.play(delay);
    } else {
        currentPlaySong == "audio_ambience_airplane_3after_landing_loop";
    }
}


function play_audio_ambience_airplane_stopped_loop() {
    stopAllMusic();
    if (audio_ambience_airplane_stopped_loop) {
        audio_ambience_airplane_stopped_loop.play();
    } else {
        currentPlaySong == "audio_ambience_airplane_stopped_loop";
    }
}

function play_sound_aeroexpress() {
    if (audio_sound_aeroexpress) {
        audio_sound_aeroexpress.play();
    }
}


function play_audio_ambience_train() {
    stopAllMusic();
    if (audio_ambience_train) {
        audio_ambience_train.play();
    } else {
        currentPlaySong == "audio_ambience_train";
    }
}

function play_ambience_metro_station() {
    stopAllMusic();
    if (ambience_metro_station) {
        ambience_metro_station.play();
    } else {
        currentPlaySong == "ambience_metro_station";
    }
}

function play_ambience_metro_loop_before_train_depart() {
    stopAllMusic();
    if (ambience_metro_loop_before_train_depart) {
        ambience_metro_loop_before_train_depart.play();
    } else {
        currentPlaySong == "ambience_metro_loop_before_train_depart";
    }
}


function play_ambience_metro_doors_closing() {
    stopAllMusic();
    if (ambience_metro_doors_closing) {
        ambience_metro_doors_closing.play();
    } else {
        currentPlaySong == "ambience_metro_doors_closing";
    }
}


function play_ambience_metro_train_loop(delay) {
    if (ambience_metro_train_loop) {
        ambience_metro_train_loop.play(delay);
    } else {
        currentPlaySong == "ambience_metro_train_loop";
    }
}


function play_ambience_metro_arrived() {
    stopAllMusic();

    if (ambience_metro_arrived) {
        ambience_metro_arrived.play();
    } else {
        currentPlaySong == "ambience_metro_arrived";
    }
}


function play_ambience_metro_loop_after_arrival(delay = 2.5) {
    if (ambience_metro_loop_after_arrival) {
        ambience_metro_loop_after_arrival.play(delay);
    } else {
        currentPlaySong == "ambience_metro_loop_after_arrival";
    }
}

function play_ambience_kazakhstan_airplane_before_takeoff_ambience() {
    stopAllMusic();
    if (ambience_kazakhstan_airplane_before_takeoff_ambience) {
        ambience_kazakhstan_airplane_before_takeoff_ambience.play();
    } else {
        currentPlaySong == "ambience_kazakhstan_airplane_before_takeoff_ambience";
    }
}


function play_ambience_takeoff_kazakhstan() {
    stopAllMusic();
    if (ambience_takeoff_kazakhstan) {
        ambience_takeoff_kazakhstan.play();
    } else {
        currentPlaySong == "ambience_takeoff_kazakhstan";
    }
}


function play_ambience_kazakhstan_after_takeoff_ambience(delay = 2.5) {

    if (ambience_kazakhstan_after_takeoff_ambience) {
        ambience_kazakhstan_after_takeoff_ambience.play(delay);
    } else {
        currentPlaySong == "ambience_kazakhstan_after_takeoff_ambience";
    }
}


function play_sound_teaser_drum() {
    if (audio_sound_teaser_drum) {
        audio_sound_teaser_drum.play();
    }
}

function play_sound_teaser_vibro() {
    if (audio_sound_teaser_vibro) {
        audio_sound_teaser_vibro.play();
    }
}

function clearAllMusicExceptPreload() {
    if (music_stage_preload != "music_Runaway02") {
        if (audio_Runaway_02) {
            audio_Runaway_02.stop();
            audio_Runaway_02 = null;
        }
    }

    if ((music_stage_preload != "music_Runaway03") &&
        (music_stage_preload != "music_Runaway03_Runaway16") &&
        (music_stage_preload != "music_Runaway03_Runaway04") &&
        (music_stage_preload != "music_Runaway11_Runaway03") &&
        (music_stage_preload != "music_Runaway03_Runaway12")) {
        if (audio_Runaway_03) {
            audio_Runaway_03.stop();
            audio_Runaway_03 = null;
        }
    }
    if ((music_stage_preload != "music_Runaway03_Runaway04") &&
        (music_stage_preload != "music_Runaway04_airplane_sounds")) {
        if (audio_Runaway_04) {
            audio_Runaway_04.stop();
            audio_Runaway_04 = null;
        }
    }


    if ((music_stage_preload != "music_Runaway04_airplane_sounds") &&
        (music_stage_preload != "music_airplane_sounds_Runaway05") &&
        (music_stage_preload != "music_Runaway06_airplane2") &&
        (music_stage_preload != "music_airplane2_Runaway07") &&
        (music_stage_preload != "music_airplane2_Runaway08")) {
        if (audio_ambience_airplane_1ambience_before_landing_loop) {
            audio_ambience_airplane_1ambience_before_landing_loop.stop();
            audio_ambience_airplane_1ambience_before_landing_loop = null;
        }

        if (audio_ambience_airplane_2landed_shortened) {
            audio_ambience_airplane_2landed_shortened.stop();
            audio_ambience_airplane_1ambience_before_landing_loop = null;
        }

        if (audio_ambience_airplane_3after_landing_loop) {
            audio_ambience_airplane_3after_landing_loop.stop();
            audio_ambience_airplane_1ambience_before_landing_loop = null;
        }
    }


    if ((music_stage_preload != "music_airplane_sounds_Runaway05") &&
        (music_stage_preload != "music_Runaway05_Runaway06")) {
        if (audio_Runaway_05) {
            audio_Runaway_05.stop();
            audio_Runaway_05 = null;
        }
    }


    if ((music_stage_preload != "music_Runaway05_Runaway06") &&
        (music_stage_preload != "music_Runaway06_Runaway16") &&
        (music_stage_preload != "music_Runaway06_airplane2")) {
        if (audio_Runaway_06) {
            audio_Runaway_06.stop();
            audio_Runaway_06 = null;
        }
    }


    if ((music_stage_preload != "music_airplane2_Runaway07") &&
        (music_stage_preload != "music_airplane2_Runaway08")) {
        if (audio_ambience_airplane_stopped_loop) {
            audio_ambience_airplane_stopped_loop.stop();
            audio_ambience_airplane_stopped_loop = null;
        }
    }

    if ((music_stage_preload != "music_airplane2_Runaway07") &&
        (music_stage_preload != "music_airplane3_Runaway07")) {
        if (audio_Runaway_07) {
            audio_Runaway_07.stop();
            audio_Runaway_07 = null;
        }
    }

    if ((music_stage_preload != "music_airplane2_Runaway08") &&
        (music_stage_preload != "music_Runaway08_train") &&
        (music_stage_preload != "music_Runaway08")) {
        if (audio_Runaway_08) {
            audio_Runaway_08.stop();
            audio_Runaway_08 = null;
        }
    }


    if ((music_stage_preload != "music_Runaway08_train") &&
        (music_stage_preload != "music_train_metro")) {
        if (audio_ambience_train) {
            audio_ambience_train.stop();
            audio_ambience_train = null;
        }
    }

    if ((music_stage_preload != "music_train_metro") &&
        (music_stage_preload != "music_metro_Runaway09")) {
        if (ambience_metro_station) {
            ambience_metro_station.stop();
            ambience_metro_station = null;
        }
        /*
                    if (ambience_metro_loop_before_train_depart) {
                        ambience_metro_loop_before_train_depart.stop();
                        ambience_metro_loop_before_train_depart = null;
                    }

                    if (ambience_metro_doors_closing) {
                        ambience_metro_doors_closing.stop();
                        ambience_metro_doors_closing = null;
                    }

                    if (ambience_metro_train_loop) {
                        ambience_metro_train_loop.stop();
                        ambience_metro_train_loop = null;
                    }

                    if (ambience_metro_arrived) {
                        ambience_metro_arrived.stop();
                        ambience_metro_arrived = null;
                    }

                    if (ambience_metro_loop_after_arrival) {
                        ambience_metro_loop_after_arrival.stop();
                        ambience_metro_loop_after_arrival = null;
                    }*/
    }


    if ((music_stage_preload != "music_metro_Runaway09") &&
        (music_stage_preload != "music_Runaway09_Runaway10")) {
        if (audio_Runaway_09) {
            audio_Runaway_09.stop();
            audio_Runaway_09 = null;
        }
    }

    if ((music_stage_preload != "music_Runaway09_Runaway10") &&
        (music_stage_preload != "music_Runaway10_Runaway11")) {
        if (audio_Runaway_10) {
            audio_Runaway_10.stop();
            audio_Runaway_10 = null;
        }
    }

    if ((music_stage_preload != "music_Runaway10_Runaway11") &&
        (music_stage_preload != "music_Runaway11_Runaway03") &&
        (music_stage_preload != "music_Runaway16_Runaway11")) {
        if (audio_Runaway_11) {
            audio_Runaway_11.stop();
            audio_Runaway_11 = null;
        }
    }

    if ((music_stage_preload != "music_Runaway03_Runaway12") &&
        (music_stage_preload != "music_Runaway12_Runaway13")) {
        if (audio_Runaway_12) {
            audio_Runaway_12.stop();
            audio_Runaway_12 = null;
        }
    }

    if ((music_stage_preload != "music_Runaway12_Runaway13") &&
        (music_stage_preload != "music_Runaway13_Runaway14") &&
        (music_stage_preload != "music_Runaway13_Runaway16")) {
        if (audio_Runaway_13) {
            audio_Runaway_13.stop();
            audio_Runaway_13 = null;
        }
    }

    if ((music_stage_preload != "music_Runaway13_Runaway14") &&
        (music_stage_preload != "music_Runaway14_Runaway15")) {
        if (audio_Runaway_14) {
            audio_Runaway_14.stop();
            audio_Runaway_14 = null;
        }
    }

    if ((music_stage_preload != "music_Runaway14_Runaway15") &&
        (music_stage_preload != "music_Runaway15_airplane3")) {
        if (audio_Runaway_15) {
            audio_Runaway_15.stop();
            audio_Runaway_15 = null;
        }
    }

    if ((music_stage_preload != "music_Runaway03_Runaway16") &&
        (music_stage_preload != "music_Runaway06_Runaway16") &&
        (music_stage_preload != "music_Runaway13_Runaway16") &&
        (music_stage_preload != "music_Runaway16_Runaway11")) {
        if (audio_Runaway_16) {
            audio_Runaway_16.stop();
            audio_Runaway_16 = null;
        }
    }

    if ((music_stage_preload != "music_Runaway15_airplane3") &&
        (music_stage_preload != "music_airplane3_Runaway07")) {

        if (ambience_kazakhstan_airplane_before_takeoff_ambience) {
            ambience_kazakhstan_airplane_before_takeoff_ambience.stop();
            ambience_kazakhstan_airplane_before_takeoff_ambience = null;
        }


        if (ambience_takeoff_kazakhstan) {
            ambience_takeoff_kazakhstan.stop();
            ambience_takeoff_kazakhstan = null;
        }

        if (ambience_kazakhstan_after_takeoff_ambience) {
            ambience_kazakhstan_after_takeoff_ambience.stop();
            ambience_kazakhstan_after_takeoff_ambience = null;
        }
    }

}

//-----------------------------------

function PreloadRequiredTracksAsync(callback1, callback2, callback3) {
    PreloadRequiredTracks(callback1, callback2, callback3);
}

//function PreloadRequiredTracks(callback1, callback2, callback3) {}


async function PreloadRequiredTracks(callback1, callback2, callback3) {

    if (music_stage_preload == "music_Runaway02") {
        if (!audio_Runaway_02) {

            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_02 (Loop).ogg");

            if (music_stage_preload == "music_Runaway02") {

                if (audio_Runaway_02 == null) {

                    audio_Runaway_02 = audio;

                    if (currentPlaySong == "Runaway02") {
                        playRunaway02();
                    }
                }
            }

        }
    }

    if ((music_stage_preload == "music_Runaway03") ||
        (music_stage_preload == "music_Runaway03_Runaway16") ||
        (music_stage_preload == "music_Runaway03_Runaway04") ||
        (music_stage_preload == "music_Runaway11_Runaway03") ||
        (music_stage_preload == "music_Runaway03_Runaway12")) {
        if (!audio_Runaway_03) {

            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_03 (Loop).ogg");


            if ((music_stage_preload == "music_Runaway03") ||
                (music_stage_preload == "music_Runaway03_Runaway16") ||
                (music_stage_preload == "music_Runaway03_Runaway04") ||
                (music_stage_preload == "music_Runaway11_Runaway03") ||
                (music_stage_preload == "music_Runaway03_Runaway12")) {

                if (audio_Runaway_03 == null) {

                    audio_Runaway_03 = audio;

                    if (currentPlaySong == "Runaway03") {
                        playRunaway03();
                    }
                }
            }


        }
    }
    if ((music_stage_preload == "music_Runaway03_Runaway04") ||
        (music_stage_preload == "music_Runaway04_airplane_sounds")) {
        if (!audio_Runaway_04) {
            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_04.ogg");


            if ((music_stage_preload == "music_Runaway03_Runaway04") ||
                (music_stage_preload == "music_Runaway04_airplane_sounds")) {

                if (audio_Runaway_04 == null) {

                    audio_Runaway_04 = audio;

                    if (currentPlaySong == "Runaway04") {
                        playRunaway04();
                    }
                }

            }


        }
    }


    if ((music_stage_preload == "music_Runaway04_airplane_sounds") ||
        (music_stage_preload == "music_airplane_sounds_Runaway05") ||
        (music_stage_preload == "music_Runaway06_airplane2") ||
        (music_stage_preload == "music_airplane2_Runaway07") ||
        (music_stage_preload == "music_airplane2_Runaway08")) {

        if (!audio_ambience_airplane_1ambience_before_landing_loop) {
            var audio = await loopifyWithFadeInAsync("audio/ambience/airplane_1ambience_before_landing_loop.ogg");

            if ((music_stage_preload == "music_Runaway04_airplane_sounds") ||
                (music_stage_preload == "music_airplane_sounds_Runaway05") ||
                (music_stage_preload == "music_Runaway06_airplane2") ||
                (music_stage_preload == "music_airplane2_Runaway07") ||
                (music_stage_preload == "music_airplane2_Runaway08")) {

                if (audio_ambience_airplane_1ambience_before_landing_loop == null) {
                    audio_ambience_airplane_1ambience_before_landing_loop = audio;
                    if (currentPlaySong == "audio_ambience_airplane_1ambience_before_landing_loop") {
                        play_airplane_1ambience_before_landing_loop();
                    }
                }
            }
        }
    }

    if ((music_stage_preload == "music_Runaway04_airplane_sounds") ||
        (music_stage_preload == "music_airplane_sounds_Runaway05") ||
        (music_stage_preload == "music_Runaway06_airplane2") ||
        (music_stage_preload == "music_airplane2_Runaway07") ||
        (music_stage_preload == "music_airplane2_Runaway08")) {

        if (!audio_ambience_airplane_2landed_shortened) {
            var audio = await loopifyWithFadeInAsync("audio/ambience/airplane_2landed_shortened.ogg");

            if ((music_stage_preload == "music_Runaway04_airplane_sounds") ||
                (music_stage_preload == "music_airplane_sounds_Runaway05") ||
                (music_stage_preload == "music_Runaway06_airplane2") ||
                (music_stage_preload == "music_airplane2_Runaway07") ||
                (music_stage_preload == "music_airplane2_Runaway08")) {

                if (audio_ambience_airplane_2landed_shortened == null) {
                    audio_ambience_airplane_2landed_shortened = audio;
                    if (currentPlaySong == "audio_ambience_airplane_2landed_shortened") {
                        play_airplane_2landed_shortened();
                    }
                }
            }
        }
    }

    if ((music_stage_preload == "music_Runaway04_airplane_sounds") ||
        (music_stage_preload == "music_airplane_sounds_Runaway05") ||
        (music_stage_preload == "music_Runaway06_airplane2") ||
        (music_stage_preload == "music_airplane2_Runaway07") ||
        (music_stage_preload == "music_airplane2_Runaway08")) {

        if (!audio_ambience_airplane_3after_landing_loop) {
            var audio = await loopifyWithFadeInAsync("audio/ambience/airplane_3after_landing_loop.ogg");

            if ((music_stage_preload == "music_Runaway04_airplane_sounds") ||
                (music_stage_preload == "music_airplane_sounds_Runaway05") ||
                (music_stage_preload == "music_Runaway06_airplane2") ||
                (music_stage_preload == "music_airplane2_Runaway07") ||
                (music_stage_preload == "music_airplane2_Runaway08")) {

                if (audio_ambience_airplane_3after_landing_loop == null) {
                    audio_ambience_airplane_3after_landing_loop = audio;
                    if (currentPlaySong == "audio_ambience_airplane_3after_landing_loop") {
                        play_audio_ambience_airplane_3after_landing_loop();
                    }
                }
            }
        }
    }

    if ((music_stage_preload == "music_airplane_sounds_Runaway05") ||
        (music_stage_preload == "music_Runaway05_Runaway06")) {


        if (!audio_Runaway_05) {
            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_05 (Loop).ogg");

            if ((music_stage_preload == "music_airplane_sounds_Runaway05") ||
                (music_stage_preload == "music_Runaway05_Runaway06")) {

                if (audio_Runaway_05 == null) {
                    audio_Runaway_05 = audio;

                    if (currentPlaySong == "Runaway05") {
                        playRunaway05();
                    }
                }
            }
        }
    }


    if ((music_stage_preload == "music_Runaway05_Runaway06") ||
        (music_stage_preload == "music_Runaway06_Runaway16") ||
        (music_stage_preload == "music_Runaway06_airplane2")) {

        if (!audio_Runaway_06) {
            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_06 (Loop).ogg");

            if ((music_stage_preload == "music_Runaway05_Runaway06") ||
                (music_stage_preload == "music_Runaway06_Runaway16") ||
                (music_stage_preload == "music_Runaway06_airplane2")) {

                if (audio_Runaway_06 == null) {
                    audio_Runaway_06 = audio;

                    if (currentPlaySong == "Runaway06") {
                        playCrossFadeRunaway06();
                    }
                }
            }
        }
    }


    if ((music_stage_preload != "music_airplane2_Runaway07") &&
        (music_stage_preload != "music_airplane3_Runaway07")) {
        if (!audio_Runaway_07) {

            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_07 (Main_Theme).ogg");

            if ((music_stage_preload != "music_airplane2_Runaway07") &&
                (music_stage_preload != "music_airplane3_Runaway07")) {

                if (audio_Runaway_07 == null) {
                    audio_Runaway_07 = audio;

                    if (currentPlaySong == "Runaway07") {
                        playRunaway07();
                    }
                }

            }
        }
    }


    if ((music_stage_preload == "music_airplane2_Runaway07") ||
        (music_stage_preload == "music_airplane2_Runaway08")) {
        if (!audio_ambience_airplane_stopped_loop) {

            var audio = await loopifyWithFadeInAsync("audio/ambience/airplane_stopped_loop.ogg");

            if ((music_stage_preload == "music_airplane2_Runaway07") ||
                (music_stage_preload == "music_airplane2_Runaway08")) {

                if (audio_ambience_airplane_stopped_loop == null) {
                    audio_ambience_airplane_stopped_loop = audio;

                    if (currentPlaySong == "audio_ambience_airplane_stopped_loop") {
                        play_audio_ambience_airplane_stopped_loop();
                    }
                }

            }

        }
    }

    if ((music_stage_preload == "music_airplane2_Runaway08") ||
        (music_stage_preload == "music_Runaway08_train") ||
        (music_stage_preload == "music_Runaway08")) {

        if (!audio_Runaway_08) {
            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_08 (Loop).ogg");

            if ((music_stage_preload == "music_airplane2_Runaway08") ||
                (music_stage_preload == "music_Runaway08_train") ||
                (music_stage_preload == "music_Runaway08")) {

                if (audio_Runaway_08 == null) {
                    audio_Runaway_08 = audio;

                    if (currentPlaySong == "Runaway08") {
                        playRunaway08();
                    }
                }
            }
        }
    }




    if ((music_stage_preload == "music_Runaway08_train") ||
        (music_stage_preload == "music_train_metro")) {
        if (!audio_ambience_train) {

            var audio = await loopifyWithFadeInAsync("audio/ambience/440611__florianreichelt__train-ambience.ogg");

            if ((music_stage_preload == "music_Runaway08_train") ||
                (music_stage_preload == "music_train_metro")) {

                if (audio_ambience_train == null) {
                    audio_ambience_train = audio;

                    if (currentPlaySong == "audio_ambience_train") {
                        play_audio_ambience_train();
                    }
                }

            }

        }
    }


    if ((music_stage_preload == "music_train_metro") ||
        (music_stage_preload == "music_metro_Runaway09")) {
        if (!ambience_metro_station) {

            var audio = await loopifyWithFadeInAsync("audio/ambience/metro_station.ogg");

            if ((music_stage_preload == "music_train_metro") ||
                (music_stage_preload == "music_metro_Runaway09")) {

                if (ambience_metro_station == null) {
                    ambience_metro_station = audio;

                    if (currentPlaySong == "ambience_metro_station") {
                        play_ambience_metro_station();
                    }
                }

            }
        }
    }
    /*
            if ((music_stage_preload == "music_train_metro") ||
                (music_stage_preload == "music_metro_Runaway09")) {

                if (!ambience_metro_loop_before_train_depart) {
                    var audio = await loopifyWithFadeInAsync("audio/ambience/metro_loop_before_train_depart.ogg");

                    if ((music_stage_preload == "music_train_metro") ||
                        (music_stage_preload == "music_metro_Runaway09")) {

                        if (ambience_metro_loop_before_train_depart == null) {
                            ambience_metro_loop_before_train_depart = audio;

                            if (currentPlaySong == "ambience_metro_loop_before_train_depart") {
                                play_ambience_metro_loop_before_train_depart();
                            }
                        }

                    }
                }

            }

            if ((music_stage_preload == "music_train_metro") ||
                (music_stage_preload == "music_metro_Runaway09")) {

                if (!ambience_metro_doors_closing) {
                    var audio = await loopifyWithFadeInAsync("audio/ambience/metro_doors_closing.ogg");

                    if ((music_stage_preload == "music_train_metro") ||
                        (music_stage_preload == "music_metro_Runaway09")) {

                        if (ambience_metro_doors_closing == null) {
                            ambience_metro_doors_closing = audio;

                            if (currentPlaySong == "ambience_metro_doors_closing") {
                                play_ambience_metro_doors_closing();
                            }
                        }
                    }
                }

            }

            if ((music_stage_preload == "music_train_metro") ||
                (music_stage_preload == "music_metro_Runaway09")) {

                if (!ambience_metro_train_loop) {
                    var audio = await loopifyWithFadeInAsync("audio/ambience/metro_train_loop.ogg");

                    if ((music_stage_preload == "music_train_metro") ||
                        (music_stage_preload == "music_metro_Runaway09")) {

                        if (ambience_metro_train_loop == null) {
                            ambience_metro_train_loop = audio;

                            if (currentPlaySong == "ambience_metro_train_loop") {
                                play_ambience_metro_train_loop();
                            }
                        }

                    }
                }

            }

            if ((music_stage_preload == "music_train_metro") ||
                (music_stage_preload == "music_metro_Runaway09")) {

                if (!ambience_metro_arrived) {

                    var audio = await loopifyWithFadeInAsync("audio/ambience/metro_arrived.ogg");

                    if ((music_stage_preload == "music_train_metro") ||
                        (music_stage_preload == "music_metro_Runaway09")) {

                        if (ambience_metro_arrived == null) {
                            ambience_metro_arrived = audio;

                            if (currentPlaySong == "ambience_metro_arrived") {
                                play_ambience_metro_arrived();
                            }
                        }

                    }

                }

            }

            if ((music_stage_preload == "music_train_metro") ||
                (music_stage_preload == "music_metro_Runaway09")) {

                if (!ambience_metro_loop_after_arrival) {
                    var audio = await loopifyWithFadeInAsync("audio/ambience/metro_loop_after_arrival.ogg");

                    if ((music_stage_preload == "music_train_metro") ||
                        (music_stage_preload == "music_metro_Runaway09")) {

                        if (ambience_metro_loop_after_arrival == null) {
                            ambience_metro_loop_after_arrival = audio;

                            if (currentPlaySong == "ambience_metro_loop_after_arrival") {
                                play_ambience_metro_loop_after_arrival();
                            }
                        }

                    }
                }
            }
        */


    if ((music_stage_preload == "music_metro_Runaway09") ||
        (music_stage_preload == "music_Runaway09_Runaway10")) {
        if (!audio_Runaway_09) {
            console.log("Start loading Runaway_09, step 1");
            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_09 (Loop).ogg");
            console.log("Loading Runaway_09, step 2");

            if ((music_stage_preload == "music_metro_Runaway09") ||
                (music_stage_preload == "music_Runaway09_Runaway10")) {

                console.log("Loading Runaway_09, step 3");

                if (audio_Runaway_09 == null) {
                    console.log("Loading Runaway_09, step 4");
                    audio_Runaway_09 = audio;

                    if (currentPlaySong == "Runaway09") {
                        console.log("Loading Runaway_09, step 5");
                        playRunaway09();
                    }
                    console.log("Loading Runaway_09, step 6");
                }

                console.log("Loading Runaway_09, step 7");

            }

            console.log("Loading Runaway_09, step 8");
        }
    }

    if ((music_stage_preload == "music_Runaway09_Runaway10") ||
        (music_stage_preload == "music_Runaway10_Runaway11")) {
        if (!audio_Runaway_10) {
            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_10 (Loop).ogg");

            if ((music_stage_preload == "music_Runaway09_Runaway10") ||
                (music_stage_preload == "music_Runaway10_Runaway11")) {

                if (audio_Runaway_10 == null) {
                    audio_Runaway_10 = audio;

                    if (currentPlaySong == "Runaway10") {
                        playRunaway10();
                    }
                }
            }
        }
    }

    if ((music_stage_preload == "music_Runaway10_Runaway11") ||
        (music_stage_preload == "music_Runaway11_Runaway03") ||
        (music_stage_preload == "music_Runaway16_Runaway11")) {
        if (!audio_Runaway_11) {

            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_11 (Loop).ogg");

            if ((music_stage_preload == "music_Runaway10_Runaway11") ||
                (music_stage_preload == "music_Runaway11_Runaway03") ||
                (music_stage_preload == "music_Runaway16_Runaway11")) {
                if (audio_Runaway_11 == null) {
                    audio_Runaway_11 = audio;

                    if (currentPlaySong == "Runaway11") {
                        playRunaway11();
                    }
                }
            }


        }
    }

    if ((music_stage_preload == "music_Runaway03_Runaway12") ||
        (music_stage_preload == "music_Runaway12_Runaway13")) {
        if (!audio_Runaway_12) {
            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_12 (Loop).ogg");

            if ((music_stage_preload == "music_Runaway03_Runaway12") ||
                (music_stage_preload == "music_Runaway12_Runaway13")) {
                if (audio_Runaway_12 == null) {
                    audio_Runaway_12 = audio;

                    if (currentPlaySong == "Runaway12") {
                        playRunaway12();
                    }
                }
            }
        }
    }

    if ((music_stage_preload == "music_Runaway12_Runaway13") ||
        (music_stage_preload == "music_Runaway13_Runaway14") ||
        (music_stage_preload == "music_Runaway13_Runaway16")) {
        if (!audio_Runaway_13) {

            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_13 (Loop).ogg");

            if ((music_stage_preload == "music_Runaway12_Runaway13") ||
                (music_stage_preload == "music_Runaway13_Runaway14") ||
                (music_stage_preload == "music_Runaway13_Runaway16")) {

                if (audio_Runaway_13 == null) {
                    audio_Runaway_13 = audio;

                    if (currentPlaySong == "Runaway13") {
                        playRunaway13();
                    }
                }
            }


        }

    }


    if ((music_stage_preload == "music_Runaway13_Runaway14") ||
        (music_stage_preload == "music_Runaway14_Runaway15")) {
        if (!audio_Runaway_14) {

            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_14 (Loop).ogg");
            if ((music_stage_preload == "music_Runaway13_Runaway14") ||
                (music_stage_preload == "music_Runaway14_Runaway15")) {
                if (audio_Runaway_14 == null) {
                    audio_Runaway_14 = audio;

                    if (currentPlaySong == "Runaway14") {
                        playRunaway14();
                    }
                }

            }

        }
    }

    if ((music_stage_preload == "music_Runaway14_Runaway15") ||
        (music_stage_preload == "music_Runaway15_airplane3")) {
        if (!audio_Runaway_15) {

            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_15 (Loop).ogg");

            if ((music_stage_preload == "music_Runaway14_Runaway15") ||
                (music_stage_preload == "music_Runaway15_airplane3")) {
                if (audio_Runaway_15 == null) {
                    audio_Runaway_15 = audio;

                    if (currentPlaySong == "Runaway15") {
                        playRunaway15();
                    }
                }
            }




        }
    }

    if ((music_stage_preload == "music_Runaway03_Runaway16") ||
        (music_stage_preload == "music_Runaway06_Runaway16") ||
        (music_stage_preload == "music_Runaway13_Runaway16") ||
        (music_stage_preload == "music_Runaway16_Runaway11")) {
        if (!audio_Runaway_16) {
            var audio = await loopifyWithFadeInAsync("audio/music/Runaway_16 (Loop).ogg");

            if ((music_stage_preload == "music_Runaway03_Runaway16") ||
                (music_stage_preload == "music_Runaway06_Runaway16") ||
                (music_stage_preload == "music_Runaway13_Runaway16") ||
                (music_stage_preload == "music_Runaway16_Runaway11")) {

                if (audio_Runaway_16 == null) {
                    audio_Runaway_16 = audio;

                    if (currentPlaySong == "Runaway16") {
                        playRunaway16();
                    }
                }
            }
        }
    }


    if ((music_stage_preload == "music_Runaway15_airplane3") ||
        (music_stage_preload == "music_airplane3_Runaway07")) {

        if (!ambience_kazakhstan_airplane_before_takeoff_ambience) {

            var audio = await loopifyWithFadeInAsync("audio/ambience/kazakhstan_airplane_before_takeoff_ambience.ogg");

            if ((music_stage_preload == "music_Runaway15_airplane3") ||
                (music_stage_preload == "music_airplane3_Runaway07")) {

                if (ambience_kazakhstan_airplane_before_takeoff_ambience == null) {
                    ambience_kazakhstan_airplane_before_takeoff_ambience = audio;

                    if (currentPlaySong == "ambience_kazakhstan_airplane_before_takeoff_ambience") {
                        play_ambience_kazakhstan_airplane_before_takeoff_ambience();
                    }
                }
            }

        }

    }

    if ((music_stage_preload == "music_Runaway15_airplane3") ||
        (music_stage_preload == "music_airplane3_Runaway07")) {

        if (!ambience_takeoff_kazakhstan) {

            var audio = await loopifyWithFadeInAsync("audio/ambience/takeoff_kazakhstan.ogg");

            if ((music_stage_preload == "music_Runaway15_airplane3") ||
                (music_stage_preload == "music_airplane3_Runaway07")) {

                if (ambience_takeoff_kazakhstan == null) {
                    ambience_takeoff_kazakhstan = audio;

                    if (currentPlaySong == "ambience_takeoff_kazakhstan") {
                        play_ambience_takeoff_kazakhstan();
                    }
                }
            }

        }

    }

    if ((music_stage_preload == "music_Runaway15_airplane3") ||
        (music_stage_preload == "music_airplane3_Runaway07")) {

        if (!ambience_kazakhstan_after_takeoff_ambience) {

            var audio = await loopifyWithFadeInAsync("audio/ambience/kazakhstan_after_takeoff_ambience.ogg");

            if ((music_stage_preload == "music_Runaway15_airplane3") ||
                (music_stage_preload == "music_airplane3_Runaway07")) {

                if (ambience_kazakhstan_after_takeoff_ambience == null) {
                    ambience_kazakhstan_after_takeoff_ambience = audio;

                    if (currentPlaySong == "ambience_kazakhstan_after_takeoff_ambience") {
                        play_ambience_kazakhstan_after_takeoff_ambience();
                    }
                }
            }
        }
    }

    if (callback1) {
        await callback1();
    }

    if (callback2) {
        await callback2();
    }

    if (callback3) {
        await callback3();
    }
}