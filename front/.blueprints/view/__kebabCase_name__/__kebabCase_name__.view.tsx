import styles from "./{{kebabCase name}}.module.scss";

type {{pascalCase name}}ViewProps = {
    // query parameters
    searchParams: { [key: string]: string | string[] | undefined }
    // url parameters
    params: { [key: string]: string | undefined }
}

export const {{pascalCase name}}View:React.FC<{{pascalCase name}}ViewProps> = ({}) => {
  return (
    <div data-testid="{{{kebabCase name}}-view}" className={styles.container}></div>
  )
}
