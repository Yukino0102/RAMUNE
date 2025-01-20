pink {
    color: pink; /* テキストをピンク色にする */
}
const アイテムリスト = [
    "星のペンダント",
    "幸運のコイン",
    "ラッキーストーン",
    "虹のブレスレット",
    "金運アップの財布"
];

function アイテムを表示() {
    const ランダムなインデックス = Math.floor(Math.random() * アイテムリスト.length);
    const アイテム = アイテムリスト[ランダムなインデックス];
    const itemDiv = document.getElementById("item");
    itemDiv.innerText = アイテム;

    // アイテムに応じてクラスを追加
    if (アイテムリスト.includes(アイテム)) {
        itemDiv.className = "pink"; // ピンク色のクラスを追加
    }
}
