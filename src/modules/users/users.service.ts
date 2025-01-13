import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/entitities/user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { responseSuccess } from 'src/common/constants/api.response';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async checkUsernameExisted(username: string) {
    return responseSuccess(
      await this.userRepository.findOneBy({
        username,
      }),
      '',
    );
  }

  async createUser(createUser: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...createUser,
    });
    const user = await this.userRepository.save(newUser);
    return responseSuccess(user, 'create user success');
  }

  async updateUser(userId: number, updateUser: UpdateUserDto) {
    const userUpdated = await this.userRepository.save({
      id: userId,
      ...updateUser,
    });

    return responseSuccess(userUpdated, 'update user success');
  }

  async findAll() {
    return responseSuccess(await this.userRepository.find(), '');
  }

  async softDeleteUser(id: number) {
    return responseSuccess(
      await this.userRepository.save({
        id,
        status: 5, // status 5 is mean soft delete
      }),
      '',
    );
  }
}
