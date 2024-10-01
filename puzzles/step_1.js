
let step1Code = `
if (y) {
    addLetter('B');
} else {
    addLetter('F');
}

if (!x) {
    addLetter('O');
} else {
    addLetter('?');
}

if (x && y) {
    addLetter('!');
} else {
    addLetter('O');
}

if (x || y) {
    addLetter('L');
} else {
    addLetter('D');
}
`;

let step1Variables = ['x', 'y'];

let step1Password = 'BOOL';

let step1 = {
    title: 'Step 1',
    code: step1Code,
    variables: step1Variables,
    password: step1Password,
};
