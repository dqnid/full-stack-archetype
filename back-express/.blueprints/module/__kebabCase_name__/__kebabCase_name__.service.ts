class {{pascalCase name}}Service {
  constructor(private info?: string) {}

  async getAll{{pascalCase name}}() {
    return Promise.resolve(this.info);
  }
}

export default {{pascalCase name}}Service;
