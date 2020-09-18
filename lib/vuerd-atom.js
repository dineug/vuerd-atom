'use babel';

import path from "path";
import { webviewManager } from './webview-manager';
import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'vuerd:webview': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {};
  },

  toggle() {
    const editor = atom.workspace.getActiveTextEditor();
    const activePane = getActiveTextEditorPane();
    const panes = atom.workspace.getPanes();

    if (isVuerdFile(editor.getPath())) {
      const erd = webviewManager.add(editor);

      if (atom.workspace.getPaneItems().includes(erd)) {
        panes.forEach((pane) => {
          if (pane.getItems().includes(erd)) {
            pane.activateItem(erd);
          }
        });
      } else {
        activePane.addItem(erd);
        activePane.activateItem(erd);
      }
    }
  },

};

function isVuerdFile(editorPath) {
  return path.basename(editorPath).match(/\.(vuerd.json)$/i);
}

function getActiveTextEditorPane() {
  const editor = atom.workspace.getActiveTextEditor();
  const panes = atom.workspace.getPanes();
  for (const pane of panes) {
    if (pane.getItems().includes(editor)) {
      return pane;
    }
  }
  return atom.workspace.getActivePane();
}
