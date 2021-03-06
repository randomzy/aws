class UI {
  constructor(player,obj) {
    //player specific
    this.player = player;
    this.currentTime = null;
    this.totalTime = null;

    //depending on user input
    this.bpm = null;
    this.chords = [];
    this.totalBeats = null;
    this.spb = null;

    //view specific
    this.reelsContainer = document.querySelector(".reels-container");
    this.metronomeCheckbox = document.querySelector(".metronome-checkbox");
    this.bpmContainer = document.querySelector(".bpm");

    this.init(obj);
  }

  init(obj) {
    this.totalTime = this.player.getDuration() - 1; //compensate for off-by-1 error in youtube api
  
    if (typeof obj.bpm !== "undefined") {
      this.bpm = obj.bpm;
    } else {
      console.error("[ERROR]Unable to get get bpm. Check database and object passing.");
      this.bpm = 0;
    }

    this.bpmContainer.innerHTML = `Beats per minute ( &#9833 = ${this.bpm} )`;
    let bps = this.bpm / 60;

    this.totalBeats = Math.ceil(bps * this.totalTime);
    this.spb = 1 / bps;

    this._setTitle();
    // this._genChords();
    this._createTiles();

    console.log("%c [Player: Loaded] ", "background: #222; color: #bada55");
  }

  handleReelScroll(id) {
    this.prevId = this.prevId || 0;
    const reel = document.querySelector(`.reel:nth-child(${id})`);
    this.prevReel = this.prevReel || reel;
    this.prevReel.style.backgroundColor = "white";
    reel.style.backgroundColor = "crimson";

    if (!reel) return;
    
    //disables smooth scroll if we rewind the video
    if (Math.abs(this.prevId - id) >= 5) {
      this.reelsContainer.scroll({
        //10 is magical constant - its marginLeft + marginRight of reel element in  stylesheet
        left: 4 * Math.floor(id/4) * ( reel.offsetWidth + 10) + 10
      }); 
      this.prevId = id;
    }
    
    //scroll every fourth beat
    if (id%4 == 0) {
      this.reelsContainer.scroll({
        //10 is magical constant - its marginLeft + marginRight of reel element in stylesheet
        left: (id-1) * ( reel.offsetWidth + 10) + 10,
        behavior: "smooth"
      }); 
      this.prevId = id;
    }
    this.prevReel = reel;
  }

  _setTitle() {
    document.querySelector(".song-title").innerHTML = this.player.getVideoData().title;
  }

}