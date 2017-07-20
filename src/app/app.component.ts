import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // constructor(private apiService: ApiService) {}
    title = 'app';
    // public api_data: any = {};
    // ngOnInit(): void {
    //   this.loadItems();
    // }
    // loadItems() {
    //   this.apiService.getItems().subscribe(data => {
    //     this.api_data = data;
    //   });
    // }
}
