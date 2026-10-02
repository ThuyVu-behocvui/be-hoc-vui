// ========================================
// CÀI ĐẶT GAME
// ========================================
// ========================================
// DỮ LIỆU CÁC CHỦ ĐỀ
// ========================================

const topics = {

    // ====================================
    // SỐ
    // ====================================

    numbers: {

        title: "Tìm số",

        items: [
            {
                value: 0,
                display: "0",
                speech: "không"
            },
            {
                value: 1,
                display: "1",
                speech: "một"
            },
            {
                value: 2,
                display: "2",
                speech: "hai"
            },
            {
                value: 3,
                display: "3",
                speech: "ba"
            },
            {
                value: 4,
                display: "4",
                speech: "bốn"
            },
            {
                value: 5,
                display: "5",
                speech: "năm"
            },
            {
                value: 6,
                display: "6",
                speech: "sáu"
            },
            {
                value: 7,
                display: "7",
                speech: "bảy"
            },
            {
                value: 8,
                display: "8",
                speech: "tám"
            },
            {
                value: 9,
                display: "9",
                speech: "chín"
            },
            {
                value: 10,
                display: "10",
                speech: "mười"
            }
        ]
    },


    // ====================================
    // MÀU SẮC
    // ====================================

    colors: {

    title: "Tìm màu",

    items: [

        {
            value: "red",
            display: "🔴",
            speech: "đỏ",
            color: "#E74C3C"
        },

        {
            value: "blue",
            display: "🔵",
            speech: "xanh dương",
            color: "#3498DB"
        },

        {
            value: "yellow",
            display: "🟡",
            speech: "vàng",
            color: "#F1C40F"
        },

        {
            value: "green",
            display: "🟢",
            speech: "xanh lá",
            color: "#2ECC71"
        },

        {
            value: "orange",
            display: "🟠",
            speech: "cam",
            color: "#E67E22"
        },

        {
            value: "purple",
            display: "🟣",
            speech: "tím",
            color: "#9B59B6"
        },

        {
            value: "pink",
            display: "🩷",
            speech: "hồng",
            color: "#FF69B4"
        },

        {
            value: "brown",
            display: "🟤",
            speech: "nâu",
            color: "#8B4513"
        },

        {
            value: "black",
            display: "⚫",
            speech: "đen",
            color: "#222222"
        },

        {
            value: "white",
            display: "⚪",
            speech: "trắng",
            color: "#FFFFFF"
        },

        {
            value: "gray",
            display: "🩶",
            speech: "xám",
            color: "#808080"
        },

         ]
},


    // ====================================
    // HOA QUẢ
    // ====================================

   fruits: {

    title: "Tìm hoa quả",

    items: [

        {
            value: "apple",
            display: "🍎",
            speech: "quả táo"
        },

        {
            value: "banana",
            display: "🍌",
            speech: "quả chuối"
        },

        {
            value: "orange",
            display: "🍊",
            speech: "quả cam"
        },

        {
            value: "watermelon",
            display: "🍉",
            speech: "quả dưa hấu"
        },

        {
            value: "grapes",
            display: "🍇",
            speech: "quả nho"
        },

        {
            value: "strawberry",
            display: "🍓",
            speech: "quả dâu tây"
        },

        {
            value: "pineapple",
            display: "🍍",
            speech: "quả dứa"
        },

        {
            value: "pear",
            display: "🍐",
            speech: "quả lê"
        },

        {
            value: "peach",
            display: "🍑",
            speech: "quả đào"
        },

        {
            value: "cherry",
            display: "🍒",
            speech: "quả anh đào"
        },

        {
            value: "lemon",
            display: "🍋",
            speech: "quả chanh"
        },

        {
            value: "coconut",
            display: "🥥",
            speech: "quả dừa"
        },

        {
            value: "kiwi",
            display: "🥝",
            speech: "quả kiwi"
        },

        {
            value: "mango",
            display: "🥭",
            speech: "quả xoài"
        },

        {
            value: "melon",
            display: "🍈",
            speech: "quả dưa lưới"
        },

        {
            value: "blueberry",
            display: "🫐",
            speech: "quả việt quất"
        },

        {
            value: "avocado",
            display: "🥑",
            speech: "quả bơ"
        },

        {
            value: "papaya",
            display: "🥭",
            speech: "quả đu đủ"
        },

        {
            value: "guava",
            display: "🍐",
            speech: "quả ổi"
        },

        {
            value: "dragonfruit",
            display: "🍉",
            speech: "quả thanh long"
        }
    ]
},


    // ====================================
    // CON VẬT
    // ====================================

animals: {

    title: "Tìm con vật",

    items: [

        {
            value: "dog",
            display: "🐶",
            speech: "con chó"
        },

        {
            value: "cat",
            display: "🐱",
            speech: "con mèo"
        },

        {
            value: "rabbit",
            display: "🐰",
            speech: "con thỏ"
        },

        {
            value: "tiger",
            display: "🐯",
            speech: "con hổ"
        },

        {
            value: "lion",
            display: "🦁",
            speech: "con sư tử"
        },

        {
            value: "elephant",
            display: "🐘",
            speech: "con voi"
        },

        {
            value: "monkey",
            display: "🐵",
            speech: "con khỉ"
        },

        {
            value: "chicken",
            display: "🐔",
            speech: "con gà"
        },

        {
            value: "cow",
            display: "🐮",
            speech: "con bò"
        },

        {
            value: "pig",
            display: "🐷",
            speech: "con lợn"
        },

        {
            value: "horse",
            display: "🐴",
            speech: "con ngựa"
        },

        {
            value: "sheep",
            display: "🐑",
            speech: "con cừu"
        },

        {
            value: "goat",
            display: "🐐",
            speech: "con dê"
        },

        {
            value: "duck",
            display: "🦆",
            speech: "con vịt"
        },

        {
            value: "frog",
            display: "🐸",
            speech: "con ếch"
        },

        {
            value: "bear",
            display: "🐻",
            speech: "con gấu"
        },

        {
            value: "panda",
            display: "🐼",
            speech: "con gấu trúc"
        },

        {
            value: "giraffe",
            display: "🦒",
            speech: "con hươu cao cổ"
        },

        {
            value: "zebra",
            display: "🦓",
            speech: "con ngựa vằn"
        },

        {
            value: "fish",
            display: "🐟",
            speech: "con cá"
        }
    ]
},


    // ====================================
    // PHƯƠNG TIỆN
    // ====================================

    vehicles: {

    title: "Tìm phương tiện",

    items: [

        {
            value: "car",
            display: "🚗",
            speech: "ô tô"
        },

        {
            value: "bus",
            display: "🚌",
            speech: "xe buýt"
        },

        {
            value: "train",
            display: "🚆",
            speech: "tàu hỏa"
        },

        {
            value: "airplane",
            display: "✈️",
            speech: "máy bay"
        },

        {
            value: "ship",
            display: "🚢",
            speech: "tàu thủy"
        },

        {
            value: "bicycle",
            display: "🚲",
            speech: "xe đạp"
        },

        {
            value: "motorcycle",
            display: "🏍️",
            speech: "xe máy"
        },

        {
            value: "taxi",
            display: "🚕",
            speech: "xe taxi"
        },

        {
            value: "ambulance",
            display: "🚑",
            speech: "xe cứu thương"
        },

        {
            value: "firetruck",
            display: "🚒",
            speech: "xe cứu hỏa"
        },

        {
            value: "policecar",
            display: "🚓",
            speech: "xe cảnh sát"
        },

        {
            value: "truck",
            display: "🚚",
            speech: "xe tải"
        },

        {
            value: "tractor",
            display: "🚜",
            speech: "máy kéo"
        },

        {
            value: "helicopter",
            display: "🚁",
            speech: "trực thăng"
        },

        {
            value: "rocket",
            display: "🚀",
            speech: "tên lửa"
        },

        {
            value: "scooter",
            display: "🛴",
            speech: "xe trượt"
        },

        {
            value: "canoe",
            display: "🛶",
            speech: "thuyền"
        },

        {
            value: "speedboat",
            display: "🚤",
            speech: "ca nô"
        },

        {
            value: "tram",
            display: "🚋",
            speech: "xe điện"
        },

        {
            value: "subway",
            display: "🚇",
            speech: "tàu điện ngầm"
        }
    ]
},


    // ====================================
    // GIA ĐÌNH
    // ====================================

    family: {

        title: "Tìm người thân",

        items: [

            {
                value: "father",
                display: "👨",
                speech: "bố"
            },

            {
                value: "mother",
                display: "👩",
                speech: "mẹ"
            },

            {
                value: "grandfather",
                display: "👴",
                speech: "ông"
            },

            {
                value: "grandmother",
                display: "👵",
                speech: "bà"
            },

            {
                value: "boy",
                display: "👦",
                speech: "anh hoặc em trai"
            },

            {
                value: "girl",
                display: "👧",
                speech: "chị hoặc em gái"
            }
        ]
    }
};

