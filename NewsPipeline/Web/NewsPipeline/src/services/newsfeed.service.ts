import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { INews } from "src/interface/INews";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const URL = "https://localhost:44318/api/newsfeed";
@Injectable({
  providedIn: "root"
})
export class NewsfeedService {
  constructor(private http: HttpClient) {}

  getAllNews() {
    return this.http.get(URL);
  }
  postNews(id, article) {
    return this.http.put(URL + "/" + `${id}`, article);
  }
}
