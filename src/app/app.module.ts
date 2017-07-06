import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageService } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { NewnameComponent } from './newname/newname.component';
import { CounterComponent } from './counter/counter.component';
import { RandomService } from './random.service';

@NgModule({
  declarations: [
    AppComponent,
    NewnameComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    LocalStorageService,
    RandomService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
