<?php

use GuzzleHttp\Client;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // echo "file upload";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $filename = $_FILES['file']['name'];
    $filepath = $_FILES['file']['tmp_name'];

    require_once "vendor/autoload.php";

    require ".\\vendor\guzzlehttp\guzzle\src\Client.php";

    $body = [
        'Messages' => [
            [
                'From' => [
                    'Email' => "takenotesmern@gmail.com",
                    'Name' => "Knights IT"
                ],
                'To' => [
                    [
                        'Email' => "prabodashan14@gmail.com",
                        'Name' => "Prabod Ashan"
                    ]
                ],
                'Subject' => "Career Form Email",
                'HTMLPart' => "<h3>Name: $name</h3><h3>Email: $email</h3>Message: $message",
                'Attachments' => [
                    [
                        'ContentType' => 'text/pdf',
                        'Filename' => $filename,
                        'Base64Content' => base64_encode(file_get_contents($filepath))
                    ]
                ]
            ]
        ]
    ];

    $client = new Client([
        // Base URI is used with relative requests
        'base_uri' => 'https://api.mailjet.com/v3.1/',
    ]);

    $response = $client->request('POST', 'send', [
        'json' => $body,
        'auth' => ['api_key', 'Secret_Key']
    ]);

    if ($response->getStatusCode() == 200) {
        $body = $response->getBody();
        $response = json_decode($body);
        if ($response->Messages[0]->Status == 'success') {
            header("Location: careers.html");
            echo "document.getElementById('success').innerHTML =
            'Thank you for your message';";
            die();
        }
    }
}
