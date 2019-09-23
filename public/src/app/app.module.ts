import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewAppComponent } from './new-app/new-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }