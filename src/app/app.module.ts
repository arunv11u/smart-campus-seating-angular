import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { GetAllPlacesComponent } from './get-all-places/get-all-places.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	declarations: [
		AppComponent,
		AddPlaceComponent,
		GetAllPlacesComponent,
		BookSlotComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
