import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/entitities/users.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { responseSuccess } from 'src/common/constants/api.response';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUser: User) {
    const newUser = this.userRepository.create({
      id: 1,
      firstName: 'An',
      lastName: 'Huong',
      isActive: true,
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
