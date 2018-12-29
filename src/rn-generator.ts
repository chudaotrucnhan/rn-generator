import * as path from 'path';
import * as fs from 'fs';

import { InputBoxOptions } from "vscode";
import { IDisposable } from './disposable.interface';
import { RNExistError } from './errors/rn-exist.error';
import { VSCodeWindow } from './vscode.interfaces';
import { Config } from './configs/config';

const config = new Config();

export class RNGenerator implements IDisposable {
  private readonly extension = '.js';
  private readonly defaultPath = 'src';
  private readonly projectFiles = [
    { folderName: 'store', files: ['AppStore'] },
    { folderName: 'configs', files: ['AppConfig', 'AppConstant'] },
    { folderName: 'screens', files: ['MainScreen'] },
    { folderName: 'utils', files: ['AppHelper'] },
    { folderName: 'navigation', files: ['AppNavigator'] }
  ];

  constructor(
    private workspaceRoot: string,
    private window: VSCodeWindow
  ) { }

  async execute(): Promise<void> {
    // prompt for the name of the rn, or the path to create the rn in
    const rnname: string | undefined = await this.prompt();

    if (!rnname) {
      return;
    }

    try {
      if (rnname === 'project') {
        this.createProject(rnname);
      } else {
        this.createFolder(rnname);
      }
    } catch (err) {
      if (err instanceof RNExistError) {
        this.window.showErrorMessage(`RN: '${rnname}' already exists`);
      } else {
        this.window.showErrorMessage(`Error: ${err.message}`);
      }
    }
  }

  async prompt(): Promise<string | undefined> {
    // this can be abstracted out as an argument for prompt
    const options: InputBoxOptions = {
      ignoreFocusOut: true,
      prompt: `RN name: 'some_rn', or a relative path: 'src/some_rn'`,
      placeHolder: 'project',
      validateInput: this.validate
    };

    return await this.window.showInputBox(options);
  }

  createProject(rnname: string) {
    this.projectFiles.forEach((obj: object) => {
      let absoluteRNPath: string = this.toAbsolutePath(Object(obj)["folderName"]);
      this.createFile(absoluteRNPath, Object(obj)["files"]);
    });
    this.window.showInformationMessage(`RN: '${rnname}' successfully created`);
  }

  createFolder(folderName: string) {
    let absoluteRNPath: string = this.toAbsolutePath(folderName);
    fs.mkdirSync(absoluteRNPath);
  }

  createFile(absoluteRNPath: string, objFiles: string[]) {
    if (fs.existsSync(absoluteRNPath)) {
      const rn: string = path.basename(absoluteRNPath);

      throw new RNExistError(`'${rn}' already exists`);
    }

    try {
      // create the directory
      fs.mkdirSync(absoluteRNPath);

      objFiles.forEach((file: string) => {
        const filename = `${file}${this.extension}`;
        const fullpath = path.join(absoluteRNPath, filename);
        const body = Object(config.dataBody)[file].join("\n");
        if (!body) {
          fs.writeFileSync(fullpath, `/* ${filename} */`);
        } else {
          fs.writeFileSync(fullpath, body);
        }
      });
    } catch (err) {
      // log other than console?
      console.log('Error', err.message);

      throw err;
    }
  }

  validate(name: string): string | null {
    if (!name) {
      return 'Name is required';
    }

    if (name.includes(' ')) {
      return 'Spaces are not allowed';
    }

    // no errors
    return null;
  }

  toAbsolutePath(nameOrRelativePath: string): string {
    // simple test for slashes in string
    if (/\/|\\/.test(nameOrRelativePath)) {
      return path.resolve(this.workspaceRoot, nameOrRelativePath);
    }
    return path.resolve(this.workspaceRoot, this.defaultPath, nameOrRelativePath);
  }

  dispose(): void {
    console.log('disposing...');
  }
}