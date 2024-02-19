<?php
class Database
{
    function connection()
    {
        return true;
    }
    function insert($inst)
    {
        echo "Inserindo dados para o inst: " . $inst;
        return true;
    }
}






$op1 = true;
$op2 = true;
$op3 = false;
$op4 = true;

$callInst = new DataBase();

$instaOptions = [];

if ($op1 || $op2 && $op3) {
    $instaOptions[] = "f";
}
if ($op2 || $op3 && $op1) {
    $instaOptions[] = "a";
}
if ($op1 || $op2 && $op3) {
    $instaOptions[] = "b";
}
if ($op1 || $op3 && $op2) {
    $instaOptions[] = "c";
}
if ($op3 || $op2 && $op1) {
    $instaOptions[] = "d";
}
if ($op2 || $op3 && $op1) {
    $instaOptions[] = "e";
}


foreach ($instaOptions as $key) {
    $callInst->insert($key);
}