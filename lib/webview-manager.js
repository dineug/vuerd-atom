'use babel';

import WebviewERD from './webview-erd';

export default class WebviewManager {
  constructor() {
    this.erdList = [];
  }

  add(editor) {
    let erd = this.find(editor);
    if (erd === null) {
      erd = new WebviewERD(editor, this);
      this.erdList.push(erd);
    }
    return erd;
  }

  remove(erd) {
    const index = this.erdList.indexOf(erd);
    if (index >= 0) {
      this.erdList.splice(index, 1);
    }
  }

  find(editor) {
    let target = null;
    for (const erd of this.erdList) {
      if (erd.editor.getPath() === editor.getPath()) {
        target = erd;
        break;
      }
    }
    return target;
  }
}

export const webviewManager = new WebviewManager();
export default WebviewManager;
