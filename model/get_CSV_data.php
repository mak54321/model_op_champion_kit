<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $row = 1;
    $mpn = 'id' . $_POST['currentUserId'];
    if (($handle = fopen("../data.csv", "r")) !== false) {
        while (($data = fgetcsv($handle, 1000, ",")) !== false) {
            // $num = count($data);
            // // echo "<p> $num fields in line $row: <br /></p>\n";
            // echo "///";
            // $row++;
            // for ($c = 0; $c < $num; $c++) {
            //     echo $data[$c] . "_,";
            //     // echo $data[$c];
            // }
            if ($mpn == rtrim($data[0])) {
                for ($c = 0; $c < 36; $c++) {
                    echo $data[$c] . "_,";
                    // echo $data[$c];
                }
                // echo '<a href="' . $data[19] . '" target="_blank">' . rtrim($data[3]) . '</a>' . ' - ' . $data[15];
            } else {
                $row++;
            }
        }
        fclose($handle);
    }
}
