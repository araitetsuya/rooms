import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {User} from "../../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private db: AngularFirestore
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.db.collection<User>('users').valueChanges();
  }

  toggleLight(status: boolean) {
    this.db.doc('room/light').set({

    });
  }
}

