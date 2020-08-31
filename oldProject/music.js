let A_FREQ = 440; //Hz
const WHOLE_NOTE = 1;
let audioContext = new AudioContext();

document.querySelector('div').addEventListener('click', function() {
    audioContext.resume().then(() => {
      console.log('Playback resumed successfully');
    });
});

function frequency(key)
{
    return Math.pow(2,(key-49)/12)*A_FREQ;
}

function createFrequencies()
{
    let freq = [];
    for(let key = 16; key <= 88; key++) {
        freq.push(frequency(key));
    }
    return freq;
}

let frequencies = createFrequencies();

class Synthesizer
{
    constructor(frequency,singlepress=true,sustain=WHOLE_NOTE,sustained=false,type="sine")
    {
        // audioContext = new AudioContext();
        this.frequency = frequency;
        this.sustain = sustain;
        this.sustained = sustained;
        this.type = type;
        this.pressed = false;
        this.singlepress = singlepress;
        this.decay = 0.00001;
    }
    init()
    { 
        this.o = audioContext.createOscillator();
        this.o.frequency.value = this.frequency;
        this.o.type = this.type;
        this.g = audioContext.createGain();
        this.o.connect(this.g);
        this.g.connect(audioContext.destination);
    }
    changeType()
    {
        this.sustained = !this.sustained;
    }
    play()
    {
        if (this.singlepress) {
            this.init();
            this.o.start();
            this.g.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + this.sustain);
            // this.o.stop();
        } else
        {
            if (this.pressed == false) {
                this.init();
                this.o.start();
                this.pressed = true;
                if (this.sustained == false) {
                    this.g.gain.exponentialRampToValueAtTime(this.decay, audioContext.currentTime + this.sustain);
                }
            } else {
                this.pressed = false;
                this.g.gain.exponentialRampToValueAtTime(this.decay, audioContext.currentTime + this.sustain);
            }
        }
    }
}

let click = new Synthesizer(frequencies[25],true,0.2);

// https://en.wikipedia.org/wiki/Piano_key_frequencies#cite_note-:0-1