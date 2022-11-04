import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { InicioProgramaService } from 'src/app/core/services/inicio-programa/inicio-programa.service';

interface Derechos{
  propietario:string; 
  anio:number;
}

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(private router:Router,public service:InicioProgramaService) { }

  @Output() onToogleBar :EventEmitter<boolean> = new EventEmitter();

  private _openSideBar:boolean = false; 
  public viewUserOption:boolean = false; 

  public propietario:Derechos = {
    propietario:'Unisimon',
    anio: (new Date().getFullYear()) 
  }

  ngOnInit(): void {
  }

  openSideBar(){

    this._openSideBar = !this._openSideBar; 

    this.onToogleBar.emit(this._openSideBar);

  }

  showUserOption(event:any){

    const cssClass:string = event.target.classList[0];

    if( cssClass === 'box-user' ) return;
    if( !cssClass ) return;


    if( cssClass === 'user-options' ){
      this.viewUserOption =!this.viewUserOption;
      return; 
    } 

    if( cssClass === 'mat-icon' ){
      this.viewUserOption =!this.viewUserOption;
      return; 
    } 

    if( cssClass === 'usuario' ){
      this.viewUserOption =!this.viewUserOption;
      return; 
    } 

    
    // console.log( event.target.classList[0]); 

    return; 
   
  }

  remove(){
    localStorage.removeItem("id")
    localStorage.removeItem("idP")
    this.router.navigate
    this.router.navigate(["/menu"]);
  }

  selectedScreen(i){
    this.service.selectedItem=i;
    if(i==1){
      this.router.navigate(["/menu"]);
    }
    if(i==2){
      this.router.navigate(["/menu/cronograma"]);
    }
  }

}
