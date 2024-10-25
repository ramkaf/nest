import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersDto } from './dtos/get-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './providers/users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(private readonly usersServices:UsersService){}

    @Get('/:id?')
    @ApiOperation({
        summary : "fetch a list of registered users on the application"
    })
    @ApiResponse({
        status : 200,
        description : "users fetched successfully base on the query"
    })
    @ApiQuery({
        name : "limit",
        type: 'number',
        required : false,
        description : "the number of entires returned per query",
        example :10
    })
    @ApiQuery({
        name : "page",
        type: 'number',
        required : false,
        description : "the position of the page number that you want to return",
        example :1
    })
    public getUsers(@Param() getUsersDto:GetUsersDto,@Query('limit' , new DefaultValuePipe(10),ParseIntPipe) limit:number , @Query('page' ,new DefaultValuePipe(1),ParseIntPipe) page:number ){
        return this.usersServices.findAll(getUsersDto , limit , page)
    }

    @Post()
    public createUser(@Body() createUserDto: CreateUserDto) {
    }
 
    @Patch()
    public pathUser(@Body() patchUserDto: PatchUserDto) {
        console.log(patchUserDto);
        
    }
}
