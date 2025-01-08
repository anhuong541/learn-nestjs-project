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
    const usernameInDB = this.userRepository.findOneBy({
      username,
    });

    return usernameInDB;
  }

  async createUser(createUser: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...createUser,
    });
    const user = await this.userRepository.save(newUser);
    return responseSuccess(user, 'create user success');
  }

  async findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
