// ** กำหนดข้อมูลคำถามและบุคลิกภาพ**
let scores = {
    "The Veritas": 0, // ฟ้า
    "The Lunaria": 0,    // เขียว
    "The Astrella": 0,   // ม่วง
    "The Solana": 0,     // เหลือง
};

// ข้อมูลคำถาม 10 ข้อ 
const questions = [
    {
        image: "images/q1.jpg",
        question: "คุณลืมตาตื่นในความมืดของอวกาศ แสงแรกที่คุณเห็นคือหมู่ดาวที่กะพริบรอบตัว คุณจะทำสิ่งใด?",
        options: [
            { text: "ส่งแสงออกไปทักทายพวกเขาอย่างร่าเริง", scoreType: "The Solana" },
            { text: "เฝ้ามองพวกเขาเงียบ ๆ เพื่อสังเกตว่าใครเป็นมิตร", scoreType: "The Astrella" },
            { text: "สำรวจพลังในตัวก่อนว่าทำอะไรได้บ้าง", scoreType: "The Veritas" },
            { text: "ลอยไปเรื่อย ๆ อย่างสงบ ปล่อยให้โชคชะตาพาไป", scoreType: "The Lunaria" },
        ]
    },
    {
        image: "images/q2.jpg",
        question: "มีดาวเคราะห์ดวงหนึ่งอยู่ไม่ไกล มันมืดและเย็นราวกับไม่มีชีวิต คุณจะ…?",
        options: [
            { text: "มองผ่านไป เพราะคิดว่ามันไม่ใช่ภารกิจของเรา", scoreType: "The Astrella" },
            { text: "ส่องแสงอุ่น ๆ ไปหาเผื่อจะช่วยให้มันอบอุ่นขึ้น", scoreType: "The Lunaria" },
            { text: "ค่อย ๆ โคจรเข้าใกล้เพื่อศึกษามันอย่างระมัดระวัง", scoreType: "The Veritas" },
            { text: "ส่งสัญญาณขอให้ดาวอื่นมาช่วยกันให้แสง", scoreType: "The Solana" },
        ]
    },
    {
        image: "images/q3.jpg",
        question: "ดาวดวงข้าง ๆ เริ่มหม่นแสงลง คุณจะทำอย่างไร?",
        options: [
            { text: "เข้าไปใกล้แล้วปล่อยประกายแสงปลอบใจ", scoreType: "The Lunaria" },
            { text: "พยายามหาสาเหตุว่าทำไมแสงของเขาถึงดับ", scoreType: "The Astrella" },
            { text: " พูดให้กำลังใจด้วยเสียงคลื่นพลังงานอ่อนโยน", scoreType: "The Solana" },
            { text: "ปล่อยให้เขาอยู่กับตัวเอง เพราะทุกดาวต้องผ่านคืนมืดของตัวเอง", scoreType: "The Veritas" },
        ]
    },
    {
        image: "images/q4.jpg",
        question: "ระหว่างการเดินทาง คุณพบแสงประหลาดที่เชื้อเชิญให้เข้าไปใกล้ มันอาจอันตรายหรืออาจเป็นคำตอบของภารกิจ คุณจะ…?",
        options: [
            { text: "มุ่งหน้าเข้าไปโดยไม่ลังเล", scoreType: "The Astrella" },
            { text: "ส่งคลื่นตรวจจับก่อนจะตัดสินใจ", scoreType: "The Veritas" },
            { text: "ชวนดาวอื่นไปด้วยเพื่อสำรวจพร้อมกัน", scoreType: "The Solana" },
            { text: "อยู่ห่าง ๆ และคอยดูจากระยะปลอดภัย", scoreType: "The Lunaria" },
        ]
    },
    {
        image: "images/q5.jpg",
        question: "คุณได้ยินเสียงกระซิบจากจักรวาล มันถามว่า “เจ้าดวงดาว... แสงของเจ้ามีไว้เพื่อใคร?”",
        options: [
            { text: "เพื่อส่องทางให้ผู้อื่น", scoreType: "The Solana" },
            { text: "เพื่อค้นหาความจริงของตัวเอง", scoreType: "The Veritas" },
            { text: "เพื่อแบ่งปันความอบอุ่นกับผู้ที่ต้องการ", scoreType: "The Lunaria" },
            { text: "เพื่อระบายความรู้สึกในใจให้โลกรับรู้", scoreType: "The Astrella" },
        ]
    },
    {
        image: "images/q6.jpg",
        question: "วันหนึ่งถ้ามีพายุพลังงานขนาดใหญ่พัดผ่านจักรวาล คุณจะรับมืออย่างไร?",
        options: [
            { text: "ส่องแสงแรงขึ้นเพื่อต่อสู้กับมัน", scoreType: "The Astrella" },
            { text: "ซ่อนตัวหลังดาวเคราะห์เพื่อหลบพายุ", scoreType: "The Solana" },
            { text: "ปล่อยให้พายุพัดผ่าน แล้วค่อยฟื้นพลังภายหลัง", scoreType: "The Lunaria" },
            { text: "ใช้พลังของพายุแปลงเป็นพลังใหม่ให้ตัวเอง", scoreType: "The Veritas" },
        ]
    },
    {
        image: "images/q7.jpg",
        question: "ภารกิจของคุณใกล้ที่จะถึงจุดจบแล้ว คุณมองเห็นหมู่ดาวมากมายที่เคยเดินทางผ่าน คุณจะเลือกสิ่งใดเป็น “ร่องรอยสุดท้าย” ที่จะฝากไว้ในจักรวาล?",
        options: [
            { text: "ลำแสงงดงามให้ดาวรุ่นต่อไปได้เห็น", scoreType: "The Veritas" },
            { text: "เสียงสั่นสะเทือนแห่งความทรงจำ", scoreType: "The Lunaria" },
            { text: "แสงอบอุ่นเล็ก ๆ ที่ส่องถึงทุกดวงดาว", scoreType: "The Solana" },
            { text: "ความเงียบสงบที่ทำให้ทุกอย่างกลับสู่สมดุล", scoreType: "The Astrella" },
        ]
    },
    {
        image: "images/q8.jpg",
        question: "คุณคิดว่าภารกิจ​ของคุณคืออะไร?",
        options: [
            { text: "เพื่อมอบแสงให้ผู้อื่นได้มองเห็นเส้นทางของตนเอง", scoreType: "The Astrella" },
            { text: "เพื่อค้นหาความจริงที่ซ่อนยู่ในจักรวาล", scoreType: "The Veritas" },
            { text: "เพื่อรักษาสมดุลและความสงบในหมู่ดาว", scoreType: "The Lunaria" },
            { text: "เพื่อสร้างแรงบันดาลใจให้โลกเห็นความงาม", scoreType: "The Solana" },
        ]
    },
];

