import { Routes } from "@angular/router"; 
import { HomeComponent } from "./home/home.component";
import { ClientFormComponent } from "./client-form/client-form.component";
import { MeetingFormComponent } from "./meeting-form/meeting-form.component";

const routeConfig: Routes = [
    {
    path: '',
    component: HomeComponent,
    data: {title:'Home Page'}

    },
    {
    path: 'client',
    component: ClientFormComponent,
    data: {title:'Client Page'}
    },
    {
    path: 'meeting',
    component: MeetingFormComponent,
    data: {title:'Meeting Page'}
    }

];

export default routeConfig;