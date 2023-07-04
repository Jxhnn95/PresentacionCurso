import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginasComponent } from './paginas/paginas.component';
import { InicioComponent } from './inicio/inicio.component';
import { HtmlComponent } from './paginas/html/html.component';
import { CssComponent } from './paginas/css/css.component';
import { JavascriptComponent } from './paginas/javascript/javascript.component';
import { NodeComponent } from './paginas/node/node.component';
import { AngularComponent } from './paginas/angular/angular.component';
import { JavaComponent } from './paginas/java/java.component';
import { AdivinarComponent } from './paginas/javascript/adivinar/adivinar.component';
import { ArraysComponent } from './paginas/javascript/arrays/arrays.component';
import { EdadComponent } from './paginas/javascript/edad/edad.component';
import { FuncionesComponent } from './paginas/javascript/funciones/funciones.component';
import { ObjetosComponent } from './paginas/javascript/objetos/objetos.component';
import { PeliculasComponent } from './paginas/javascript/peliculas/peliculas.component';
import { ProblemasComponent } from './paginas/javascript/problemas/problemas.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginasComponent,
    InicioComponent,
    TemasComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    NodeComponent,
    AngularComponent,
    JavaComponent,
    AdivinarComponent,
    ArraysComponent,
    EdadComponent,
    FuncionesComponent,
    ObjetosComponent,
    PeliculasComponent,
    ProblemasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
