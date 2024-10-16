// Palindrome Code //


const palinButton = document.getElementById('checkPalindrome');
const result1 = document.getElementById('result');

// Add the event listener
palinButton.addEventListener('click', () => {
    
    const inputText = document.getElementById('userInput').value.toLowerCase().replace(/[^a-z0-9]/g, '');

    const chngStr = inputText.split('').reverse().join('');

    if(inputText == ""){
        result1.textContent = "Please Enter a Value";
        result1.style.color = 'red';
        return;
    }
    
    if (chngStr === inputText) {
        result1.textContent = 'It is a Palindrome';
    } else {
        result1.textContent = 'It is not a Palindrome';
    }
});


// Anagram Code 
const anagramButton = document.getElementById('checkAnagram');
const anagramFinal = document.getElementById('final');

anagramButton.addEventListener('click', () => {
    const anagramInput1 = document.getElementById('anagramInput1').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const anagramInput2 = document.getElementById('anagramInput2').value.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (anagramInput1 === '' || anagramInput2 === '') {
        anagramFinal.textContent = "Please enter both words!";
        anagramFinal.style.marginTop = '1rem';
        anagramFinal.style.color = 'red';
        anagramFinal.style.fontWeight = 'bold';
        return;
    }

    const chngAnagramInput1 = anagramInput1.split('').sort().join('');
    const chngAnagramInput2 = anagramInput2.split('').sort().join('');

    if (chngAnagramInput1 === chngAnagramInput2) {
        anagramFinal.textContent = "It is an Anagram";
        anagramFinal.style.fontWeight = 'bold';  
        anagramFinal.style.marginTop = '10px'; 
    } else {
        anagramFinal.textContent = "It is not an Anagram";
        anagramFinal.style.fontWeight = 'bold';  
        anagramFinal.style.marginTop = '10px'; 
    }
});
