import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private apiUrl = 'http://10.144.120.182:5000/api';
	private httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(private http: HttpClient) { }

	addPlace(placeData: any) {
		const url = `${this.apiUrl}/place`;
		return this.http.post<any>(url, placeData, this.httpOptions);
	}

	getAllPlaces() {
		const url = `${this.apiUrl}/place`;
		return this.http.get<any>(url, this.httpOptions);
	}

	bookSlot(bookingData: any) {
		const url = `${this.apiUrl}/place/book-slot`;
		return this.http.post<any>(url, bookingData, this.httpOptions);
	}
}
