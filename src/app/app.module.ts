import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Componentes que hayas creado
import { AppComponent } from './app.component';
import { PerfumeListComponent } from './components/perfume-list/perfume-list.component';
import { PerfumeFormComponent } from './components/perfume-form/perfume-form.component';

// Servicios que hayas creado
import { PerfumeService } from './services/perfume.service';
import { OlfactoryFamilyService } from './services/olfactory-family.service';

@NgModule({
  declarations: [
    AppComponent,
    PerfumeListComponent,
    PerfumeFormComponent,
    // Agrega más componentes aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'perfumes', component: PerfumeListComponent},
      {path: 'add-perfume', component: PerfumeFormComponent},
      {path: '', redirectTo: '/perfumes', pathMatch: 'full'}
    ])
  ],
  providers: [
    PerfumeService,
    OlfactoryFamilyService,
    // Agrega más servicios si es necesario
  ],
  exports: [
    PerfumeListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
