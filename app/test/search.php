<?php
	$query=$_GET['search'];
	$query = implode ('+', explode (' ', $query));
	//$albumid = $_GET['id'];
	//$url = 'http://192.168.208.208/muzi/ajax/album/index.php?id='.$albumid;
	$list = file_get_contents ("http://www.imdbapi.com/?t=".$query);
	//echo $url;
	echo $list;
?>