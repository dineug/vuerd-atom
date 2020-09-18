(function () {
  function postMessage(data) {
    window.parent.postMessage(Object.assign(data, { from: "vuerd-iframe" }), "*");
  }

  document.body.style = `padding: 0; margin: 0;`;
  const container = document.querySelector("#app");
  const editor = document.createElement("erd-editor");
  let currentEditorPath = null;

  window.addEventListener("resize", () => {
    editor.width = window.innerWidth;
    editor.height = window.innerHeight;
  });
  window.dispatchEvent(new Event("resize"));

  function receiveMessage(event) {
    const { from, command, value, editorPath } = event.data;
    if (from === "vuerd-atom") {
      switch (command) {
        case "value":
          if (currentEditorPath === null) {
            currentEditorPath = editorPath;
            editor.addEventListener("change", (event) => {
              postMessage({
                command: "value",
                value: event.target.value,
                editorPath: currentEditorPath
              });
            });
            editor.initLoadJson(value);
            container.appendChild(editor);
          }
          break;
      }
    }
  }
  window.addEventListener("message", receiveMessage);

  postMessage({ command: "ready" });
})();
