const tag = document.createElement("script");
const firstScriptTag = document.getElementsByTagName("script")[0];
let player = null;
let userInterface;

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let timestampInterval;
let videoTotalTime;
let videoId;

function getVideoId(str) {
  let regex = /[\?|\&]videoId=((\w|-){11})/;
  let match = str.match(regex);
  if (match) {
    return match[1];
  }
  return false;
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    height: 390 * 0.7,
    width: 640 * 0.7,
    videoId: getVideoId(window.location.search),
    events: {
      onReady,
      onStateChange
    }
  });
}

let lastBeatId = 0;
let currentBeatId = 0;

function onReady() {
  userInterface = new UI(player, dataBaseObject);
  console.log(dataBaseObject);
}

//gets called on every youtube player state change
function onStateChange(e) {
  console.log("event", e);

  switch (e.data) {
    case YT.PlayerState.PAUSED:
      clearInterval(timestampInterval);
      break;
    case YT.PlayerState.PLAYING:
      playingHandler();
      break;
    case YT.PlayerState.ENDED:
      clearInterval(timestampInterval);
      break;
    default:
      break;
  }
}

function playingHandler() {
  console.log("PLAY");
  timestampInterval = setInterval(() => {
    document.querySelector(".time").innerHTML = Math.floor(player.getCurrentTime());
    currentBeatId = Math.round(player.getCurrentTime() / userInterface.spb);
    if (lastBeatId != currentBeatId) {
      lastBeatId = currentBeatId;
      document.querySelector(".progress").innerHTML = currentBeatId;
      userInterface.handleReelScroll(currentBeatId);
      if (userInterface.metronomeCheckbox.checked) {
        click.play();
      }
    }
  }, 10);
}
