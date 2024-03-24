import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { UserComponent } from './Views/user/user.component';
import { SearchComponent } from './Views/search/search.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'user', component: UserComponent},
    {path:'search', component: SearchComponent},
    {path:'', redirectTo:'home',pathMatch:'full'}
];
