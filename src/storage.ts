import * as vscode from "coc.nvim";
import { resolve } from "path";

export enum Location {
  LSP = "lsp",
}

export function uri(location: Location, context: vscode.ExtensionContext): vscode.Uri {
  return vscode.Uri.file(resolve(context.storagePath, location));
}
