import {IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MATCHES, MaxLength, MinLength} from 'class-validator'
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    firstName : string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(96)
    lastName? : string

    @IsEmail()
    @IsNotEmpty()
    email : string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
      })
    password: string;

}
