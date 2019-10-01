import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/jwt.interceptor';
import { ErrorInterceptor } from './shared/error.interceptor';
import { fakeBackendProvider } from './shared/fake-backend';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component'; 
import { BsModalService } from 'ngx-bootstrap/modal';

import { ModalModule } from 'ngx-bootstrap';
// or
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostComponent,
    PostDetailsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
