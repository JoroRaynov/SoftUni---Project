import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent,
        
    },
    {
        path: 'auth/register',
        component: RegisterComponent
    },
    {
        path: 'auth/logout',
        canActivate: [AuthActivate],
        component: LogoutComponent
    },
    {
        path: 'auth/profile',
        canActivate: [AuthActivate],
        component: ProfileComponent
    }
]


export const AuthRoutingModule = RouterModule.forChild(routes)