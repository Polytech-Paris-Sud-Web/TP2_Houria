import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { NgForm } from '@angular/forms';
import { Article } from '../models/article';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  newArticle: Article = {
    id: null,
    title: '',
    content: '',
    authors: ''
  };


  constructor(private articleService: ArticleService, private router: Router) { }

  onSubmitNewArticle(creationForm: NgForm) {
    if (creationForm.valid) {
      this.articleService.post(this.newArticle).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/articles']);
        }, (err) => {
          console.log(err);
        }
      );
    }
  }

  ngOnInit() {
  }

}
