<?php
class Solution
{
    public function removeDuplicates($nums)
    {

        try {

            $count = count($nums);
            $writeIndex = 1;

            for ($i = 1; $i < $count; $i++) {
                if ($nums[$i] !== $nums[$i - 1]) {
                    $nums[$writeIndex] = $nums[$i];
                    $writeIndex++;
                }
            }

            return $writeIndex;

        } catch (Exception) {

            throw new Exception("Error Processing Request", 1);

        }
    }

}

$printSolution = new Solution();
$printSolution->removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);