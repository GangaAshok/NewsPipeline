import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewsfeedComponent } from "../components/newsfeed/newsfeed.component";
import { HomeComponent } from "../components/home/home.component";
import { SpacesComponent } from "../components/spaces/spaces.component";
import { NotificationsComponent } from "../components/notifications/notifications.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: NewsfeedComponent
  },
  { path: "home", component: HomeComponent },
  { path: "News", component: NewsfeedComponent },
  { path: "spaces", component: SpacesComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "**", redirectTo: "/product1", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