const bubbleCount = 5;

const minNumber = 0;

const maxNumber = 10;

const bubbleSize = 100;

const minDistance = 115;

const maxAttempts = 100;


// Tổng số câu trong một lượt chơi

const totalQuestions = 10;


// ========================================
// MÀU BONG BÓNG
// ========================================

const colors = [

    "#4A90E2",

    "#50C878",

    "#F5C542",

    "#E85D75",

    "#9B59B6",

    "#F39C12",

    "#1ABC9C",

    "#E67E22"
];


// ========================================
// TÊN SỐ BẰNG TIẾNG VIỆT
// ========================================

const numberWords = [

    "không",

    "một",

    "hai",

    "ba",

    "bốn",

    "năm",

    "sáu",

    "bảy",

    "tám",

    "chín",

    "mười"

];


// ========================================
// LẤY THÀNH PHẦN HTML
// ========================================

const board =
    document.getElementById(
        "game-board"
    );

const result =
    document.getElementById(
        "result"
    );

const question =
    document.getElementById(
        "question"
    );

const progress =
    document.getElementById(
        "progress"
    );

const scoreDisplay =
    document.getElementById(
        "score"
    );

const finishScreen =
    document.getElementById(
        "finish-screen"
    );

const finalScore =
    document.getElementById(
        "final-score"
    );

