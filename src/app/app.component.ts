import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{


  searchInput: any;
  data: any;
  title = 'TestFront';
  load = false;
  menu: any;

  public url = `https://api.unsplash.com/search/photos?client_id=${environment.client_id}`;​

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  receivedDataImage(event: any) {
    this.data = event
    this.load = true;
    console.log(event);
  }

  receivedDataMenu(event: any) {
    this.menu = event;
  }

  send() {
    this.http.get(this.url+'&query='+this.menu).subscribe(​
          (resp: any) => {
              this.data = resp['results'];
          }
      );
  }

  loadMore() {
    this.send;
  }

  search(value: any) {
    this.menu = value;
    this.send();
    window.scrollTo(0,document.body.scrollHeight);
  }

  

  

}
