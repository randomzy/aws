<?php
include('config/db_connect.php');
$query = 'SELECT name, id, bpm, chords FROM songsData ORDER BY last_modified';
$result = $db->query($query);
$songs_info = $result->fetch_all(MYSQLI_ASSOC);
$json_result = json_encode($songs_info);
?>

<html lang="en">
  <?php include 'templates/header.php'; ?>
    <div class="board-wrapper"></div>
    <script>
      let php_data = <?php echo $json_result ?>;
      let container = document.querySelector(".board-wrapper");
      php_data.forEach(obj => {
          let songRow = document.createElement("div");
          songRow.classList.add("board-entry");
          songRow.innerHTML = obj.name;
          songRow.addEventListener("click", () => {
              window.location = `play.php?videoId=${obj.id}`;
          });
          container.appendChild(songRow);
      });
    </script>
  <?php include 'templates/footer.php'; ?>
</html>