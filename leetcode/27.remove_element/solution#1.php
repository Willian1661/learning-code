<?php

class Solution
{

    public function removeElement($nums, $val)
    {
        $count = 0;
        foreach ($nums as $key => $num) {
            if ($num !== $val) {
                $count++;
            } else {
                unset($nums[$key]);
            }
        }

        return $count;
    }
}


$output = new Solution;
echo $output->removeElement([3, 2, 2, 3], 3);
