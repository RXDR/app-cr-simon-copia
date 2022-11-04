import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { SpinnerComponent } from 'src/app/content/spinner/spinner.component';
import { SpinnerService } from '../services/spinner/spinner.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  router: any;

constructor(private routes:Router, private spinnerService:SpinnerService) { }

 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerService.show() 
    const token: string | null =('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJydWJlbi5hcmF1am8iLCJhdXRob3JpdGllcyI6WyJST0xFX0NfQ1JFRCIsIlJPTEVfRF9DUkVEIiwiUk9MRV9SX0NSRUQiXSwiZW1haWwiOiJydWJlbi5hcmF1am9AdW5pc2ltb24uZWR1LmNvIiwic3R1ZGVudF9pZCI6MjE4Niwic3R1ZGVudF9jb2RlIjoxMDQ4Mjk0NDcxLCJuYW1lIjoiQVJBVUpPICBSVUJFTiAiLCJwbGFjZV9pZCI6MTAxLCJwbGFjZV9jb2RlIjoiQkFSIiwidXNlcl90eXBlIjoiRVNUVURJQU5URSIsImlhdCI6MTY2Njg4MzQwMiwiZXhwIjoxNjY5NDc1NDAyfQ.7L11pe8ZKfTI3wqqCzZnol2M0BZ5zKW083nkkvTxzN4');

    const type_token: string | null = ('Bearer');
   
    let request = req;
    // Verificación de token y cargado de authorization en HEADER
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `${type_token} ${ token }`
          
        }
      });
      
    }

    // Manejo de request y retorno de error 
    return next.handle(request).pipe(
      finalize(()=>this.spinnerService.hide()),
      catchError((err: HttpErrorResponse) => {
        
       if (err.status === 401) {
         console.log("error de conexión ")
         this.spinnerService.show()
        }
       
        return throwError( err );

      })
    );
  }
}
