const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
    console.log("Just got message : ", message, " from server");
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server");
})

setTimeout(() => {
    socket.send("Hello from Browser!");
}, 10000);