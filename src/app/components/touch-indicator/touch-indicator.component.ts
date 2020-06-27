import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { TouchData } from 'src/app/types/types';



@Component({
  selector: 'app-touch-indicator',
  templateUrl: './touch-indicator.component.html',
  styleUrls: ['./touch-indicator.component.scss']
})
export class TouchIndicatorComponent implements OnInit {

  @HostBinding('style.left')
  public x: string;
  @HostBinding('style.top')
  public y: string;

  @HostBinding('class')
  public class: string | undefined;

  @Input()
  public set selected(value: boolean) {
    this.class = value ? 'selected' : undefined;
  }

  public label: string;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public set data(value: TouchData) {
    this.x = `${value.position.x}px`;
    this.y = `${value.position.y}px`;
    this.label = `(${value.position.x}, ${value.position.y})`;
  }

}
