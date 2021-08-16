import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent{

  data: any;
  @Output() dataEvent:EventEmitter<any> = new EventEmitter<any>(); 
  @Output() menuEvent:EventEmitter<any> = new EventEmitter<any>(); 
  public menuItem: string = 'all';

  public url = `https://api.unsplash.com/search/photos?client_id=${environment.client_id}`;​


 constructor(private http: HttpClient) {}
  
  menuPhotos(value: string) {
    this.menuItem = value;
    this.searchImage();
  }

  searchImage(){
      this.http.get(this.url+'&query='+this.menuItem).subscribe(​
          (resp: any) => {
              this.data = resp['results'];
              this.dataEvent.emit(this.data);
              this.menuEvent.emit(this.menuItem);
          }
      );
  }

  ngOnInit() {
    this.searchImage();
  }

}
