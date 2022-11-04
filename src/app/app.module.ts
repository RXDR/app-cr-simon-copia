import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './core/interceptor/interceptor.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { CrProgramasComponent } from './content/cr-programas/cr-Programas/cr-Programas.component';
import { MenuLatComponent } from './nav/menuLat/menuLat/menuLat.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CalendarModule } from 'primeng/calendar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { IncioCrProgramaComponent } from './content/incio-cr-programa/incio-cr-programa.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InicioProgramasComponent } from './content/InicioProgramas/inicioProgramas/inicioProgramas.component';
import { ModalidadTipoComponent } from './content/modalidadTipo/modalidadTipo/modalidadTipo.component';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ChipModule } from 'primeng/chip';
import { CronogramaDeActividadesComponent } from './content/cronograma-de-actividades/cronograma-de-actividades.component';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { MessagesModule } from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {RippleModule} from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmComponent } from './messages/confirm/confirm.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './content/modal/modal.component';
import { MessageComponent } from './messages/message/message.component';
import { ActividadesComponent } from './content/cronograma-de-actividades/actividades/actividades.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuBarComponent } from './nav/menuLat/menuLat/menu-bar/menu-bar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './content/spinner/spinner.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    
    AppComponent,
    CrProgramasComponent,
    MenuLatComponent,
    IncioCrProgramaComponent,
    InicioProgramasComponent,
    CronogramaDeActividadesComponent,
    ConfirmComponent,
    ModalComponent,
    MessageComponent,
    ActividadesComponent,
    MenuBarComponent,
    SpinnerComponent,
    PaginatePipe,
ModalidadTipoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule,
    HttpClientModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatChipsModule,
    CalendarModule,
    MatDialogModule,
    MatPaginatorModule,
    TableModule,
    InputTextModule,
    ToastModule,
    ProgressBarModule,
    TabMenuModule,
    CarouselModule,
    ButtonModule,
    AvatarGroupModule,
    AvatarModule,
    ReactiveFormsModule,
    ScrollPanelModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    InputNumberModule,
    ChipModule,
    ConfirmPopupModule,
    MessageModule,
    MessagesModule,
    RippleModule,
    ConfirmDialogModule,
    CascadeSelectModule,
    CommonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    PaginatorModule
    
  ], 
  providers: [
    ConfirmationService,
    
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  entryComponents : [ConfirmComponent,MessageComponent]
  
})
export class AppModule { }
