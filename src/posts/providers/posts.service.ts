import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
    constructor (private readonly usersService:UsersService){}
    public findAll (){
        const user = this.usersService.findById(1)
        const post = {"page" : 4}

        return {user , post}
    }
}
