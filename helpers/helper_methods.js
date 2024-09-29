
let WHEEL_CONTAINER_ID = 'wheel-container';
let TOGGLE_ROW_CONTAINER_ID = 'toggle-row-container';

// Let's define some global variables we'll be needing

let allLetters = [];
let attemptedPassword = '';

let code = '';
let variables = [];
let password = '';

function addLetter(letter) {
    let wheel = document.createElement('div');
    wheel.classList.add('wheel');

    let letterDiv = document.createElement('div');
    letterDiv.classList.add('letter');
    letterDiv.innerText = letter;

    wheel.appendChild(letterDiv);

    document.getElementById(WHEEL_CONTAINER_ID).appendChild(wheel);

    allLetters.unshift(letterDiv);
    attemptedPassword += letter;
}


function clearLetterWheels() {
    allLetters = [];
    attemptedPassword = '';

    let container = document.getElementById(WHEEL_CONTAINER_ID);

    container.innerHTML = '';
    container.classList.remove('correct');
    container.classList.remove('wrong');
}

function showNextLetter() {
    setTimeout(() => {
        if (allLetters.length == 0) {
            // All done, show if correct or incorrect    
            let container = document.getElementsByClassName('bottom-row')[0];

            if (attemptedPassword == password) {
                container.classList.remove('wrong');
                container.classList.add('correct');
            } else {
                container.classList.remove('correct');
                container.classList.add('wrong');
            }
            return;
        }
    
        let nextLetter = allLetters.pop();
        nextLetter.classList.add('reveal');

        showNextLetter();
    }, 500);
}

function startWheel() {
    // Set global variables based on toggle values
    populateValuesFromToggles();

    clearLetterWheels();
    try {
        eval(code);
    } catch (e) {
        alert(e);
        return;
    }
    showNextLetter();
}

function populateValuesFromToggles() {
    let toggleBtns = document.getElementsByClassName('toggle-btn');

    for (let i = 0; i < toggleBtns.length; i++) {
        let thisVar = toggleBtns[i].dataset['var'];
        let thisVal = toggleBtns[i].dataset['value'];
        eval(thisVar + '=' + thisVal);
    }
}

function startPuzzle(config) {
    // Define all the necessary variables
    for (let i = 0; i < config.variables.length; i++) {
        try {
            eval('let ' + config.variables[i] + ' = false;');
        } catch (e) {
            eval(config.variables[i] + ' = false;');
        }
    }

    // Clear the toggle area and add necessary rows
    document.getElementById(TOGGLE_ROW_CONTAINER_ID).innerHTML = '';
    for (let i = 0; i < config.variables.length; i++) {
        addToggleRow(config.variables[i]);
    }

    // Add the code to the code container
    code = config.code;
    document.getElementById('code-container').innerText = code.trim();

    // Set the password
    password = config.password;

    // Update the header
    updateHeader(config.title);

    clearLetterWheels();
}

function updateHeader(newTitle) {
    let headerEl = document.getElementById('title-bar');

    headerEl.innerText = newTitle + ': \'' + password + '\'';
}


// Helper to add a toggle button
function toggle(varName) {
    let toggleBtns = document.getElementsByClassName('toggle-btn');

    for (let i = 0; i < toggleBtns.length; i++) {
        let thisVar = toggleBtns[i].dataset['var'];
        let thisVal = toggleBtns[i].dataset['value'];
        if (varName == thisVar) {
            if (thisVal == 'false') {
                toggleBtns[i].classList.add('true');
                toggleBtns[i].dataset['value'] = 'true';
                toggleBtns[i].innerText = 'true';
            } else {
                toggleBtns[i].classList.remove('true');
                toggleBtns[i].dataset['value'] = 'false';
                toggleBtns[i].innerText = 'false';
            }
            return;
        }
    }
}

function addToggleRow(varName) {
    let toggleRow = document.createElement('div');
    toggleRow.classList.add('toggle-row');

    let toggleLabel = document.createElement('div');
    toggleLabel.classList.add('toggle-label');
    toggleLabel.innerText = varName + ':';
    toggleRow.appendChild(toggleLabel);

    let toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle-btn');
    toggleButton.onclick = () => toggle(varName);
    toggleButton.dataset['var'] = varName;
    toggleButton.dataset['value'] = 'false';
    toggleButton.innerText = 'false';
    toggleRow.appendChild(toggleButton);

    document.getElementById(TOGGLE_ROW_CONTAINER_ID).appendChild(toggleRow);
}
