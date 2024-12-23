function showFortune() {
    const zodiacInput = document.getElementById("zodiac").value;
    const resultDiv = document.getElementById("result");

    const fortunes = {
       result = "凶";
            } else if (colour === 
        "ふたご座": "コミュニケーションが鍵。",&& number === 0) {   "おひつじ座": "今日は新しい挑戦をしてみよう。",
        "おうし座": "安定した日。",
        "ふたご座": "コミュニケーションが鍵。",
        "かに座": "感情が高まる日。",
        "しし座": "自分を表現するチャンス。",
        "おとめ座": "細かい作業がはかどる日。",
        "てんびん座": "新しい出会いに期待。",
        "さそり座": "直感が冴える日。",
        "いて座": "冒険してみよう。",
        "みずがめ座": "忘れ物に注意。"
    };

    const fortune = fortunes[zodiacInput];

    if (fortune) {
        resultDiv.textContent = fortune;
    } else {
        resultDiv.textContent = "星座名が正しくありません。";
    }
}
