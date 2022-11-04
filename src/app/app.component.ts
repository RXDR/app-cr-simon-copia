import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Message,MessageService} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'app-cr-programas-usb';
  private path: string = "../../assets/images";
 
  constructor(private observer: BreakpointObserver, private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {
    this.matIconRegistry
      .addSvgIcon("programas", this.setPath(`${this.path}/icon-progamas.svg`))
      .addSvgIcon("add", this.setPath(`${this.path}/file-plus.svg`));
  }

  private setPath(url: string): SafeResourceUrl { 
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url); 
   }

  
}