const finalStars =
    document.getElementById(
        "final-stars"
    );

const restartButton =
    document.getElementById(
        "restart-button"
    );


// ========================================
// BIẾN GAME
// ========================================

let currentQuestion = 1;

let score = 0;

let currentTopic = "numbers";

let targetItem;

let usedTargets = [];

let animationFrames = [];

// ========================================
// ÂM THANH GAME
// ========================================

let audioContext = null;


// ========================================
// KHỞI TẠO AUDIO
// ========================================

function initAudio() {

    if (audioContext === null) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    // Một số trình duyệt trên điện thoại
    // cần resume AudioContext sau khi người dùng chạm màn hình

    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }
}


// ========================================
// ÂM THANH BONG BÓNG NỔ
// ========================================

function playPopSound() {

    // Nếu trình duyệt không hỗ trợ
    // Web Audio thì bỏ qua

    if (
        !window.AudioContext &&
        !window.webkitAudioContext
    ) {

        return;
    }


    initAudio();


    const now =
        audioContext.currentTime;


    // ====================================
    // ÂM THANH CHÍNH
    // ====================================

    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        "sine";


    // Tần số ban đầu

    oscillator.frequency.setValueAtTime(
        500,
        now
    );


    // Hạ nhanh tần số
    // tạo cảm giác "pop"

    oscillator.frequency.exponentialRampToValueAtTime(
        120,
        now + 0.12
    );


    // Âm lượng

    gain.gain.setValueAtTime(
        0.001,
        now
    );


    gain.gain.exponentialRampToValueAtTime(
        0.25,
        now + 0.01
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        now + 0.13
    );


    oscillator.connect(
        gain
    );


    gain.connect(
        audioContext.destination
    );


    oscillator.start(
        now
    );


    oscillator.stop(
        now + 0.14
    );
}
// ========================================
// GIỌNG NÓI
// ========================================

