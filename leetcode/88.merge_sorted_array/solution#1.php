<?php

/* non-descreasing order = increasing order */

class Solution_1
{
    function merge($nums1, $m, $nums2, $n)
    {
        $lastof1 = $m - 1;
        $lastof2 = $n - 1;
        $indexlastarray = count($nums1) - 1;

        while ($lastof2 >= 0) {
            if ($nums1[$lastof1] > $nums2[$lastof2]) {
                $nums1[$indexlastarray] = $nums1[$lastof1];
                $lastof1--;
            } else {
                $nums1[$indexlastarray] = $nums2[$lastof2];
                $lastof2--;
            }
            $indexlastarray--;
        }
        print_r($nums1);

    }
}
$print_solution = new Solution_1;
$print_solution->merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// $print_solution->merge([1], 1, [], 0);
// $print_solution->merge([0], 0, [1], 1);