const personalityResults = {
    "The Astrella": {
        name: "The Astrella",
        description: "แอสเทรลล่า (Astrella)",
        image: "images/Astrella.jpg"
    },
    "The Lunaria": {
        name: "The Lunaria",
        description: "ลูน่าเรีย (Lunaria)",
        image: "images/Lunaria.jpg"
    },
    "The Veritas": {
        name: "The Veritas",
        description: "เวริแทส (Veritas)",
        image: "images/Veritas.jpg"
    },
    "The Solana": {
        name: "The Solana",
        description: "โซลานา (Solana)",
        image: "images/Solana.jpg"
    },
};

// 2: ตัวแปรสถานะและฟังก์ชันเริ่มต้น (ส่วนที่ปรับแก้)**

let currentQuestionIndex = 0;
let selectedScoreType = null;

// ** DOMContentLoaded HTML ถูกโหลดแล้วก่อนดึงมาใช้**
document.addEventListener('DOMContentLoaded', () => {
    // ดึงองค์ประกอบ HTML มาเก็บไว้ในตัวแปร
    window.startScreen = document.getElementById('start-screen');
    window.questionScreen = document.getElementById('question-screen');
    window.resultScreen = document.getElementById('result-screen');
    window.nextButton = document.getElementById('next-btn');

    // ผูกฟังก์ชัน startQuiz เข้ากับปุ่ม 'เริ่มทำแบบทดสอบ'
    const startBtn = document.getElementById('start-btn');
    if(startBtn) {
        startBtn.onclick = startQuiz;
    }
});


