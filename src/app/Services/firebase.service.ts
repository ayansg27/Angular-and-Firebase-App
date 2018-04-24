import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class FirebaseService {
  listings: Observable<any[]>;
  private user: Observable<firebase.User>;
  constructor(private db: AngularFirestore) { }

  getListings(){
    this.listings = this.db.collection('listings').valueChanges() as Observable<Listing[]>;
    return this.listings;
  }

}

interface Listing{
  $key?:string;
  manufacturer?: string;
  model?: string;
  price?: string;
  driveType?: string;
  horsepower?: string;
  passenger?: string;
  wiki?: string;
  img?: string;
}
