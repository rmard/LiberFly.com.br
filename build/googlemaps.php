<?php
    header('Access-Control-Allow-Origin: *');
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=AIzaSyCPOggMNd0hWwm34KGzHvqLI2HV_byYoH4&inputtype=textquery&input=" . $_GET['input']);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$output = curl_exec($ch);
	curl_close($ch);
	echo $output;
?>
