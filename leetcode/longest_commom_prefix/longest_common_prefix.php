<?php
class Solution
{
    protected function longestCommonPrefix(array $strs)
    {
        if (empty($strs)) { // return null values if it gets a empty array
            return "";
        }

        sort($strs); // sort the elements from the lower to greater


        $firstStr = $strs[0]; //get the first element from the sort
        $lastStr = $strs[count($strs) - 1]; //get the last element from the sort

        $commonPrefix = ""; // variable to concat the prefixes
        $minLength = min(strlen($firstStr), strlen($lastStr)); // get the minimal string length for LOOP


        for ($i = 0; $i < $minLength; $i++) { //loop to run the minimal string length, to get from the llower string
            if ($firstStr[$i] == $lastStr[$i]) { // if the character is equal to other

                $commonPrefix .= $firstStr[$i]; // concat the prefixes
            } else {

                break; // break the process.
            }
        }

        return "[\"" . $commonPrefix . "\"]\n";
    }
}

class Print_solution extends Solution
{
    public function print_longestCommonPrefix($strings)
    {
       echo $this->longestCommonPrefix($strings);
    }
}
$strs1 = ["flower", "flow", "flight"];
$strs2 = ["dog", "racecar", "car"];

$resolution = new Print_solution();
$resolution->print_longestCommonPrefix($strs1);
$resolution->print_longestCommonPrefix($strs2);