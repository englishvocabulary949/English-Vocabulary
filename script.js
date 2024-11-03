const questions = [
    { question: "Across?", answer: "diseberang" },
    { question: "diseberang?", answer: "across" },
    { question: "Between?", answer: "diantara" },
    { question: "diantara?", answer: "between" },
    { question: "Around?", answer: "disekitar" },
    { question: "disekitar?", answer: "around" },
    { question: "at the corner of?", answer: "disudut" },
    { question: "disudut?", answer: "at the corner of" },
    { question: "behind?", answer: "dibelakang" },
    { question: "dibelakang?", answer: "behind" },
    { question: "beside?", answer: "disebelah" },
    { question: "disebelah?", answer: "beside" },
    { question: "among?", answer: " diantara " },
    { question: "diantara?", answer: "among" },
    { question: "in front of?", answer: "didepan" },
    { question: "didepan?", answer: "in front of" },
    { question: "next to?", answer: "disebelah" },
    { question: "disebelah?", answer: "next to" },
    { question: "near?", answer: "dekat" },
    { question: "dekat?", answer: "near" },
    { question: "opposite?", answer: "berlawanan" },
    { question: "berlawanan?", answer: "opposite" },
    { question: "cross?", answer: "menyebrang" },
    { question: "menyebrang?", answer: "cross" },
    { question: "face?", answer: "menghadapi" },
    { question: "menghadapi?", answer: "face" },
    { question: "go straight?", answer: "jalan lurus" },
    { question: "jalan lurus?", answer: "go straight" },
    { question: "overtake?", answer: "menyalip" },
    { question: "menyalip?", answer: "overtake" },
    { question: "pass?", answer: "melewati" },
    { question: "melewati?", answer: "pass" },
    { question: "turn back?", answer: "putar balik" },
    { question: "putar balik?", answer: "turn back" },
    { question: "turn left?", answer: "belok kiri" },
    { question: "belok kiri?", answer: "turn left" },
    { question: "turn right?", answer: "belok kanan" },
    { question: "belok kanan?", answer: "turn right" },
    { question: "alley?", answer: "gang" },
    { question: "gang?", answer: "alley" },
    { question: "bend?", answer: "tikungan" },
    { question: "tikungan?", answer: "bend" },
    { question: "cross road?", answer: "simpang 4" },
    { question: "simpang 4?", answer: "cross road" },
    { question: "deat end street?", answer: "jalan buntu" },
    { question: "jalan buntu?", answer: "deat end street" },
    { question: "downhill?", answer: "turunan" },
    { question: "turunan?", answer: "downhill" },
    { question: "five intersection?", answer: "simpang 5" },
    { question: "simpang 5?", answer: "five intersection" },
    { question: "highway?", answer: "jalan tol" },
    { question: "jalan tol?", answer: "highway" },
    { question: "one way traffic?", answer: "jalan searah" },
    { question: "jalan searah?", answer: "one way traffic" },
    { question: "overpass?", answer: "jembatan penyeberangan" },
    { question: "jembatan penyeberangan?", answer: "overpass" },
    { question: "shortcut?", answer: "jalan  pintas" },
    { question: "jalan pintas?", answer: "shortcut" },
    { question: "sidewalk?", answer: "trotoar" },
    { question: "trotoar?", answer: "sidewalk" },
    { question: "speed bump?", answer: "polisi tidur" },
    { question: "polisi tidur?", answer: "speed bump" }, 
    { question: "street?", answer: "jalan" },
    { question: "jalan?", answer: "street" },
    { question: "T junction?", answer: "simpang 3" },
    { question: "simpang 3?", answer: "T junction" },
    { question: "take a round trip?", answer: "pulang pergi" }, 
    { question: "pulang pergi?", answer: "take a round trip" },
    { question: "tiny path?", answer: "gang kecil" },
    { question: "gang kecil?", answer: "tiny path" },
    { question: "traffic jam?", answer: "macet" },
    { question: "macet?", answer: "traffic jam" },
    { question: "traffic light?", answer: "lampu lalin" },
    { question: "lampu lalin?", answer: "traffic light" },
    { question: "tunnel?", answer: "terowongan" },
    { question: "terowongan?", answer: "tunnel" },
    { question: "zebra crossing?", answer: "jelur penyeberangan" },
    { question: "jalur penyeberangna?", answer: "zebra crossing" },
    { question: "misguided?", answer: "tersesat" },
    { question: "tersesat?", answer: "misguided" },
];

let currentQuestionIndex;
let wrongAttempts = 0;

function getRandomQuestionIndex() {
    return Math.floor(Math.random() * questions.length);
}

function displayQuestion() {
    currentQuestionIndex = getRandomQuestionIndex();
    document.getElementById('question').innerText = questions[currentQuestionIndex].question;
    document.getElementById('answer').value = '';
    document.getElementById('message').innerText = '';
    document.getElementById('message').className = 'message'; // Reset class
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById('message').innerText = "Correct!!!!";
        document.getElementById('message').className = 'message correct'; // Add correct class
        wrongAttempts = 0; // Reset attempts
        setTimeout(displayQuestion, 1000); // Tampilkan pertanyaan baru setelah delay
    } else {
        wrongAttempts++;
        document.getElementById('message').innerText = "Wrong ???";
        document.getElementById('message').className = 'message wrong'; // Add wrong class
        if (wrongAttempts >= 3) {
            wrongAttempts = 0; // Reset attempts
            setTimeout(displayQuestion, 1000); // Tampilkan pertanyaan baru setelah delay
        }
    }
    document.getElementById('message').style.opacity = 1; // Show message
    document.getElementById('answer').focus();
}

function passQuestion() {
    wrongAttempts = 0; // Reset attempts
    displayQuestion(); // Tampilkan pertanyaan baru
}

window.onload = displayQuestion;
