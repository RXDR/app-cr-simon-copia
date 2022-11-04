import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioProgramaService } from 'src/app/core/services/inicio-programa/inicio-programa.service';

@Component({
  selector: 'app-inicioProgramas',
  templateUrl: './inicioProgramas.component.html',
  styleUrls: ['./inicioProgramas.component.scss']
})
export class InicioProgramasComponent implements OnInit {


  constructor(private router:Router,public service:InicioProgramaService) { }
  
  ngOnInit() {
  
  }
  remove(){
    localStorage.removeItem("id")
    localStorage.removeItem("idP")
    this.router.navigate(['crearprograma'])
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