function speak(text) {

    // Nếu trình duyệt không hỗ trợ giọng nói
    if (!("speechSynthesis" in window)) {

        return;
    }


    // Dừng câu nói trước đó

    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    // Tiếng Việt

    speech.lang = "vi-VN";


    // Tốc độ nói

    speech.rate = 0.85;


    // Cao độ

    speech.pitch = 1.15;


    // Âm lượng

    speech.volume = 1;


    window.speechSynthesis.speak(
        speech
    );
}


// ========================================
// ĐỌC CÂU HỎI
// ========================================

function speakQuestion() {

    if (currentTopic === "numbers") {

        speak(
            "Con hãy tìm số " +
            targetItem.speech
        );

    } else if (currentTopic === "colors") {

        speak(
            "Con hãy tìm màu " +
            targetItem.speech
        );

    } else {

        speak(
            "Con hãy tìm " +
            targetItem.speech
        );

    }
}
// ========================================
// TẠO SỐ NGẪU NHIÊN
// ========================================

function randomNumber(min, max) {

    return Math.floor(

        Math.random() *
        (max - min + 1)

    ) + min;
}


// ========================================
// TRỘN MẢNG
// ========================================

function shuffle(array) {

    for (

        let i = array.length - 1;

        i > 0;

        i--

    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];
    }

    return array;
}


// ========================================
// KIỂM TRA VỊ TRÍ
// ========================================

function isPositionValid(
    x,
    y,
    positions
) {

    for (
        const position of positions
    ) {

        const dx =
            x - position.x;

        const dy =
            y - position.y;

        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );

        if (
            distance <
            minDistance
        ) {

            return false;
        }
    }

    return true;
}


// ========================================
// TÌM VỊ TRÍ BONG BÓNG
// ========================================

function findPosition(
    positions
) {

    const boardWidth =
        board.clientWidth;

    const boardHeight =
        board.clientHeight;


    for (

        let attempt = 0;

        attempt < maxAttempts;

        attempt++

    ) {

        const x =
            Math.random() *
            (boardWidth -
                bubbleSize);

        const y =
            Math.random() *
            (boardHeight -
                bubbleSize);


        if (
            isPositionValid(
                x,
                y,
                positions
            )
        ) {

            return {
                x: x,
                y: y
            };
        }
    }


    return {
        x: 10,
        y: 10
    };
}


// ========================================
// TẠO DANH SÁCH SỐ
// ========================================

// ========================================
// TẠO DANH SÁCH ĐỐI TƯỢNG
// ========================================

function createItems() {

    const topic =
        topics[currentTopic];

    const items = [];


    // =================================
    // CHỌN ĐÁP ÁN ĐÚNG KHÔNG LẶP
    // =================================

    // Lấy những đáp án chưa từng xuất hiện
    // trong lượt chơi hiện tại

    const availableTargets =
        topic.items.filter(
            function (item) {

                return !usedTargets.includes(
                    item.value
                );

            }
        );


    // Nếu vẫn còn đáp án chưa dùng
    // thì chọn ngẫu nhiên trong số đó

    if (availableTargets.length > 0) {

        const targetIndex =
            Math.floor(
                Math.random() *
                availableTargets.length
            );

        targetItem =
            availableTargets[targetIndex];

    }

    // Trường hợp đặc biệt:
    // nếu đã dùng hết tất cả đáp án
    // thì bắt đầu lại danh sách

    else {

        usedTargets = [];

        const targetIndex =
            Math.floor(
                Math.random() *
                topic.items.length
            );

        targetItem =
            topic.items[targetIndex];

    }


    // Ghi nhận đáp án này đã được sử dụng

    usedTargets.push(
        targetItem.value
    );


    // Thêm đáp án đúng vào danh sách

    items.push(
        targetItem
    );


    // =================================
    // THÊM 4 ĐÁP ÁN SAI
    // =================================

    while (
        items.length < bubbleCount
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                topic.items.length
            );

        const item =
            topic.items[randomIndex];


        // Không lấy trùng đáp án

        const alreadyExists =
            items.some(
                function (existingItem) {

                    return existingItem.value ===
                        item.value;

                }
            );


        if (!alreadyExists) {

            items.push(
                item
            );

        }
    }


    // Trộn vị trí các đáp án

    shuffle(items);


    return items;
}
    

