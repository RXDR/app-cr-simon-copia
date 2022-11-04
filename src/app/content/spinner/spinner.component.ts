import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  template:`<div class="flex" *ngIf="isLoading | async">
  
  <div class="loadingio-spinner-spinner-1cj1etgyskfj"><div class="ldio-tvgmk8gz1es">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div>
 
</div>`,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
isLoading = this.spinnerService.isLoading$;
  constructor(private spinnerService:SpinnerService) { }

  ngOnInit() {
  }

}
