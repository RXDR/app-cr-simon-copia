import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileServicesService {
private path ='file-server/files'
  private url=environment.url_api2+this.path

  constructor(private http: HttpClient) { }

setFiles(p:File):Observable<File>{
return this.http.post<File>(this.url,p)

}

}
