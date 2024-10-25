import { IsInt, IsOptional } from "class-validator";
import {Type} from 'class-transformer'
import { ApiPropertyOptional } from "@nestjs/swagger";

export class GetUsersDto {
    @ApiPropertyOptional({
        description : "get user with specific id",
        example : 1234
    })
    @IsOptional()
    @IsInt()
    @Type(()=>Number)
    id? : number
}
