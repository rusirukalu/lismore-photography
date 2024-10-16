<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "malcolm_photography";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $sql = "INSERT INTO inquiries (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
