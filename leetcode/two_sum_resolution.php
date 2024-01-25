<?php
class Solution
{
    protected function twoSum($nums, $target)
    {
        for ($i = 0; $i < count($nums); $i++) {
            for ($j = $i + 1; $j < count($nums); $j++) {
                if (($nums[$i] + $nums[$j]) == $target) {
                    echo "primeiro index: " . $i . "\nsegundo index: " . $j . "\n";
                    echo "valor da soma dos elementos: " . $nums[$i] + $nums[$j] . "\n";
                    return [$i, $j];
                }
            }
        }
        throw new Exception("Error Processing Request", 1);
    }

}
class Print_solution extends Solution
{
    public function print_twosum($nums, $target)
    {
        $this->twoSum($nums, $target);
    }
}
$resolution = new Print_solution();
$resolution->print_twosum([3, 2, 3], 6);