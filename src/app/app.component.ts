import { Component, HostListener } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'screen-utilities';

  constructor(public styleService: StyleService) {

  }

  @HostListener('window:keydown', ['$event'])
  public keyDown(e: KeyboardEvent): void {
    this.styleService.keyboardInput(e);
  }
}
