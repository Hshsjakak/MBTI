<?php

// Retrieve POST data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
// Assuming `result-text` should not be retrieved as it's not part of the form data

// Function to display error messages and halt execution
function echo_and_alert_and_die($msg)
{
    echo $msg;
    echo "<script> alert('$msg'); </script>";
    die;
}

// Connect to database
$cn = mysqli_connect("localhost", "root", "", "krunal");

// Check connection
if (!$cn) {
    echo_and_alert_and_die("Database connection failed: " . mysqli_connect_error());
}

// Prepare and execute query
$qry = "SELECT * FROM clint_info WHERE nm='$name' AND email='$email' AND phone='$phone'";
$result = mysqli_query($cn, $qry);

// Check query
if (!$result) {
    echo_and_alert_and_die("Query failed: " . mysqli_error($cn));
}

// Check result
if (mysqli_num_rows($result) < 1) {
    echo_and_alert_and_die('Email or Phone is Invalid');
}

if (mysqli_num_rows($result) > 1) {
    echo_and_alert_and_die('Multiple accounts found with this email and phone');
}

// Fetch result
$row = mysqli_fetch_assoc($result);

// Redirect if user found
if ($row) {
    header("Location: http://localhost/MBTI.html");
    exit();
} else {
    echo_and_alert_and_die("No matching account found");
}

// Close connection


?>
