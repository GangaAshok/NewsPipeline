import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { INews } from "../interface/INews";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  Date = new Date();
  currentDate =
    this.Date.getFullYear() +
    "-" +
    this.Date.getMonth() +
    "-" +
    this.Date.getDate();

  configUrl: string = `https://newsapi.org/v2/everything?q=bitcoin&from=${
    this.currentDate
  }&sortBy=publishedAt&apiKey=41de7c4bb7c74deba663356c488c0c73`;
  news: INews;
  constructor(private http: HttpClient) {}

  public getNewsReports() {
    return this.http.get<INews[]>(this.configUrl).toPromise();
  }
}
