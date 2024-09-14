import "./index.css";

const backButton = document.getElementById("back-button");
const forwardButton = document.getElementById("forward-button");
const reloadButton = document.getElementById("reload-button");
const searchButton = document.getElementById("search-button");
const newWindowButton = document.getElementById("new-window-button");
const goButton = document.getElementById("go");

const urlInputField = document.getElementById("url-input");
const webview = document.getElementById("webview");

let url = "";
urlInputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleUrl();
  }
});

if (!url) {
  url = "https://google.com";
  webview.src = url;
  urlInputField.value = url;
}

goButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleUrl();
});

searchButton.addEventListener("click", () => {
  url = "https://google.com";
  urlInputField.value = url;
  webview.src = url;
});

backButton.addEventListener("click", () => {
  webview.goBack();
});

forwardButton.addEventListener("click", () => {
  webview.goForward();
});

reloadButton.addEventListener("click", () => {
  webview.reload();
});

newWindowButton.addEventListener("click", () => {
  api.newWindow();
});

webview.addEventListener("did-navigate", (e) => {
  url = e.url;
  urlInputField.value = url;
});

function handleUrl() {
  const inputUrl = urlInputField.value;
  if (inputUrl.startsWith("http://") || inputUrl.startsWith("https://"))
    url = inputUrl;
  else url = "http://" + inputUrl;
  webview.src = url;
}
