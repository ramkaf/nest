import { IsEnum, IsOptional, IsString, IsArray, ValidateNested, IsDate, MinLength, IsNotEmpty, Matches, IsJSON, IsISO8601 } from "class-validator";
import { Type } from 'class-transformer';
import { CreatePostMetaOptionDto } from "./create-post-meta-option";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export enum PostType {
    POST = 'post',
    PAGE = 'page',
    STORY = 'story',
    SERIES = 'series'
}

export enum Status {
    DRAFT = 'draft',
    SCHEDULED = 'scheduled',
    REVIEW = 'review',
    PUBLISHED = 'published'
}

export class CreatePostDto {
    @ApiProperty({
        example: "This is a title",
        description: "This is the title for the blog post"
    })
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        example: "my-first-post",
        description: "Slug must be a unique identifier for the post, consisting of lowercase letters, numbers, Persian characters, and dashes."
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9\u0600-\u06FF-]+$/, { message: 'Slug must contain only lowercase letters, numbers, Persian characters, and dashes.' })
    slug: string;

    @ApiPropertyOptional({
        example: "http://example.com/schema",
        description: "Optional schema URL for the post."
    })
    @IsOptional()
    @IsString()
    schema?: string;

    @ApiPropertyOptional({
        example: "{\"body\": \"This is the content of the post.\"}",
        description: "Serialized JSON object representing the content of the post. Must be a valid JSON string."
    })
    @IsOptional()
    @IsJSON()
    content?: string;

    @ApiPropertyOptional({
        example: "http://example.com/image.jpg",
        description: "Optional URL of the featured image for the post."
    })
    @IsOptional()
    @IsString()
    featuredImageUrl?: string;

    @ApiPropertyOptional({
        example: "2024-10-22T10:00:00Z",
        description: "Optional ISO8601 formatted date when the post should be published."
    })
    @IsISO8601()
    @IsOptional()
    publishOn?: Date;

    @ApiPropertyOptional({
        example: ["tag1", "tag2", "tag3"],
        description: "Optional array of tags associated with the post. Each tag must be at least 3 characters long."
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    @MinLength(3, { each: true })
    tags?: string[];

    @ApiPropertyOptional({
        type : 'array',
        required : false,
        items : {
            type : 'object',
            properties : {
                key :{
                    type : 'string' ,
                    description : 'the key can be any string identifier for your meta options',
                    example : "sidebarEnabled"
                },
                value :{
                    type : 'any' ,
                    description : 'any value that you want to save to the key',
                    example : true
                }
            },
        },
        description: "Optional array of meta options for the post."
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionDto)
    metaOption?: CreatePostMetaOptionDto[];

    @ApiProperty({
        example: "post",
        description: "Post type must be one of the following: post, page, story, series."
    })
    @IsEnum(PostType, { message: 'Post type must be one of post, page, story, series.' })
    postType: PostType;

    @ApiProperty({
        example: "draft",
        description: "Post status must be one of the following: draft, scheduled, review, published."
    })
    @IsEnum(Status, { message: 'Post status must be one of draft, scheduled, review, published.' })
    status: Status;
}
