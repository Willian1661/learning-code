<?php

function twoSum($nums, $target)
{
    for ($i = 0; $i < count($nums); $i++) {
        for ($j = $i + 1; $j < count($nums); $j++) {
            if (($nums[$i] + $nums[$j]) == $target) {
                echo $nums[$i] + $nums[$j];
                return [$i, $j];
            }
        }
    }
    throw new Exception("Error Processing Request", 1);
    
}

twoSum([3, 2, 3], 6);

?>