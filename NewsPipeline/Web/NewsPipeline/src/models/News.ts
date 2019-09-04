import { INews } from "src/interface/INews";

export class News implements INews {
  NewsID: Number;
  Content: string;
  Title: string;
  Description: string;
  Author: string;
}
