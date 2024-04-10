<?php

function twoSum($nums, $target)
{
    $map = [];

    for ($i = 0; $i < count($nums); $i++) {
        $complement = $target - $nums[$i];

        if (isset($map[$complement])) {
            return [$map[$complement], $i];
        }

        $map[$nums[$i]] = $i;
    }

    return null;
}

print_r(twoSum([3, 2, 4], 6));