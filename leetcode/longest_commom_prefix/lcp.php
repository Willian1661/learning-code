<?php
function longestCommonPrefix($strs)
{
    $start = microtime(true);

    if (count($strs) <= 1) {
        return "";
    }
    echo count($strs) . " ";
    $result = "";
    sort($strs);
    $str1 = $strs[0];
    $str2 = $strs[count($strs) - 1];
    for ($i = 0; $i < strlen($str1); $i++) {
        if ($str2[$i] != $str1[$i]) {
            return $result;
        }
        $result .= $str2[$i];
    }
    $end = microtime(true);

    $executionTime = $end - $start;

    echo "\nScript execution time: " . $executionTime . " seconds\n";

    echo memory_get_usage() . "\n";


    return $result;
}

$strs1 = ["flower", "flow"];
// $strs1 = [""];

// $strs2 = ["dog", "racecar", "car"];


for ($i = 0; $i < 4; $i++) {
    echo "primwieo";
    for ($i = 0; $i < 4; $i++) {
        echo "segundo";

        for ($i = 0; $i < 4; $i++) {
            echo "terceiro";

            # code

        }
        # code...
    }
    # code...
}
echo longestCommonPrefix($strs1);
// echo longestCommonPrefix($strs2);

function convert($size)
{
    $unit = array('b', 'kb', 'mb', 'gb', 'tb', 'pb');
    echo "\n".log($size, 1024)."\n";
    echo "\n". floor(log($size, 1024))."\n";
    return "\n" . @round($size / pow(1024, ($i = floor(log($size, 1024)))), 2) . ' ' . $unit[$i];

}

echo convert(memory_get_usage(true)); // 123 kb