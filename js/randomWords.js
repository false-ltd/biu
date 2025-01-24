const randomWordsKey = "firework_random_words";

// 从 localStorage 加载祝福语
function loadRandomWords() {
    const storedWords = localStorage.getItem(randomWordsKey);
    return storedWords ? JSON.parse(storedWords) : ["春节快乐", "心想事成", "阖家欢乐", "财源滚滚"];
}

// 保存祝福语到 localStorage
function saveRandomWords(words) {
    localStorage.setItem(randomWordsKey, JSON.stringify(words));
}

// 初始化祝福语
const randomWords = loadRandomWords();

// 更新祝福语
function updateRandomWords(newWord) {
    if (newWord && !randomWords.includes(newWord)) {
        randomWords.push(newWord);
        saveRandomWords(randomWords);
        alert("文字烟花添加成功！");
    }
}

// 删除祝福语
function removeRandomWord(word) {
    const index = randomWords.indexOf(word);
    if (index > -1) {
        randomWords.splice(index, 1);
        saveRandomWords(randomWords);
    }
}

// 获取所有祝福语
function getAllRandomWords() {
    return randomWords;
}

// 重置应用程序
function resetApplication() {
    localStorage.clear();
    alert("设置项已重置！");
}

// 添加事件监听器到重置按钮
document.querySelector(".setting-reset").addEventListener("click", resetApplication);
