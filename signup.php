<?php
// configuration
$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'your_database_name';

// check connection
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// check connection
if ($conn->connect_error) {
    die("Connection failed:" . $conn->connect_error);
}

// check if form is submitted
if($_SERVER["REQUEST_METHOD"] =="POST" ) {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $ConfirmPassword = $_POST["confirm-password"];

    // check if password match
    if ($password != $confirmPassword) {
        echo "Passwords do not match";
        exit;
    }
}