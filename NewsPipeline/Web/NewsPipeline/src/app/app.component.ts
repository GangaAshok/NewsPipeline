import { Component } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";
import { NewsService } from "../services/news.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "pipeline-app";
  // constructor(private svc: NewsService, private http: HttpClient) {}
  ngOnInit() {
    // this.http.get("https://dev132-toi-times-of-india-v1.p.rapidapi.com/news/topnews")
  }
}
