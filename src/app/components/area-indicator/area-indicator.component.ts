import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { TouchData } from 'src/app/types/types';

@Component({
  selector: 'app-area-indicator',
  templateUrl: './area-indicator.component.html',
  styleUrls: ['./area-indicator.component.scss']
})
export class AreaIndicatorComponent implements OnInit {

  @HostBinding('style.top')
  private top: string;
  @HostBinding('style.left')
  private left: string;
  @HostBinding('style.width')
  private width: string;
  @HostBinding('style.height')
  private height: string;

  public label: string;

  @Input()
  public set touches(touches: TouchData[]) {
    this.top = `${Math.min(...touches.map(t => t.position.y))}px`;
    this.height = `${Math.max(...touches.map(t => t.position.y)) - Math.min(...touches.map(t => t.position.y))}px`;
    this.left = `${Math.min(...touches.map(t => t.position.x))}px`;
    this.width = `${Math.max(...touches.map(t => t.position.x)) - Math.min(...touches.map(t => t.position.x))}px`;
    this.label = `x:${this.left}\ny:${this.top}\nw:${this.width}\nh:${this.height}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
