<?php
function convert($size)
{
    $unit = array('b', 'kb', 'mb', 'gb', 'tb', 'pb'); // size units
    // log($size, 1024); returns log base `num`, otherwise log() returns the natural logarithm of `num`.
    // floor(log($size, 1024));  * Returns the next lowest integer value (as float) by rounding down `num` if necessary.
    /*  @round($size / pow(1024, ($i = floor(log($size, 1024)))), 2) Returns the rounded value of `num`
     to specified `precision` (number of digits after the decimal point). `precision` can also be negative or zero (default).
     */
    return "\n" . @round($size / pow(1024, ($i = floor(log($size, 1024)))), 2) . ' ' . $unit[$i];

}
