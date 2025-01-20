const アイテムリスト = [
    "星のペンダント",
    "幸運のコイン",
    "ラッキーストーン",
    "虹のブレスレット",
    "金運アップの財布"
];

function アイテムを表示() {
    const ランダムなインデックス = Math.floor(Math.random() * アイテムリスト.length);
    const アイテム要素 = document.getElementById("item");
    
    // ラッキーアイテムを表示
    アイテム要素.innerText = アイテムリスト[ランダムなインデックス];
    
    // スタイルを変更してピンク色にする
    アイテム要素.style.color = "pink";
}
