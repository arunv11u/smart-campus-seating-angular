import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-get-all-places',
	templateUrl: './get-all-places.component.html',
	styleUrls: ['./get-all-places.component.css']
})
export class GetAllPlacesComponent implements OnInit {
	places: any[] = [];

	constructor(
		private apiService: ApiService,
		private router: Router
	) { }

	ngOnInit() {
		this.getAllPlaces();
	}

	getAllPlaces() {
		this.apiService.getAllPlaces().subscribe(
			response => {
				this.places = response.data;
			},
			error => {
				console.error('Error fetching places:', error);
			}
		);
	}

	bookSlot(placeId: string) {
		const studentId = '88657484'; // You'll need to get the actual student ID
		this.apiService.bookSlot({ studentId, placeId }).subscribe(
			response => {
				console.log('Slot booked successfully:', response);
				// After booking, update the list of places
				this.getAllPlaces();
			},
			error => {
				console.error('Error booking slot:', error);
			}
		);
	}

	goToAddPlace() {
		this.router.navigate(['/add-place']);  // Navigate to the Add Place component
	}
}