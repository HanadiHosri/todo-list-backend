<?php
include('connection.php');

$username = $_POST['username'];
$password = $_POST['password'];
echo "Username: $username, Password: $password";

$query = $mysqli->prepare('select user_id,email,password,username
from users
where username=?');
$query->bind_param('s', $username);
$query->execute();
$query->store_result();
$query->bind_result($user_id, $email, $hashed_password, $name);
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = "logged in";
        $response['user_id'] = $user_id;
        $response['name'] = $name;
        $response['email'] = $email;
    } else {
        $response['status'] = "incorrect credentials";
    }
}
echo json_encode($response);