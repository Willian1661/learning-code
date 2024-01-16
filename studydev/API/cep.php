<?php

$param = $argv[1];
$cep = readline("\nInsert your cep:");

if ($param) {
    $apiendpoint = "https://brasilapi.com.br/api/cep/{$param}/{$cep}";
} else {
    $apiendpoint = "https://brasilapi.com.br/api/cep/v1/{$cep}";
}

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $apiendpoint);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);

if (curl_errno($curl)) {
    die('curl error: ' . curl_error($curl));
}

$data = json_decode($response, true);

foreach ($data as $key => $value) {
    if (is_array($value)) {
        echo "$key: ";
        foreach ($value as $nestedkey => $nestedvalue) {
            if (is_array($nestedvalue)) {
                echo "$nestedkey: ";
                foreach ($nestedvalue as $subnestedkey => $subnestedvalue) {
                    echo "\n\t>" . $subnestedkey . ": " . $subnestedvalue . "\n";
                }
            } else {
                echo "\n\t>" . $nestedkey . ": " . $nestedvalue . "\n";
            }
        }
    } else {
        echo "\n" . $key . ": " . $value . "\n";
    }
}

curl_close($curl);
