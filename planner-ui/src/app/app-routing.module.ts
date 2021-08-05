import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth/auth-guard.service";
import { LoginComponent } from "./auth/login/login.component";
import { RegistrationComponent } from "./auth/registration/registration.component";
import { HomeComponent } from "./home/home.component";
import { WorkspaceComponent } from "./workspace/workspace.component";

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'registration', component:RegistrationComponent},
    {path:'planner', component:WorkspaceComponent,canActivate:[AuthGuardService]}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }