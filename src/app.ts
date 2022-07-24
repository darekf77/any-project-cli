//#region @notForNpm

//#region @browser
    import { NgModule } from '@angular/core';
    import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-any-project-cli',
      template: 'hello from any-project-cli'
    })
    export class AnyProjectCliComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
    }

    @NgModule({
      imports: [],
      exports: [AnyProjectCliComponent],
      declarations: [AnyProjectCliComponent],
      providers: [],
    })
    export class AnyProjectCliModule { }
    //#endregion

    //#region @backend
    async function start(port: number) {
      console.log('hello world from backend');
    }

    export default start;

//#endregion

//#endregion