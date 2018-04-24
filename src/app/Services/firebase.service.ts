import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseService {
  listings: Observable<any[]>;
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
