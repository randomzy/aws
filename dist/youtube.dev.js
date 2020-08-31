"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var tag = document.createElement("script");
var firstScriptTag = document.getElementsByTagName("script")[0];
tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var youtubePlayer;

var YoutubePLayer =
/*#__PURE__*/
function () {
  function YoutubePLayer(videoId) {
    _classCallCheck(this, YoutubePLayer);

    this.isPlaying = false;
    this.prevPlayerState = false;
    this.progressNorm = 0;
    this.updateInterval;
    this.init(videoId);
  }

  _createClass(YoutubePLayer, [{
    key: "init",
    value: function init(videoId) {
      this.createVideo(videoId);
      this.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      this.progress = document.querySelector('.reels-container');
      this.progress.addEventListener("mouseup", this.handleTouchScroll.bind(this));
      this.progress.addEventListener("mousedown", this.handleTouchScroll.bind(this));
    }
  }, {
    key: "handleTouchScroll",
    value: function handleTouchScroll(e) {
      console.log(e.type);

      switch (e.type) {
        case 'mousedown':
          this.prevPlayerState = this.isPlaying;
          this.player.pauseVideo();
          break;

        case 'mouseup':
          this.progressNorm = this.progress.scrollLeft / (this.progress.scrollWidth - this.progress.clientWidth);
          var newTime = this.progressNorm * this.player.getDuration();
          this.player.seekTo(newTime); //potential problem here

          if (this.prevPlayerState === true) this.player.playVideo();
          break;

        default:
          break;
      }

      ;
    }
  }, {
    key: "updateScroll",
    value: function updateScroll() {
      this.progress = document.querySelector('.reels-container');
      this.progressNorm = this.player.getCurrentTime() / this.player.getDuration();
      console.log(this.progressNorm);
      this.progress.scrollLeft = this.progressNorm * (this.progress.scrollWidth - this.progress.clientWidth);
    }
  }, {
    key: "createVideo",
    value: function createVideo(videoId) {
      this.player = new YT.Player('youtube-player', {
        height: 390 * 0.7,
        width: 640 * 0.7,
        videoId: videoId,
        //getVideoId(window.location.search),
        events: {
          onReady: this.onReady.bind(this),
          onStateChange: this.onStateChange.bind(this)
        }
      });
    }
  }, {
    key: "onStateChange",
    value: function onStateChange(e) {
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
  }, {
    key: "onPlaying",
    value: function onPlaying() {
      var _this = this;

      this.updateInterval = setInterval(function () {
        _this.updateScroll();
      }, 10);
    }
  }, {
    key: "onPause",
    value: function onPause() {
      clearInterval(this.updateInterval);
    }
  }, {
    key: "onReady",
    value: function onReady() {}
  }]);

  return YoutubePLayer;
}();

function onYouTubeIframeAPIReady() {
  youtubePlayer = new YoutubePLayer("A_MjCqQoLLA");
}

function onReady() {// userInterface = new UI(player, dataBaseObject);
  // console.log(dataBaseObject);
}

function onStateChange(e) {}