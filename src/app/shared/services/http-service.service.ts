import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getData({ apiUrl }): Observable<any> {
    return this.http.get<any>(`${apiUrl}`);
  }

  postData(payload): Observable<any> {
    const { apiUrl, body } = payload;
    return this.http.post<any>(`${apiUrl}`, body);
  }

  postForFile(payload): Observable<any> {
    // returns a file from the server
    const { apiUrl, body } = payload;
    return this.http.post<any>(`${apiUrl}`, body, {
      responseType: 'blob' as 'json',
      observe: 'response'
    });
  }

  patchRequest(payload): Observable<any> {
    const { apiUrl, body } = payload;
    return this.http.patch(`${apiUrl}`, body);
  }

  putData(payload): Observable<any> {
    const { apiUrl, body } = payload;
    return this.http.put<any>(`${apiUrl}`, body);
  }

  deleteRequest(payload): Observable<any> {
    const { apiUrl } = payload;
    return this.http.delete<any>(`${apiUrl}`);
  }
  deleteRequestWithBody(payload): Observable<any> {
    const { apiUrl, body } = payload;
    return this.http.request('delete', apiUrl, { body });
  }
}
