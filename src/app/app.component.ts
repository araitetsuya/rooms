import { Component } from '@angular/core';
import {AuthService} from "./services/auth/auth.service";
import {RoomService} from "./services/room/room.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rooms';

  users$ = this.roomService.getUsers();
  user$ = this.authService.user$;

  constructor(
    private authService: AuthService,
    private roomService: RoomService
  ) {
  }

  login() {
    this.authService.login();
  }

  logout(uid: string) {
    this.authService.logout(uid);
  }

  toggleLight() {
    this.roomService.toggleLight(status);
  }
}
