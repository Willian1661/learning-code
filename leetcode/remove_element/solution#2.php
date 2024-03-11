<?php

class Solution
{
    public function removeElement(&$nums, $val)
    {
        foreach ($nums as $i => $item) {
            if ($item === $val) {
                unset($nums[$i]);
            }
        }
        return count($nums);
    }
}

$printSolution = new Solution;
$nums = [3, 2, 2, 3];
echo $printSolution->removeElement($nums, 2);