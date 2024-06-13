import { Routes } from '@angular/router';
import { AppComponent } from './roi-configuration/roi-configuration.component';


 export const routes: Routes = [
    { path: '', redirectTo: 'roi-configuration', pathMatch: 'full' },
    { path: 'roi-configuration', component: AppComponent},
    
    { path: '**', redirectTo: 'roi-configuration' }
  ];
  