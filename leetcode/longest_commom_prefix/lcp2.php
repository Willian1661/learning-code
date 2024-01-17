<?php

function longestCommonPrefix($strings)
{
    $start = microtime(true);
    // Start the timer

    // Code to measure execution time

    $prefix = "";
    sort($strings);
    $length = strlen($strings[0]);
    for ($i = 0; $i < $length; $i++) {
        $character = $strings[0][$i];
        foreach ($strings as $str) {
            if ($character !== $str[$i]) {
                return $prefix;
            }
        }
        $prefix .= $character;
    }
    // End the timer
    $end = microtime(true);

    // Calculate the execution time
    $executionTime = $end - $start ;

    // Output the result
    echo "\nScript execution time: " . $executionTime . " seconds\n";
    
    echo memory_get_usage() . "\n";

    return $prefix;
}

$strs1 = ["flower", "flow"];
// $strs1 = ["flower"];

$strs2 = ["dog", "racecar", "car"];


echo longestCommonPrefix($strs1);
echo longestCommonPrefix($strs2);

function convert($size)
{
    $unit = array('b', 'kb', 'mb', 'gb', 'tb', 'pb');
    return "\n" . @round($size / pow(1024, ($i = floor(log($size, 1024)))), 4) . ' ' . $unit[$i];
}

echo convert(memory_get_usage(true)); // 123 kb
