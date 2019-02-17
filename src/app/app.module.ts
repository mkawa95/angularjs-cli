import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ToastrModule} from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { MyServiceService} from './my-service.service';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SlickModule} from 'ngx-slick';

// importing components
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

 // Defining routes
const AppRoutes: Routes = [
    { path: '' , component: HomeComponentComponent},
    { path: 'login' , component: LoginComponentComponent},
    { path: 'reset-password', component: PasswordResetComponent},
    { path: 'about' , component: AboutComponent},
    { path: 'contacts', component: ContactsComponent}
];

@NgModule({
  declarations: [
      AppComponent,
      LoginComponentComponent,
      HomeComponentComponent,
      PasswordResetComponent,
      StudentDetailsComponent,
      FooterComponent,
      MainComponent,
      HeaderComponent,
      AboutComponent,
      ContactsComponent,
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(AppRoutes),
      RouterModule.forChild(AppRoutes),
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      SlickModule,
      ToastrModule.forRoot({
          timeOut: 2000,
          preventDuplicates: true,
      }),
      CarouselModule.forRoot(),
      HttpClientModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
    slides = [
        {img: 'assets/images/africans.jpg'},
    ];
}
