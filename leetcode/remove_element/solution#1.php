<?php

class Solution
{
    public function removeElement($nums, $val)
    {
        $numberElements = 0;
        $arrayLength = count($nums);
        for ($i = 0; $i < $arrayLength; $i++) {
            if ($nums[$i] != $val) {
                $numberElements++;
                continue;
            }
            unset($nums[$i]);
        }
        return $numberElements;

    }
}

$printSolution = new Solution;
// $nums = [3, 2, 2, 3];
echo $printSolution->removeElement([3, 2, 2, 3], 2);