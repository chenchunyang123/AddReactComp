import * as vscode from "vscode";
const fs = require("fs");

import CompTemplete from "./templete";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("ccy.addTemplete", async (command) => {
      let clickPath = command.path;
      vscode.window
        .showInputBox({
          password: false, // 输入内容是否是密码
          ignoreFocusOut: true, // 默认false，设置为true时鼠标点击别的地方输入框不会消失
          placeHolder: "输入文件夹名称", // 在输入框内的提示信息
          prompt: "命名文件夹", // 在输入框下方的提示信息
          // 对输入内容进行验证并返回
          validateInput: function (text) {
            return undefined;
          },
        })
        .then(async function (msg) {
          if (msg === "") {
            vscode.window.showErrorMessage("输入为空，创建失败");
            return;
          }
          try {
            // 生成目标文件夹路径
            const targetDirPath = `${clickPath}/${msg}`;
            // 创建文件夹
            fs.mkdirSync(targetDirPath);
            // 生成模版
            const temp = new CompTemplete(msg as string);
            // 根据模版创建文件
            // 生成index.tsx
            fs.writeFileSync(`${targetDirPath}/index.tsx`, temp.generateTsx());
            // 生成index.less
            fs.writeFileSync(
              `${targetDirPath}/index.less`,
              temp.generateLess()
            );
          } catch (e) {
            vscode.window.showErrorMessage(JSON.stringify(e));
          }
        });
    })
  );
}

export function deactivate() {}
