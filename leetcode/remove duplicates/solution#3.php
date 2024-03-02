<?php
function removeDuplicates (array $nums){
  
  $index = 0;
  
  for ($i = 0;$i < count($nums); $i++){
  
  if ($i < count($nums)-1 && $nums[$i] == $nums[$i +1]){
    continue;
  } 
  
  $nums[$index] = $nums[$i];
  $index++;
    
  }
  return $index;
}


echo removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);