import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';

@Controller('posts')
@ApiTags('Posts')

export class PostsController {

    constructor(private readonly postsService:PostsService){}
    @Get(':userId?')
    public getPosts(@Param('userId') userId : string){
        return this.postsService.findAll()
    }

    @Post()
    @ApiOperation({
        summary : "create a new blog post"
    })
    @ApiResponse({
        status : 201,
        description : 'you got a 201 response if your post is created successfully'

    })
    public createPost(@Body() createPostDto:CreatePostDto){
        return createPostDto
    }

    @Patch()
    @ApiOperation({
        summary : "updates on existing blog post"
    })
    @ApiResponse({
        status : 200,
        description : 'a 200 response if the post updated successfully'

    })
    public patchPost(@Body() updatePostDto:UpdatePostDto){
        return updatePostDto
    }
}
