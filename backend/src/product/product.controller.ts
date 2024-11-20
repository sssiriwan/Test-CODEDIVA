import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    const products = await this.productService.getAllProducts();
    return products;
  }

  @Get('category')
  async getProducts(@Query('categoryId') categoryId: number) {
    const products =
      await this.productService.getProductsByCategoryId(categoryId);
    return products;
  }

  @Post('create')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: path.join(__dirname, '../../../frontend/public/swensens'),
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = path.extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  createProduct(@Body() body: any, @UploadedFile() image: Express.Multer.File) {
    return this.productService.createProduct(body, image);
  }

  @Put('update/:id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: path.join(__dirname, '../../../frontend/public/swensens'),
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = path.extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  updateProduct(
    @Param('id') id: number,
    @Body() body: any,
    @UploadedFile() image?: Express.Multer.File,
  ) {
    return this.productService.updateProduct(id, body, image);
  }
}
