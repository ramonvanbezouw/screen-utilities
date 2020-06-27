import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TouchTestComponent } from './routes/touch-test/touch-test.component';
import { TouchIndicatorComponent } from './components/touch-indicator/touch-indicator.component';
import { AreaIndicatorComponent } from './components/area-indicator/area-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    TouchTestComponent,
    TouchIndicatorComponent,
    AreaIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