// ฟังก์ชันสำหรับเริ่มแบบทดสอบ
function startQuiz() {
    // 1. ซ่อนหน้าเริ่มต้น
    if (window.startScreen) {
        window.startScreen.classList.add('hidden');
    }
    
    // 2. แสดงหน้าคำถาม
    if (window.questionScreen) {
        window.questionScreen.classList.remove('hidden');
    }
    
    // 3. โหลดคำถามแรก
    loadQuestion();
}

// ฟังก์ชันสำหรับโหลดคำถามปัจจุบัน 
function loadQuestion() {
    // 1. ตรวจสอบว่ามีคำถามเหลืออยู่หรือไม่
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    
    // 2. อัพเดท Progress
    document.getElementById('progress-text').textContent = `คำถามที่ ${currentQuestionIndex + 1}/${questions.length}`;

    // 3. อัพเดท Image, Text และ Options
    document.getElementById('question-image').src = currentQuestion.image;
    document.getElementById('question-text').textContent = currentQuestion.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // ล้างตัวเลือกเก่า

    // 4. สร้างปุ่มตัวเลือก
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.onclick = () => selectOption(button, option.scoreType);
        optionsContainer.appendChild(button);
    });

    // 5. รีเซ็ตสถานะปุ่ม "ถัดไป" และตัวเลือกที่เลือก
    selectedScoreType = null;
    if (window.nextButton) {
        window.nextButton.classList.remove('active');
    }
}

// ฟังก์ชันสำหรับจัดการการเลือกตัวเลือก
function selectOption(button, scoreType) {
    // ลบ class 'selected' จากทุกปุ่ม
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // เพิ่ม class 'selected' ให้กับปุ่มที่เลือก
    button.classList.add('selected');
    
    // เก็บประเภทคะแนนที่เลือกไว้
    selectedScoreType = scoreType;
    
    // ทำให้ปุ่ม "ถัดไป" ใช้งานได้
    if (window.nextButton) {
        window.nextButton.classList.add('active');
    }
}

// ฟังก์ชันสำหรับไปคำถามถัดไป
function nextQuestion() {
    if (!selectedScoreType) {
        alert("กรุณาเลือกตัวเลือกก่อน");
        return;
    }
    
    // 1. เพิ่มคะแนนตามประเภทที่เลือก
    if (scores[selectedScoreType] !== undefined) {
        scores[selectedScoreType]++;
    }

    // 2. ไปคำถามถัดไปและโหลด
    currentQuestionIndex++;
    loadQuestion();
}

// ฟังก์ชันแสดงผลลัพธ์
function showResult() {
    // 1. ซ่อนหน้าคำถามและแสดงหน้าผลลัพธ์
    if (window.questionScreen) {
        window.questionScreen.classList.add('hidden');
    }
    if (window.resultScreen) {
        window.resultScreen.classList.remove('hidden');
    }

    // 2. หาบุคลิกภาพที่มีคะแนนสูงสุด
    let maxScore = -1;
    let resultPersonality = "";

    for (const type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            resultPersonality = type;
        } else if (scores[type] === maxScore) {
            // กรณีคะแนนเท่ากัน
        }
    }

    // 3. ดึงข้อมูลผลลัพธ์
    const finalResult = personalityResults[resultPersonality] || {
        name: "ไม่สามารถระบุตัวตนได้ ❓",
        description: "คุณมีบุคลิกภาพที่หลากหลายมากจนยากจะระบุ! ลองทำแบบทดสอบใหม่อีกครั้ง",
        image: "images/default_result.jpg" 
    };

    // 4. แสดงผลลัพธ์บนหน้าจอ
    document.getElementById('personality-name').textContent = finalResult.name;
    document.getElementById('result-image').src = finalResult.image;
    document.getElementById('result-description').textContent = finalResult.description;
}