// ========================================
// HIỆU ỨNG KHI TRẢ LỜI ĐÚNG
// ========================================

// ========================================
// HIỆU ỨNG BONG BÓNG NỔ
// ========================================

function createBubbleExplosion(bubble) {

    const x =
        bubble.offsetLeft +
        bubble.offsetWidth / 2;

    const y =
        bubble.offsetTop +
        bubble.offsetHeight / 2;


    // Lấy màu của bong bóng

    const bubbleColor =
        bubble.style.backgroundColor;


    // Tạo 10 mảnh nhỏ

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "bubble-piece";


        piece.style.backgroundColor =
            bubbleColor;


        piece.style.left =
            x + "px";


        piece.style.top =
            y + "px";


        // Góc bay ngẫu nhiên

        const angle =
            Math.random() *
            Math.PI *
            2;


        // Khoảng cách bay

        const distance =
    55 +
    Math.random() * 65;


        const moveX =
            Math.cos(angle) *
            distance;


        const moveY =
            Math.sin(angle) *
            distance;


        piece.style.setProperty(
            "--move-x",
            moveX + "px"
        );


        piece.style.setProperty(
            "--move-y",
            moveY + "px"
        );


        board.appendChild(
            piece
        );


        // Xóa sau animation

        setTimeout(
            function () {

                piece.remove();

            },
            1000
        );
    }
}
function createCorrectEffect(bubble) {

    // Lấy vị trí bong bóng

    const x =
        bubble.offsetLeft +
        bubble.offsetWidth / 2;

    const y =
        bubble.offsetTop +
        bubble.offsetHeight / 2;


    // ================================
    // TẠO ✨
    // ================================

    const effect =
        document.createElement("div");

    effect.className =
        "correct-effect";

    effect.textContent =
        "✨";


    effect.style.left =
        x + "px";

    effect.style.top =
        y + "px";


    board.appendChild(effect);


    // Xóa sau khi animation kết thúc

    setTimeout(function () {

        effect.remove();

    }, 800);


    // ================================
    // TẠO CÁC NGÔI SAO
    // ================================

    for (
        let i = 0;
        i < 5;
        i++
    ) {

        const star =
            document.createElement("div");

        star.className =
            "star-effect";

        star.textContent =
            "⭐";


        star.style.left =
            x + "px";

        star.style.top =
            y + "px";


        // Mỗi ngôi sao bay một hướng

        const moveX =
            (Math.random() - 0.5) *
            140;


        star.style.setProperty(
            "--move-x",
            moveX + "px"
        );


        board.appendChild(star);


        setTimeout(function () {

            star.remove();

        }, 800);

    }
}

// ========================================
// CẬP NHẬT ĐIỂM
// ========================================

function updateScore() {

    scoreDisplay.textContent =
        "⭐ " + score;
}


// ========================================
// TẠO CÂU HỎI
// ========================================

