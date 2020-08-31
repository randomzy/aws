<?php
// videoId must be correct ID or else shell will fail
// directory must have read write and execute permissions in order to process youtube video
$videoId = $_REQUEST["videoId"];
if(isset($videoId)) {
    // include('config/db_connect.php');
    // $scriptResult = shell_exec("./processVideo.sh $videoId"); //must have execute permissions
    // echo($scriptResult);
    $descriptorspec = array(
        0 => array("pipe", "r"),  // stdin
        1 => array("pipe", "w"),  // stdout
        2 => array("pipe", "w"),  // stderr
     );
     $process = proc_open("./processVideo.sh $videoId", $descriptorspec, $pipes);
     $stdout = stream_get_contents($pipes[1]);
     fclose($pipes[1]);
     $stderr = stream_get_contents($pipes[2]);
     fclose($pipes[2]);
     $ret = proc_close($process);
     echo json_encode(array(
        'status' => $ret,
        'errors' => $stderr,
        'output' => $stdout
    ));
}