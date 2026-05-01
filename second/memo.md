# memo

```
const fs = require('fs');
const now = new Date();

// --- 1. 日付用の「設計図」を作成 ---
const dateOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
};
const dateFormatter = new Intl.DateTimeFormat('ja-JP', dateOptions);

// --- 2. 時刻用の「設計図」を作成 ---
const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};
const timeFormatter = new Intl.DateTimeFormat('ja-JP', timeOptions);

// --- 3. それぞれの設計図を使って文字列に変換 ---
let dateString = dateFormatter.format(now); // "2026/05/02"
let timeString = timeFormatter.format(now); // "01:15:30"

// --- 4. スラッシュをハイフンに置換（必要であれば） ---
dateString = dateString.replace(/\//g, '-');

// --- 5. 最後にすべてを連結して1行にする ---
const finalTimestamp = `${dateString} ${timeString}`;
const memoContent = process.argv[2] || "(空のメモ)";
const logLine = `${finalTimestamp} - ${memoContent}\n`;

// --- 6. ファイルに追記 ---
fs.appendFileSync('memo.txt', logLine);

console.log("Saved to memo.txt:");
console.log(logLine.trim());
```
