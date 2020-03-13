import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable }  from 'rxjs';
import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';
import { AngularFireDatabase } from '@angular/fire/database';
interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post: Observable<Post>
  text: string; // form input value
  description = 'Angular-Fire-Demo';
  
  itemValue = '';
  items: Observable<any[]>;  
  constructor(private store: Store<AppState>,public db: AngularFireDatabase) {
    this.post = this.store.select('post');
    this.items = db.list('items').valueChanges();
  }

  onSubmit () {
    this.db.list('items').push({content: this.})
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
