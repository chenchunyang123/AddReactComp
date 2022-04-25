export default class CompTemplete {
  key: string = "";

  constructor(v: string) {
    this.key = `${v}Wrap`;
  }

  generateTsx() {
    return `import styles from "./index.less";

export default () => {
  return <div classNames={styles.${this.key}}>init</div>;
};
`;
  }

  generateLess() {
    return `.${this.key} {
  
}`;
  }
}
