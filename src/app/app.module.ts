import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { CreateBookComponent } from './create-book/create-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  },
  { path: 'list', component: ListBookComponent },
  { path: 'list/edit/:id', component: EditBookComponent },
  { path: 'create-book', component: CreateBookComponent },
  { path: 'list/delete-book/:id', component: DeleteBookComponent },
  { path: 'list/detail-book/:id', component: DetailBookComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, CreateBookComponent, ListBookComponent, EditBookComponent, DeleteBookComponent, DetailBookComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  entryComponents:[CreateBookComponent,EditBookComponent,DeleteBookComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
