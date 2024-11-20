import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>, 
  ) {}

  async findOneById(id: number): Promise<Category> {
    return this.categoryRepository.findOneBy({ id });
  }

  async findOneByName(name: string): Promise<Category> {
    return this.categoryRepository.findOneBy({ name });
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const { name } = createCategoryDto;
    const newCategory = this.categoryRepository.create({ name });
    return this.categoryRepository.save(newCategory);
  }
  
}
