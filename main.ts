// there are several ways we can bootstrap module in angular
// we can tell angular to bootstrap on server or client or precompile it

// dynamic means client side, our code will be compiled in the browser
// it will contain client side code that processes templates, bindings and allows us to do dependency injections
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)