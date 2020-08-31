<?php
    include 'config/db_connect.php';
    if(isset($_POST['search'])) {
        $query = 'SELECT name, id, bpm, chords FROM songsData WHERE name = ? ';
        $stmt = $db->prepare($query);
        $stmt->bind_param('s', $_POST['search']);
        $stmt->execute();
        
        $result = $stmt->get_result();
        $songs_info = $result->fetch_all(MYSQLI_ASSOC);
        if (empty($songs_info)) {
            $query = "SELECT name, id, bpm, chords FROM songsData WHERE name LIKE ?";
            $stmt = $db->prepare($query);
            $param = "%".$_POST['search']."%";
            $stmt->bind_param('s', $param);
            $stmt->execute();

            $result = $stmt->get_result();
            $songs_info = $result->fetch_all(MYSQLI_ASSOC);
            $json_result = json_encode($songs_info);
        }
        $json_result = json_encode($songs_info);
    } 
    else {
        header('location: index.php');
        exit();
    }
?>

<html lang="en">
  <?php include 'templates/header.php'; ?>
    <div class="board-wrapper"></div>
    <div class="search-result"></div>
    <script>
      let php_data = <?php echo $json_result ?>; //assoc 
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
