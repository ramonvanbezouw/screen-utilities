import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TouchTestComponent } from './routes/touch-test/touch-test.component';


const routes: Routes = [
  { path: '**', component: TouchTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
