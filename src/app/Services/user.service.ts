import { User } from "../Models/user";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})

export class UserService{
    users: User[]=[
        new User(1, 'Saira Shrestha','Saira', 'saira@'),
        new User(2, 'Sudip Sapkota' , 'Sudip', 'sudip@'),
        new User(3, 'Bibash Sitaula', 'Bibash', 'bibash@'),
        new User(4, 'Rojal Bista','Rojal','rojal@')
    ]
}