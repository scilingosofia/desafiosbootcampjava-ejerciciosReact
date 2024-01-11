import { Subject } from 'rxjs';

export class ModalManager {
    subject = new Subject();
    getSubject(){
        return this.subject.asObservable();
    }
    next(data){
        this.subject.next(data);
    }
    reset(){
        this.subject.next(undefined);
    }
}