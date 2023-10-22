import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlaceComponent } from './add-place/add-place.component';
import { GetAllPlacesComponent } from './get-all-places/get-all-places.component';
import { BookSlotComponent } from './book-slot/book-slot.component';

const routes: Routes = [
	{ path: 'add-place', component: AddPlaceComponent },
	{ path: 'get-all-places', component: GetAllPlacesComponent },
	{ path: 'book-slot', component: BookSlotComponent },
	{ path: '', redirectTo: '/get-all-places', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
