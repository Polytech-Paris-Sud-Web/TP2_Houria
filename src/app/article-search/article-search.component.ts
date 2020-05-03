import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Article } from "../models/article";
import { ArticleService } from "../services/article.service";

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  private resultSearch: Observable<Article[]>;
  private text: string;

  results(): Observable<Article[]> {
    return this.resultSearch;
  }

  onKey(event: any) {
    this.text = event.target.value;
  }

  
  search(): void {
    console.log(this.text);
    this.resultSearch = this.articleService.search(this.text);
  }

  ngOnInit(): void {
  }

}




