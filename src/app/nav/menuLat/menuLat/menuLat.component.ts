import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InicioProgramaService } from 'src/app/core/services/inicio-programa/inicio-programa.service';

@Component({
  selector: 'app-menuLat',
  templateUrl: './menuLat.component.html',
  styleUrls: ['./menuLat.component.scss']
})
export class MenuLatComponent implements OnInit {
  @Output("selected") emiterSelect = new EventEmitter<number>();

  constructor(public service:InicioProgramaService){

  }
  onButtonGroupClick($event) {
    let clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === "BUTTON") {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".page-link-visited");
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove("page-link-visited");
      }

      clickedElement.className += " page-link-visited";
    }

  }
  mostrar = false;


  ngOnInit() {
  }

  selectItem(i): void {
    this.service.selectedItem = i;
    this.emiterSelect.emit(i);
  }

}
