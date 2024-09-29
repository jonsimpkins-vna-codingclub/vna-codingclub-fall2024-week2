
let step0Code = `
if (x) {
    addLetter('A');
    addLetter('B');
    addLetter('C');
} else {
    addLetter('X');
    addLetter('Y');
    addLetter('Z');
}
`;

let step0Variables = ['x'];

let step0Password = 'ABC';

let step0 = {
    title: 'Step 0',
    code: step0Code,
    variables: step0Variables,
    password: step0Password,
};
