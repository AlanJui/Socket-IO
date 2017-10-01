# 專案指引

### 【專案摘要】：
透過 Web Socket 實作：「檢查 Client 是否還活著」的應用系統。

---

# 專案重點

 - 使用 Node.js 套件，取得 Client 端之「資源」使用狀態，如： CPU, RAM
 
 - 為符合 Node.js 之「宗旨」：程式應以「非阻斷（Non-block）」方式執行，但又需考量程式碼的「易讀性」，
 以利往後程式之修改變更作業，故採用「async/await」寫法，如檔案： `system-information.js` 、 `socket-client.js`
 
 - 對於常用之「輔助功能」，將之抽離，並集中於單一　JavaScript 檔案，以便逐漸累積「撰碼工具」資源，如檔案： `tools.js` 
 
---

# 參考資源

 - [Tutorial: TCP Server with Node.js](http://frostybay.com/articles/tcp-server-with-nodejs)

 - [Node.js 套件：systeminformation](https://www.npmjs.com/package/systeminformation) 
 
 - [The 80/20 Guide to Async/Await in Node.js](http://thecodebarbarian.com/80-20-guide-to-async-await-in-node.js.html)
 
 - [Mastering Async Await in Node.js](https://blog.risingstack.com/mastering-async-await-in-nodejs/)
 
 - [Promises for asynchronous programming](http://exploringjs.com/es6/ch_promises.html)