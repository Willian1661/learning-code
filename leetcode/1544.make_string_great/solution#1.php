<?php

class Solution
{

    public function makeGood(string $string): string
    {

        $output_array = substr($string, 0, 1);
        for ($i = 1; $i < strlen($string); $i++) {
            $end = substr($output_array, -1);
            if (strtolower($end) == strtolower($string[$i]) && $end != $string[$i]) {
                $output_array = substr($output_array, 0, -1);
                continue;
            }
            $output_array .= $string[$i];
        }
        echo $output_array;
        return $output_array;
    }
}

$print_solution = new Solution();
$print_solution->makeGood("leEeetcode");