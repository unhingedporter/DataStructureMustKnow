//main.ts

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
// ----------------------------------------------------------

// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({

    // declare the module of the application
    declarations: [
        AppComponent
    ],

    // Get third party module
    imports: [
        BrowserModule,
        FormsModule
    ],

    // global services
    providers: [],

    // Start component of the solution
    bootstrap: [AppComponent]
})
// export class AppModule { }
