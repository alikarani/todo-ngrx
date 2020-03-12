import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] UpVote';
export const DOWN_VOTE = '[Post] DownVote';
export const RESET = '[Post] Reset';

export class EditText implements Action {
 readonly type = EDIT_TEXT;
    constructor(public payload: string){}
}

export class Upvote implements Action {
    readonly type = UPVOTE;
}

export class Downvote implements Action {
    readonly type = DOWN_VOTE;
}

export class Reset implements Action {
    readonly type = RESET;
}

export type All = Upvote | Downvote | Reset | EditText;