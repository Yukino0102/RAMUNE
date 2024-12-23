document.getElementById('showItemButton').addEventListener('click', function() {
    const items = [
        '赤い靴',
        '星の形のペンダント',
        '緑色のノート',
        '青いマグカップ',
        '黄色い花束'
    ];
    
    // ランダムにアイテムを選ぶ
    const randomIndex = Math.floor(Math.random() * items.length);
    const luckyItem = items[randomIndex];

    // アイテムを表示
    const luckyItemDiv = document.getElementById('luckyItem');
    luckyItemDiv.textContent = `今日のラッキーアイテムは「${luckyItem}」です！`;
    luckyItemDiv.style.display = 'block';
});
