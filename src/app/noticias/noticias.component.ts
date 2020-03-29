import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
articles:any[]=[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listado();
  }
listado(){
  return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=us&apiKey=a218bb3ebc6c411da9c8d4aead14537d")
  . subscribe((data: any) => {
    this.articles=data.articles;
    console.log(this.articles);
  });
}

}
