import { Component, OnInit } from "@angular/core";
import { NewsfeedService } from "../../services/newsfeed.service";
import { INews } from "src/interface/INews";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { element } from "protractor";

@Component({
  selector: "app-newsfeed",
  templateUrl: "./newsfeed.component.html",
  styleUrls: ["./newsfeed.component.sass"]
})
export class NewsfeedComponent implements OnInit {
  // articles: INews[] = [];
  flag: boolean = false;
  selectedTitle = null;
  // public books: AngularFireList<INews[]>;
  // public users: AngularFireList<INews[]>;
  liked: boolean = false;
  news: any;
  commented: boolean = false;
  comments = "";
  onKey(value: string) {
    this.comments += value + " | ";
  }
  constructor(
    private newsservice: NewsfeedService // private db: AngularFireDatabase
  ) {}

  ngOnInit() {
    // this.newsservices.getNewsReports().then(res => {
    //   this.articles = res["articles"];
    //   console.log("res.......   ", this.articles);
    //   this.articles.map(item => {
    //     item.like = false;
    //     item.comment = "";
    //   });
    //   this.db.list("/books").push(this.articles);
    //   this.getDataFirebase();
    // });

    this.newsservice.getAllNews().subscribe(
      news => {
        this.news = news;

        console.log("news.......", this.news);
      },

      error => {
        console.log(error);
      }
    );
  }
  isCommented(article) {
    let id = article.newsID;
    if ((this.selectedTitle = article.newsID)) {
      this.commented = !this.commented;
    }
    this.newsservice.postNews(id, this.comments).subscribe();
    // console.log("fwfwefwe", article.newsID, this.selectedTitle, this.commented);
  }
  isLiked(article) {
    let id = article.newsID;
    this.flag = !this.flag;
    this.selectedTitle = article.newsID;
    // this.liked = article.title === this.selectedTitle && this.flag;
    article.like = !article.like;
    this.newsservice.postNews(id, article).subscribe();
    // console.log("mmmmmm", this.liked);
  }
  // getDataFirebase = () => {
  //   // this.users = this.db.list("books");
  //   this.books = this.db.list("books");
  //   console.log("books = ", this.books);
  // };

  // firebaseDatabaseUpdation = (article, flag) => {
  //   console.log("books...1", this.books);
  //   var ref = this.books.update(article.like, flag);
  // };
}
