<?php
declare(strict_types=1);
class Solution
{
    public function removeDuplicates(array $nums): int
    {
        $count = 0;

        for ($i = 0; $i < count($nums); $i++) {
            if ($i < (count($nums)) - 1 && $nums[$i] == $nums[$i + 1]) {
                continue;
            }


            $nums[$count] = $nums[$i];
            $count++;

        }
        return $count;
    }
}

$output = new Solution;
echo $output->removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

/* 
the way i'm thinking:
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

!!return the number of unique elements in nums.!!

if it wants to return just the number of unique elements
let's create a $count to count how many uniques there are.

then we need to run all the loop
and go to if statement:
    if the index is less than the last element of the array
    AND the current number is equal the next, gets a continue
    statement to go to the next interation.

when the if statement is not true, the position of the element
on nums[count] it  will  be equal to element on nums[i] and
count it will be increased to count how many uniques there are. 

 */