// 1. まずは「素」の状態で保持
const now = new Date();

// 2. 必要な時だけ変換して表示
const displayTime = now.toLocaleTimeString();

console.log(displayTime);
