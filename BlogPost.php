<?php
$conn = mysqli_connect("localhost", "root", "");
if (!$conn) {
    echo("Unable to connect to the database server");
    die();
} else {
    echo("<h1>Connected to the database server successfully</h1>");
}
$DBname="blog_posts";
$db=mysqli_select_db($conn,$DBname);
if(!$db)
{
    echo("Unable to select the database");
    die();
}
else
{
    echo("<h1>Connected to the database successfully </h1>");
}

// Retrieve the blog post content based on an identifier, such as an ID
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Modify this query based on your database structure
    $sql = "SELECT * FROM blog_posts WHERE id = $id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row); // Return the blog post content as JSON
    } else {
        echo "Blog post not found";
    }
} else {
    echo "Invalid request";
}

$conn->close();
?>
