<?php

class Solution
{
    function addTwoNumbers($listone, $listtwo)
    {
        $minimunLength = min(count($listone), count($listtwo));

        for ($i = 0; $i < $minimunLength; $i++) {

            $output[] = $listone[$i] + $listtwo[$i];

        }
        return $output;
    }
}