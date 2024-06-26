// worker.js
onmessage = function(e) {
    const data = e.data;
    const jsonString = JSON.stringify(data);
    postMessage(jsonString);
  };
  