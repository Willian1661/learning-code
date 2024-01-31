<?php
function add_two_nummbers($listone, $listtwo)
{
    $biggerArray = max($listone, $listtwo);

    for ($i = 0; $i < count($biggerArray); $i++) {

        if (isset($listone[$i]) || isset($listtwo[$i])) {
            $output[] = $listone[$i] + $listtwo[$i];
        } else {
            return $output;
        }

    }
    $result = implode("", array_reverse($output));
    echo "valor da soma: " . $result;
    return $output;
}

print_r(add_two_nummbers([2, 0, 3], [2, 0, 3, 2]));