function createQuestion() {

    // ====================================
    // HỦY ANIMATION CŨ
    // ====================================

    animationFrames.forEach(
        function (frameId) {

            cancelAnimationFrame(
                frameId
            );

        }
    );

    animationFrames = [];


    // ====================================
    // DỪNG GIỌNG ĐỌC CŨ
    // ====================================

    if (
        "speechSynthesis" in window
    ) {

        window.speechSynthesis.cancel();

    }


    // ====================================
    // XÓA BONG BÓNG CŨ
    // ====================================

    board.innerHTML = "";


    // ====================================
    // XÓA THÔNG BÁO
    // ====================================

    result.textContent = "";

    result.classList.remove(
        "correct",
        "wrong"
    );


    // ====================================
    // CẬP NHẬT TIẾN TRÌNH
    // ====================================

    progress.textContent =
        "Câu " +
        currentQuestion +
        " / " +
        totalQuestions;


    // ====================================
    // TẠO 5 ĐÁP ÁN
    // ====================================

    const items =
        createItems();


    // ====================================
    // HIỂN THỊ CÂU HỎI
    // ====================================

    if (currentTopic === "numbers") {

    question.innerHTML =
        "Con hãy tìm số <strong>" +
        targetItem.speech +
        "</strong>";

} else if (currentTopic === "colors") {

    question.innerHTML =
        "Con hãy tìm màu <strong>" +
        targetItem.speech +
        "</strong>";

} else {

    question.innerHTML =
        "Con hãy tìm <strong>" +
        targetItem.speech +
        "</strong>";

}


    // ====================================
    // ĐỌC CÂU HỎI
    // ====================================

    speakQuestion();


    // ====================================
    // LƯU VỊ TRÍ BONG BÓNG
    // ====================================

    const positions = [];


    // ====================================
    // TẠO BONG BÓNG
    // ====================================

    items.forEach(

        (item, index) => {

            // ----------------------------
            // Tìm vị trí
            // ----------------------------

            const position =
                findPosition(
                    positions
                );


            positions.push(
                position
            );


            // ----------------------------
            // Tạo bong bóng
            // ----------------------------

            const bubble =
                document.createElement(
                    "div"
                );


            bubble.className =
                "bubble";


            // Nội dung bong bóng

            bubble.textContent =
                item.display;


            // Màu bong bóng

            bubble.style.backgroundColor =
                item.color ||
                colors[
                    index %
                    colors.length
                ];


            // Vị trí

            bubble.style.left =
                position.x +
                "px";

            bubble.style.top =
                position.y +
                "px";


            // =================================
            // CHUYỂN ĐỘNG NHẸ
            // =================================

            let angle =
                Math.random() *
                Math.PI *
                2;


            let speed =
                0.008 +
                Math.random() *
                0.008;


            function moveBubble() {

                angle += speed;


                const moveX =
                    Math.sin(angle) *
                    5;


                const moveY =
                    Math.cos(angle) *
                    5;


                bubble.style.marginLeft =
                    moveX + "px";


                bubble.style.marginTop =
                    moveY + "px";


                const frameId =
                    requestAnimationFrame(
                        moveBubble
                    );


                animationFrames.push(
                    frameId
                );
            }


            moveBubble();


            // =================================
            // KHI BÉ CHẠM BONG BÓNG
            // =================================

            bubble.addEventListener(
                "pointerdown",
                function () {

                    // Kích hoạt âm thanh

                    initAudio();


                    // =================================
                    // ĐÁP ÁN ĐÚNG
                    // =================================

                    if (
                        item.value ===
                        targetItem.value
                    ) {

                        // Không cho bấm tiếp

                        bubble.style.pointerEvents =
                            "none";


                        // Thông báo

                        result.textContent =
                            "🎉 Đúng rồi!";


                        result.classList.remove(
                            "correct"
                        );


                        void result.offsetWidth;


                        result.classList.add(
                            "correct"
                        );


                        // Âm thanh pop

                        playPopSound();


                        // Hiệu ứng bong bóng

                        createBubbleExplosion(
                            bubble
                        );


                        // Hiệu ứng sao

                        createCorrectEffect(
                            bubble
                        );


                        // Giọng nói

                        speak(
                            "Đúng rồi! Giỏi lắm!"
                        );


                        // Cộng điểm

                        score++;

                        updateScore();


                        // Bong bóng nổ

                        bubble.classList.add(
                            "pop"
                        );


                        // Chuyển câu

                        setTimeout(

                            function () {

                                currentQuestion++;


                                if (
                                    currentQuestion >
                                    totalQuestions
                                ) {

                                    finishGame();

                                }

                                else {

                                    createQuestion();

                                }

                            },

                            1000

                        );

                    }


                    // =================================
                    // ĐÁP ÁN SAI
                    // =================================

                    else {

                        result.textContent =
                            "😊 Con thử lại nhé!";


                        result.classList.remove(
                            "wrong"
                        );


                        void result.offsetWidth;


                        result.classList.add(
                            "wrong"
                        );


                        speak(
                            "Con thử lại nhé!"
                        );


                        bubble.classList.add(
                            "wrong"
                        );


                        setTimeout(

                            function () {

                                bubble.classList.remove(
                                    "wrong"
                                );

                            },

                            350

                        );

                    }

                }
            );


            // =================================
            // ĐƯA BONG BÓNG VÀO GAME
            // =================================

            board.appendChild(
                bubble
            );

        }
    );
}

