import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private colors: string[] = ['#620bcc', '#fff'];
  public inverted = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public keyboardInput(e: KeyboardEvent): void {
    switch (e.key) {
      case 'i':
        this.switchInverted();
        break;
    }
  }

  private switchInverted(): void {
    this.inverted = !this.inverted;
    this.document.documentElement.style.setProperty('--color', this.colors[this.inverted ? 1 : 0]);
    this.document.documentElement.style.setProperty('--background',  this.colors[this.inverted ? 0 : 1]);
  }
}
