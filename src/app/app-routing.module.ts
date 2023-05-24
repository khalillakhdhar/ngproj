import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { SecondecpComponent } from './secondecp/secondecp.component';

const routes: Routes = [
  {path: '',component:HelloComponent},
  {path:'seconde',component:SecondecpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
