<?php
function get_execution_time($callback, ...$argvs)
{
    // $start = microtime(true);

    if (count($argvs) <= 1) {
        call_user_func("$callback");
    } else {
        call_user_func_array("$callback", $argvs);
    }

    return microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"];


    // $end = microtime(true);
    // $executionTime = $end - $start;
    // echo "\nScript execution time: " . $executionTime . " seconds\n";
}

