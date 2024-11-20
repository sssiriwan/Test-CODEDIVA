import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CategoryService } from '../category/category.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly categoryService: CategoryService, 
  ) {}

  async createProduct(data: any, imageFile: Express.Multer.File) {
    const category = await this.categoryService.findOneById(parseInt(data.category, 10));
    const imageUrl = `/swensens/${imageFile.filename}`;
    const product = this.productRepository.create({
      ...data,
      imageUrl,
      category,
    });
    return this.productRepository.save(product);
  }

  async getAllProducts() {
    return this.productRepository.find({
      relations: ['category'],
    });
  }

  async getProductsByCategoryId(categoryId: number) {
    return this.productRepository.find({
      where: { category: { id: categoryId } },
      relations: ['category'],
    });
  }
  

  async updateProduct(id: number, data: any, imageFile?: Express.Multer.File) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new BadRequestException('Product not found');
    }

    if (imageFile) {
      const oldImagePath = path.join(
        __dirname,
        '../../../frontend/public',
        product.imageUrl,
      );
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      product.imageUrl = `/swensens/${imageFile.filename}`;
    }

    Object.assign(product, data);
    return this.productRepository.save(product);
  }
}
