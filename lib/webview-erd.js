'use babel';

import path from "path";
import fs from "fs";

export default class WebviewERD {

  constructor(editor, webviewManager) {
    this.editor = editor;
    this.webviewManager = webviewManager;
    this.element = document.createElement('iframe');
    this.element.src = path.join(__dirname, "../static/index.html");
    this.element.width = "100%";
    this.element.height = "100%";
    this.element.frameBorder = "0";

    window.addEventListener("message", (event) => this.receiveMessage(event));
  }

  serialize() {}

  destroy() {
    this.webviewManager.remove(this);
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  getTitle() {
    return path.basename(this.editor.getPath());
  }

  receiveMessage(event) {
    const { from, command, value, editorPath } = event.data;
    if (from === "vuerd-iframe") {
      switch (command) {
        case "ready":
          postMessage(this.element, {
            command: "value",
            value: fs.readFileSync(this.editor.getPath(), "utf8"),
            editorPath: this.editor.getPath()
          });
          break;
        case "value":
          if (editorPath === this.editor.getPath()) {
            fs.writeFileSync(
              this.editor.getPath(),
              Buffer.from(JSON.stringify(JSON.parse(value), null, 2), "utf8")
            );
          }
          break;
      }

    }
  }
}

function postMessage(element, data) {
  element.contentWindow.postMessage(Object.assign(data, { from: "vuerd-atom" }), "*");
}
