import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TableCompComponent } from './components/table-comp/table-comp.component';
import { LoginCompComponent } from './components/login-comp/login-comp.component';
import { MainComponent } from "./components/main/main.component";


// import { HomeComponent } from './home/home.component'
// import { AboutComponent} from './about/about.component'

const routes: Routes = [
    //{ path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] },
    { path: '', component: MainComponent},
    { path: 'table', component: TableCompComponent},
    { path: 'login', component: LoginCompComponent}
    // { path: '**', redirectTo: 'login' } // редирект на /login, если маршрут не найден

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
