import { commands, workspace, window, ExtensionContext } from 'vscode';
import { RNGenerator } from './rn-generator';
import { getWorkspaceFolder } from './utils/workspace-util';

export function activate(context: ExtensionContext) {
    const workspaceRoot: string = getWorkspaceFolder(workspace.workspaceFolders);
    const generator = new RNGenerator(workspaceRoot, window);

    let disposable = commands.registerCommand('extension.generateRN', () => {
        generator.execute();
    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(generator);
}

export function deactivate() {
}