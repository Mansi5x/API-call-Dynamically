import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicemasterlistComponent } from './servicemasterlist/servicemasterlist.component';
import { CreateserviceComponent } from './createservice/createservice.component';
import { AppComponent } from 'src/app/app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
    {path:'servicemasterlist', component:ServicemasterlistComponent},
    {path:'createservice', component:CreateserviceComponent},
    {path:'reactiveform', component:ReactiveformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
