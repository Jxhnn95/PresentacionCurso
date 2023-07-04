import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css' ]

  templateUrl:'../app/inicio/inicio.html',
  styleUrls: ['../app/inicio/inicio.component.css'],

  templateUrl:'./paginas/angular/angular.component.html',
  styleUrls: ['./paginas/angular/angular.component.css'],

  templateUrl:'./paginas/html/html.component.html',
  styleUrls: ['./paginas/html/html.component.css'],

  templateUrl:'./paginas/java/java.component.html',
  styleUrls: ['./paginas/java/java.component.css'],

  templateUrl:'./paginas/javascript/javascript.component.html',
  styleUrls: ['./paginas/javascript/javascript.component.css'],

  templateUrl:'./paginas/node/node.component.html',
  styleUrls: ['./paginas/node/node.component.css'],



})


export class AppComponent {
  title = 'PresentacionCurso';
}
export class AngularComponent implements OnInit{

  title= 'Angular'
}
export class HtmlComponent implements OnInit{

  title= 'HtmlCss'
}

export class JavaComponent implements OnInit{

  title= 'Java'
}

export class JavascriptComponent implements OnInit{

  title= 'Js'
}
export class Nodecomponent implements OnInit{
  title= "node"
}
