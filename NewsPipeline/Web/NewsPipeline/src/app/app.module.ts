import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewsfeedComponent } from "../components/newsfeed/newsfeed.component";
import { HomeComponent } from "../components/home/home.component";
import { SpacesComponent } from "../components/spaces/spaces.component";
import { NotificationsComponent } from "../components/notifications/notifications.component";
import { HeaderComponent } from "../components/header/header.component";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { HttpClient } from "selenium-webdriver/http";

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    HomeComponent,
    SpacesComponent,
    NotificationsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, "fcc-book-trading"),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
