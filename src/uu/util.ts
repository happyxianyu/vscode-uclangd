import * as vscode from 'vscode';

export function is_clangd_active(){
    const clangd = vscode.extensions.all.find((extension)=>extension.id==='llvm-vs-code-extensions.vscode-clangd');
    if(clangd){
        return true;
    }
    return false;
}
