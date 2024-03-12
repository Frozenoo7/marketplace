import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { ISuccessReponse } from 'common/responses';
import { CategoryEntity } from 'entities/index.entity';
import { CategoryRepository } from 'repository/category.repository';

import { CreateCategoryDto, UpdateCategoryDto } from './dtos';
import { ICategoryResponse } from './response';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async createCategory(body: CreateCategoryDto): Promise<ISuccessReponse> {
    const { name, parentId } = body;

    await this.checkForExistingCategory(name);

    if (parentId) {
      const parentCatById = await this.categoryRepository.findOne({
        where: { id: parentId },
      });

      if (!parentCatById) {
        throw new HttpException(
          { error: 'Parent category not found.' },
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const category = this.categoryRepository.create(body);
    await this.categoryRepository.save({
      ...category,
      parent: { id: parentId },
    });

    return { message: 'Category successfully created.' };
  }

  async findAllCategories(): Promise<any[]> {
    const findManyOptions = {
      relations: { childrens: { childrens: true } },
      where: { parent: null },
    };

    const data = await this.categoryRepository.find(findManyOptions);

    return data;
  }

  async findCategoryById(id: string): Promise<ICategoryResponse> {
    const data = await this.categoryRepository.findOne({
      where: { id: id },
      relations: { childrens: true },
    });

    return this.transformToCategoryResponse(data);
  }

  async findCategoryByName(name: string): Promise<ICategoryResponse> {
    const data = await this.categoryRepository.findOne({
      where: { name: name },
    });

    if (data !== null) return this.transformToCategoryResponse(data ?? data);
  }

  async updateCategory(
    id: string,
    body: UpdateCategoryDto,
  ): Promise<ISuccessReponse> {
    const { parentId, name } = body;
    const categoryById = await this.findCategoryById(id);

    if (categoryById.name.toLowerCase() !== name.toLowerCase()) {
      await this.checkForExistingCategory(name);
    }

    if (parentId) {
      const parent = await this.findCategoryById(parentId);

      if (!parent) {
        throw new HttpException(
          'Parent Category Not Found',
          HttpStatus.NOT_FOUND,
        );
      }
      body['parent'] = parent;
    }

    delete body.parentId;
    await this.categoryRepository.update(id, body);

    return { message: 'Category successfully updated.' };
  }

  async deleteCategory(id: string): Promise<ISuccessReponse> {
    const savedCategory = await this.findCategoryById(id);
    if (!savedCategory) {
      throw new HttpException('Category Not Found', 404);
    }

    await this.categoryRepository.delete(id);

    return { message: 'Category successfully deleted.' };
  }

  private async checkForExistingCategory(name: string) {
    const existingCategory = await this.findCategoryByName(name);

    if (existingCategory) {
      throw new HttpException(
        'Category with the same name already exists',
        HttpStatus.CONFLICT,
      );
    }
  }

  private transformToCategoryResponse(data: CategoryEntity): ICategoryResponse {
    const { id, name, description, isActive, icon, childrens } = data;
    const transformedChildrens = childrens.map(
      ({ id, name, description, icon, isActive }) => ({
        id,
        name,
        description,
        icon,
        isActive,
      }),
    );

    return {
      id,
      name,
      description,
      isActive,
      icon,
      childrens: transformedChildrens,
    };
  }
}

// in the create product service first check the category if exist in the db or not if not thow notfound error
// also add the respose dto(what are thing we use in reposnse in standed practice add taht) and add that dto on the responsetype e.g Promise<responsetype>
// also transform that created data then return the data of the trnsfored data on the create api
// trnsfor is something like
