<?php 
  include 'config/db_connect.php';
  $json_result = null;
  if(isset($_GET['videoId'])) {
    $youtube64bitId = '/([a-z|A-Z|\-|\_|0-9]{11})/';
    if (preg_match($youtube64bitId,$_GET['videoId'])) {

      $query = 'SELECT name, bpm, chords FROM songsData where id = ? LIMIT 1';
      
      $stmt = $db->prepare($query);
      $stmt->bind_param('s', $_GET['videoId']);
      $stmt->execute();
      
      $result = $stmt->get_result();
      $songs_info = $result->fetch_all(MYSQLI_ASSOC);
      $json_result = json_encode($songs_info);
    }
  }
  else {

  }
?>

<html lang="en">
  <?php include 'templates/header.php' ?>
      <div class="app-wrapper">
        <div class="song-data">
          <h1 class="song-title">Loading...</h1>
          <div class="bpm">0</div>
          <label class=switch>
            <span class="slider-round">Metronome</span>
            <input class="metronome-checkbox" type="checkbox"></input>
          </label>
          <div class="time">0</div>
          <div class="progress">0</div>
          <div class="reels-container"></div>
        </div>
        <div class=player-holder>
          <div id="youtube-player"></div>
        </div>
      </div>

      <script>
        let dataBaseObject = <?php echo $json_result ?>[0];
      </script>
      <script src="UI.js"></script>
      <script src="music.js"></script>
      <script src="youtube.js"></script>
  <?php include 'templates/footer.php' ?>
</html>