import { Routes, RouterModule } from "@angular/router";
import { MediaItemFormComponent } from "./media-item-form.component";
import { MediaItemListComponent } from "./media-item-list.component";

const appRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);