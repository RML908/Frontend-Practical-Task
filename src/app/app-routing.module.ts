import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./navbar-components/about-us/about-us.component";
import {AppComponent} from "./app.component";
import {ServicesComponent} from "./navbar-components/services/services.component";

const routes: Routes = [
  {path: 'about-us', redirectTo: './about-us/about-us', pathMatch:'full'},
  {path:'home', component:AppComponent},
  {path:'services', component:ServicesComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule {
}
