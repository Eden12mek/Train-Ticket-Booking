import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {BookingsComponent} from "./pages/bookings/bookings.component";
import {SearchComponent} from "./pages/search/search.component";
import {AdminComponent} from "./pages/admin/admin.component";

// Import your components for routing


export const routes: Routes = [

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent },
  {
    path:'admin',
    component:AdminComponent
  }
];
