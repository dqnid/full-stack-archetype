import { db_query } from "../../db";
import { Example } from "./example.types";

class ExampleService {
  constructor(private info?: string) {}

  async getAllExamples(): Promise<Example[]> {
    const examples = await db_query("select * from example");
    return examples as Example[];
  }

  async getExampleById(id: number): Promise<Example | null> {
    const example = await db_query(
      `select * from example as example WHERE id = ${id};`,
    );
    if (example.length) {
      return example[0] as Example;
    }
    return null;
  }
}

export default ExampleService;
