
let step2Code = `
addLetter('P');

if (z) {
    addLetter('A');

    if (!z) {
        addLetter('S');
    }

    if (x && z) {
        addLetter('S');
    } else {
        addLetter('$');
    }
} else {
    addLetter('W');
}

if (x && !y) {
    addLetter('S');

    if (!y && z) {
        addLetter('W');
        addLetter('O');
    }
} else {
    addLetter('O');
}

if (y) {
    addLetter('P');
} else {
    addLetter('R');
}

addLetter('D');

`;

let step2Variables = ['x', 'y', 'z'];

let step2Password = 'PASSWORD';

let step2 = {
    title: 'Step 2',
    code: step2Code,
    variables: step2Variables,
    password: step2Password,
};
