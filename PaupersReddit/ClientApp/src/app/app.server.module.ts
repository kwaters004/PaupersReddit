import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ListComponent } from './list/list.component';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  imports: [AppModule, ServerModule, ModuleMapLoaderModule],
  bootstrap: [AppComponent],
  declarations: [
    ListComponent,
    SinglePostComponent]
})
export class AppServerModule { }
