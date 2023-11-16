function print(string) {
    return string;
}

function verifyAge(idade){
    if (idade >= 18) {
        console.log(print('Hailey ') + 'Maior de idade');
    }else {
        console.log(print('Hailey ') + 'Menor de idade');
    }
}

verifyAge(23)