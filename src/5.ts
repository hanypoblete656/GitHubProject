  import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-githubproject',
  templateUrl: './githubproject.component.html',
  styleUrls: ['./githubproject.component.css']
})
export class GithubprojectComponent {
    constructor(private userService: UserService) {}
   ngOnInit() {
       this.userService.getUsers().subscribe(users => {
           console.log(users);
       });
   }
}