(function () {
  function postMessage(data) {
    window.parent.postMessage(Object.assign(data, { from: "vuerd-iframe" }), "*");
  }

  document.body.style = `padding: 0; margin: 0; width: 100%; height: 100vh;`;
  const editor = document.createElement("erd-editor");
  let currentEditorPath = null;
  editor.automaticLayout = true;

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
            document.body.appendChild(editor);
          }
          break;
      }
    }
  }
  window.addEventListener("message", receiveMessage);

  postMessage({ command: "ready" });
})();
