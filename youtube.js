const tag = document.createElement("script");
const firstScriptTag = document.getElementsByTagName("script")[0];

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let youtubePlayer;

class YoutubePLayer {
  constructor(videoId) {
    this.isPlaying = false;
    this.prevPlayerState = false;
    this.progressNorm = 0;
    this.updateInterval;
    this.init(videoId);
  }
  init(videoId) {
    this.createVideo(videoId);
    this.addEventListeners();
  }
  addEventListeners() {
    this.progress = document.querySelector('.reels-container');
    this.progress.addEventListener("mouseup", this.handleTouchScroll.bind(this));
    this.progress.addEventListener("mousedown", this.handleTouchScroll.bind(this));
  }
  handleTouchScroll(e) {
    console.log(e.type);
    switch (e.type ) {
      case 'mousedown':
        this.prevPlayerState = this.isPlaying;
        this.player.pauseVideo();
      break;
      case 'mouseup':
        this.progressNorm = this.progress.scrollLeft / (this.progress.scrollWidth-this.progress.clientWidth);
        let newTime = this.progressNorm * this.player.getDuration();
        this.player.seekTo(newTime); //potential problem here
        if (this.prevPlayerState === true)
          this.player.playVideo();
      break;
      default:
      break;
    };
  }
  updateScroll() {
    this.progress = document.querySelector('.reels-container');
    this.progressNorm = this.player.getCurrentTime() / this.player.getDuration();
    console.log(this.progressNorm);
    this.progress.scrollLeft = this.progressNorm * (this.progress.scrollWidth-this.progress.clientWidth);
  }
  createVideo(videoId) {
    this.player = new YT.Player('youtube-player', {
      height: 390 * 0.7,
      width: 640 * 0.7,
      videoId: videoId,//getVideoId(window.location.search),
      events: {
        onReady: this.onReady.bind(this),
        onStateChange: this.onStateChange.bind(this)
      }
    });
  }
  onStateChange(e) {
    switch (e.data) {
      case YT.PlayerState.PAUSED:
        this.isPlaying = false;
        this.onPause();
      break;
      case YT.PlayerState.PLAYING:
        this.isPlaying = true;
        this.onPlaying();
      break;
      case YT.PlayerState.ENDED:
        this.isPlaying = false;
        this.onPause();
      break;
      default:
      break;
    }
  }
  onPlaying() {
    this.updateInterval = setInterval(() => {
      this.updateScroll();
    },10);
  }
  onPause() {
    clearInterval(this.updateInterval);
  }
  onReady() {
  }
}

function onYouTubeIframeAPIReady() {
  youtubePlayer = new YoutubePLayer("A_MjCqQoLLA");
}

function onReady() {
  // userInterface = new UI(player, dataBaseObject);
  // console.log(dataBaseObject);
}

function onStateChange(e) {
}
