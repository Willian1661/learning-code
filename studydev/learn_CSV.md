## CSV BASICS

CSV stands for **Comma Separated Values**. A CSV file is a plain text file that stores **tables and spreadsheet information**. The contents are often a table of **text, numbers, or dates**. CSV files can be easily imported and exported using programs that store data in tables.

## EXAMPLE
name, id, favorite food
quincy, 1, hot dogs
beau, 2, cereal
abbey, 3, pizza
mrugesh, 4, ice cream

Daiane,daiane@teste.com,912345678
Adriele,drica@teste.com,987654321
Livia,livia@teste.com,876543456
Bruna,bruna@teste.com,998765678

## MANIPULATING CSV WITH PHP

//OPEN OR CREATE FILE
$arquivo = fopen('file.csv', 'w');

// ISNSERT CONTENT
fputcsv($handle, $fields, $delimiter, $enclosure, $escape_char);

## EXAMPLE:
$dados = [
    [
        'produto' => 'Notebook',
        'preco' => 3587,
    ],
    [
        'produto' => 'Celular',
        'preco' => 2643,
    ],
    [
        'produto' => 'TV',
        'preco' => 5876,
    ],
    [
        'produto' => 'Fone',
        'preco' => 432,
    ],
];

// Abrir/criar arquivo
$arquivo = fopen('file.csv', 'w');

// Popular os dados
foreach ($dados as $linha) {
    fputcsv($arquivo, $linha);
}

// Fechar o arquivo
fclose($arquivo);

TO KNOW MORE IS HERE: https://dev.to/phpwomenbr/manipulacao-de-arquivos-csv-no-php-5eeg

