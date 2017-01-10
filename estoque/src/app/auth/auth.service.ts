import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { User } from './../users/user';
 
@Injectable()
export class AuthService {
    private host = 'http://localhost:8000/auth/';
    private urlLogin = this.host + 'login';
    private urlLogout = this.host + 'logout';
    public token: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
 
    constructor(
        private http: Http,
        private router: Router) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    login(user: User): Observable<boolean> {
        let body = JSON.stringify({ username: user.username, password: user.password });
        return this.http.post(this.urlLogin, body, this.options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: token }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate falied login
                    return false;
                }
            })
            .catch(this.handleError);
    }
 
    logout(): Observable<boolean> {
        let body = JSON.stringify({});        
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.urlLogout, body, options)
            .map((response: Response) => {
                 if(response.json()){
                    // clear token remove user from local storage to log user out
                     this.token = null;
                     localStorage.removeItem('currentUser');
                     return true;
                 }else {
                     return false;
                 }
                
            })
            .catch(this.handleError);
    }

    isAuthenticated() {
        if (localStorage.getItem('currentUser')) {
            return true;
        } else {
            return false;
        }
    }
}

