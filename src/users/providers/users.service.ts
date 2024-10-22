import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersDto } from '../dtos/get-user.dto';
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UsersService {
    constructor (
        @Inject(forwardRef(()=>AuthService))
    private readonly authService:AuthService){}
    public findAll (getUsersDto:GetUsersDto , limit:number , page:number){
        return [
            {
                "firstName": "ramin",
                "lastName": "khaledian",
                "email": "ramkaf@gmail.com",
                "password": "StrongP@ssword1"
            },
            {
                "firstName": "sara",
                "lastName": "mohammdi",
                "email": "sara@gmail.com",
                "password": "StrongP@ssword1"
            }
            ,
            {
                "firstName": "ali",
                "lastName": "hosseini",
                "email": "ali@gmail.com",
                "password": "StrongP@ssword1"
            }
            
        ]
    }

    public findById (id:number){
        return {
            "id" : 1234,
            "firstName": "ramin",
            "lastName": "khaledian",
            "email": "ramkaf@gmail.com",
            "password": "StrongP@ssword1"
        }
        
    }
}