import { Component, OnInit, HostListener } from '@angular/core';
import { TouchData } from 'src/app/types/types';
import { TouchDataService } from 'src/app/services/touch-data.service';

@Component({
  selector: 'app-touch-test',
  templateUrl: './touch-test.component.html',
  styleUrls: ['./touch-test.component.scss']
})
export class TouchTestComponent implements OnInit {

  public selected = -1;
  public touches: TouchData[] = [];

  constructor(public dataService: TouchDataService) { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  public clicked(e: MouseEvent): void {
    this.dataService.mouseInput(e);
  }

  @HostListener('touch', ['$event'])
  public touched(e: TouchEvent): void {
    this.dataService.touchInput(e);
  }

  @HostListener('window:keydown', ['$event'])
  public keyDown(e: KeyboardEvent): void {
    this.dataService.keyboardInput(e);
  }



}
