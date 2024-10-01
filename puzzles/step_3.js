
let step3Code = `
if (x) {
    addLetter('S');
    
    if (y || z) {
        addLetter('V');
    } else {
        addLetter('Q');
    }
} else {
    addLetter('V');

    if (!y) {
        addLetter('A');
    }
}

if (y && z) {
    addLetter('A');
} else {
    addLetter('L');
}

if (x || z) {
    addLetter('L');
} else {
    addLetter('0');
}

if (z || y) {
    addLetter('O');
} else {
    addLetter('T');
}

if (x || (y && z)) {
    addLetter('R');
} else {
    addLetter('W');
}
`;

let step3Variables = ['x', 'y', 'z'];

let step3Password = 'VALOR';

let step3 = {
    title: 'Step 3',
    code: step3Code,
    variables: step3Variables,
    password: step3Password,
};
