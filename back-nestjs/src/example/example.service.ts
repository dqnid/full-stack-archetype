import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
import { Example } from './entities/example.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private exampleRepository: Repository<Example>,
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  create(createExampleDto: CreateExampleDto) {
    return this.exampleRepository.create(createExampleDto);
  }

  findAll() {
    return this.dataSource.query('select * from example');
  }

  findOne(id: number) {
    return this.exampleRepository.findOneBy({ id });
  }

  update(id: number, updateExampleDto: UpdateExampleDto) {
    return this.exampleRepository.update({ id }, updateExampleDto);
  }

  remove(id: number) {
    return this.exampleRepository.delete(id);
  }
}
