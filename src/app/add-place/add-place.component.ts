import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent {
  place = {
    name: '',
    description: '',
    capacity: null
  };

  constructor(
	private apiService: ApiService,
	private router: Router
) { }

  onSubmit() {
    this.apiService.addPlace(this.place).subscribe(
      response => {
        console.log('Place added successfully:', response);
		this.router.navigate(["/get-all-places"]);
        // Optionally, you can navigate to another page after successful submission
        // Example: this.router.navigate(['/get-all-places']);
      },
      error => {
        console.error('Error adding place:', error);
      }
    );
  }
}