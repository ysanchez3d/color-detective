function detectColor() {
  let eyeDropper = new EyeDropper();
  eyeDropper
    .open()
    .then((colorSelectionResult) => {
      const rgb = colorSelectionResult.sRGBHex;
      navigator.clipboard.writeText(rgb);
    })
    .catch((err) => {
      console.log("ERROR: " + err);
    });
  console.log("hi");
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: detectColor
  });
});
