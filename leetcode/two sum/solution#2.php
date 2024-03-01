<?php

function twoSum($nums, $target)
{
    $base = 0;

    for ($i = 0; $i < count($nums); $i++) {
        $nextElement = $i + 1;
        $elementBase = $nums[$base];


        if ($i < count($nums) - 1 && ($nums[$i] + $nums[$nextElement]) == $target) {
            $sum = $nums[$i] + $nums[$nextElement];
            echo "\nthese are the values: $nums[$i] and $nums[$nextElement] and its sum: $sum\n";

            echo "\nthese are the values positions: ";

            return [$i, $nextElement];
        }

        if ($i < count($nums) - 1 && ($elementBase + $nums[$nextElement]) == $target) {
            $sum = $elementBase + $nums[$nextElement];
            echo "\nthese are the values: $nums[$base] and $nums[$nextElement] and its sum: $sum\n";

            echo "\nthese are the values positions: ";

            return [$base, $nextElement];
        }

        if ($i == count($nums) - 1) {
            $i = 0;
            $base++;
            $elementBase = $nums[$base];
        }

    }
}

print_r(

    twoSum([3, 2, 4], 6)
    // twoSum([2, 1, 9, 4, 4, 56, 90, 3], 8)
);