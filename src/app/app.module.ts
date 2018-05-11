import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

import { FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// export const firebaseConfig=
// {
//   apiKey: "AIzaSyBVQd9-niHxMuiu-U48hmSlAXRNuYBnaeY",
//   authDomain: "empexample.firebaseapp.com",
//   databaseURL: "https://empexample.firebaseio.com",
//   projectId: "empexample",
//   storageBucket: "empexample.appspot.com",
//   messagingSenderId: "726722445145"
// }

@NgModule({
  declarations: [
    AppComponent,  
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(firebaseconfig)
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [AngularFireDatabaseModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
