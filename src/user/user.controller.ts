import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from './dtos/createUser.dto';

@Controller('app')
export class UserController {
    @Get('users')
    async getAllUsers(){
        return JSON.stringify({test: 'ABC'})
    }

    @Post('user')
    async createUser(@Body() createUser: CreateUser){
        return {
            ...createUser,
            password: undefined
        };
    }
}
