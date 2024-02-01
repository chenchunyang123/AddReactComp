export default class CompTemplete {
  styleWrapKey: string = "";
  componentName: string = "";
  interfaceName: string = "";

  constructor(v: string) {
    this.styleWrapKey = `${v}Wrapper`;
    this.componentName =
      v.substring(0, 1).toUpperCase() + v.substring(1, v.length);
    this.interfaceName = `${this.componentName}Props`;
  }

  generateTsx() {
    return `import React from "react";
import styles from "./index.less";

interface ${this.interfaceName} {
  name: string;
}

/**
 * 这是一个初始化的组件
 * @param {string} name - 姓名
 * @returns 返回一个jsx组件
 */
const ${this.componentName}: React.FC<${this.interfaceName}> = ({ name }) => {
  return <div className={styles.${this.styleWrapKey}}>init</div>;
};

export default ${this.componentName};
`;
  }

  generateLess() {
    return `.${this.styleWrapKey} {
  
}`;
  }
}
