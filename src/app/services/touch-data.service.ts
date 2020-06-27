import { Injectable } from '@angular/core';
import { TouchData } from '../types/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TouchDataService {

  public selected$ = new BehaviorSubject<number>(-1);
  public data$ = new BehaviorSubject<TouchData[]>([]);

  constructor() {

  }

  public clear(): void {
    this.data$.next([]);
    this.selected$.next(-1);
  }

  public delete(): void {
    if (this.data$.value.length > 0) {
      const a = [...this.data$.value];
      a.splice(this.selected$.value, 1);
      this.data$.next(a);
      this.updateIndex();
    }
  }

  public updateIndex(dif: number = 0): void {
    if (this.data$.value.length === 0) {
      this.selected$.next(-1);
    } else {
      let newValue = this.selected$.value + dif;
      if (newValue < 0) {
        newValue += this.data$.value.length;
      }
      newValue %= this.data$.value.length;
      this.selected$.next(newValue);
    }
  }

  public touchInput(e: TouchEvent): void {
    this.data$.next([...this.data$.value, {
      position: { x: e.touches[0].pageX, y: e.touches[0].pageY },
      type: 'touch',
      timestamp: new Date()
    }]);
    this.selected$.next(this.data$.value.length - 1);
  }

  public mouseInput(e: MouseEvent): void {
    this.data$.next([...this.data$.value, {
      position: { x: e.pageX, y: e.pageY },
      type: 'mouse',
      timestamp: new Date()
    }]);
  }

  public keyboardInput(e: KeyboardEvent): void {
    if (e.ctrlKey) {
      const data = [...this.data$.value];
      const current = { ...data[this.selected$.value] } || undefined;
      if (current === undefined) {
        return;
      }
      switch (e.key) {
        case 'ArrowLeft':
          current.position.x -= e.shiftKey ? 10 : 1;
          break;
        case 'ArrowRight':
          current.position.x += e.shiftKey ? 10 : 1;
          break;
        case 'ArrowUp':
          current.position.y -= e.shiftKey ? 10 : 1;
          break;
        case 'ArrowDown':
          current.position.y += e.shiftKey ? 10 : 1;
          break;
        default:
          return;
      }
      data.splice(this.selected$.value, 1, current);
      this.data$.next(data);
    } else {
      switch (e.key) {
        case 'r':
        case 'R':
          this.clear();
          break;
        case 'ArrowLeft':
          this.updateIndex(-1);
          break;
        case 'ArrowRight':
          this.updateIndex(+1);
          break;
        case 'Delete':
          this.delete();
          break;
      }
    }
  }
}