// ========================================
// KẾT THÚC GAME
// ========================================

function finishGame() {

    // Dừng giọng nói

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }


    // Xóa bong bóng

    board.innerHTML = "";


    // Xóa câu hỏi

    question.textContent = "";


    // Xóa thông báo

    result.textContent = "";


    // Hiển thị điểm cuối

    finalScore.textContent =
        score +
        " / " +
        totalQuestions +
        " câu đúng";


    // Tạo số sao theo điểm

    let stars = "";


    for (
        let i = 0;
        i < score;
        i++
    ) {

        stars += "⭐";
    }


    finalStars.textContent =
        stars;


    // Hiển thị màn hình hoàn thành

    finishScreen.style.display =
        "flex";


    // Đọc lời chúc

    speak(
        "Giỏi lắm! Con đã hoàn thành!"
    );
}


// ========================================
// CHƠI LẠI
// ========================================

restartButton.addEventListener(
    "click",
    function () {

        currentQuestion = 1;

        score = 0;

usedTargets = [];

        updateScore();

        finishScreen.style.display =
            "none";

        createQuestion();

    }
);


// ========================================
// MÀN HÌNH CHỌN CHỦ ĐỀ
// ========================================

const topicScreen =
    document.getElementById(
        "topic-screen"
    );


const topicButtons =
    document.querySelectorAll(
        ".topic-button"
    );


const gameScreen =
    document.querySelector(
        ".game"
    );
const gameTitle =
    document.getElementById(
        "game-title"
    );

// ========================================
// CHỌN CHỦ ĐỀ
// ========================================

topicButtons.forEach(

    function (button) {

        button.addEventListener(
            "click",
            function () {

                // Lấy chủ đề

                currentTopic =
                    button.dataset.topic;


                // =================================
                // CẬP NHẬT TIÊU ĐỀ THEO CHỦ ĐỀ
                // =================================

                const topicTitles = {

                    numbers: "🔢 TÌM SỐ",

                    colors: "🎨 TÌM MÀU",

                    fruits: "🍎 TÌM HOA QUẢ",

                    animals: "🐶 TÌM CON VẬT",

                    vehicles: "🚗 TÌM PHƯƠNG TIỆN",

                    family: "👨‍👩‍👧 TÌM NGƯỜI THÂN"

                };


                gameTitle.textContent =
                    topicTitles[currentTopic];


                // Ẩn menu

                topicScreen.style.display =
                    "none";


                // Hiện game

                gameScreen.style.display =
                    "block";


                // Reset game

                currentQuestion = 1;

                score = 0;
usedTargets = [];

                updateScore();


                // Bắt đầu

                createQuestion();

            }
        );

    }
);
// ========================================
// NÚT QUAY LẠI MENU CHỦ ĐỀ
// ========================================

const backButton =
    document.getElementById(
        "back-button"
    );


backButton.addEventListener(
    "click",
    function () {

        // Dừng giọng đọc

        if (
            "speechSynthesis" in window
        ) {

            window.speechSynthesis.cancel();

        }


        // Dừng animation

        animationFrames.forEach(
            function (frameId) {

                cancelAnimationFrame(
                    frameId
                );

            }
        );


        animationFrames = [];


        // Xóa bong bóng

        board.innerHTML = "";


        // Ẩn game

        gameScreen.style.display =
            "none";


        // Hiện menu

        topicScreen.style.display =
            "flex";

    }
);
// ========================================
// ĐĂNG KÝ SERVICE WORKER
// ========================================

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        function () {

            navigator.serviceWorker.register(
                "./service-worker.js"
            ).then(
                function () {

                    console.log(
                        "Service Worker đã được đăng ký."
                    );

                }
            ).catch(
                function (error) {

                    console.log(
                        "Service Worker lỗi:",
                        error
                    );

                }
            );

        }
    );

}