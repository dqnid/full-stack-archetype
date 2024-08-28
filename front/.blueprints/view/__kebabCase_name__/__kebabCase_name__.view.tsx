import styles from "./{{kebabCase name}}.module.scss";

type {{pascalCase name}}Props = {}

export const {{pascalCase name}}View:React.FC<{{pascalCase name}}Props> = ({}) => {
  return (
    <div data-testid="{{{kebabCase name}}-view}" className={styles.container}></div>
  )
}
