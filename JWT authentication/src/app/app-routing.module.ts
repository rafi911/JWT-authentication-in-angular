import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/auth.gurd';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

// const routes: Routes = [
//   {path : '', redirectTo : 'user/registration', pathMatch : 'full'},
//   {
//     path : 'user', component : UserComponent,
//       children : [
//         {path : 'registration', component : RegistrationComponent}
//       ]
//   }
// ];

// const routes : Routes = [
//   {path : 'list', component : ListEmployeeComponent },
//   {path : 'create', component : CreateEmployeeComponent},
//   {path : '', redirectTo : '/list', pathMatch: 'full'}
// ]


const appRoutes: Routes = [
  {
      path: '',
      component: PostComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'comments',
    component: PostDetailsComponent, 
    canActivate: [AuthGuard]    
},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
