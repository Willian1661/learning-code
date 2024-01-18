<?php
class Solution
{
    protected function longestCommonPrefix(array $strings)
    {
        if (empty($strings) || count($strings) <= 1) { // return null values if it gets a empty array
            return "\nresult: [\"" . implode($strings) . "\"]\n";
        }

        sort($strings); // sort the elements from the lower to greater
        $firstString = $strings[0]; //get the first element from the sort
        $lastString = $strings[count($strings) - 1]; //get the last element from the sort

        $commonPrefix = ""; // variable to concat the prefixes

        for ($i = 0; $i < strlen($firstString); $i++) { //loop to run the minimal string length, to get from the llower string
            if ($firstString[$i] != $lastString[$i]) { // if the character is equal to other
                return "\nresult: [\"" . $commonPrefix . "\"]\n";
            }
            $commonPrefix .= $firstString[$i]; // concat the prefixes
        }
    }
}

class Print_solution extends Solution
{
    public function print_longestCommonPrefix($strings)
    {
        return $this->longestCommonPrefix($strings);
    }
}

$strings1 = ["flower", "flow", "flight"];
$strings2 = ["dog", "racecar", "car"];

$resolution = new Print_solution();
$callplp = $resolution->print_longestCommonPrefix($strings1);
// $resolution->print_longestCommonPrefix($strings2);