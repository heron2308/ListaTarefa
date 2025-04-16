import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasPageComponent } from './pages/tarefas-page/tarefas-page.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TarefasPageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
