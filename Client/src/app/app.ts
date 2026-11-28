import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit, signal, Signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App implements OnInit{
  private http = inject(HttpClient)
  protected readonly title = 'Dating App';
  protected members = signal<any>([]);
  
  async ngOnInit() {
    this.members.set(await this.getMembers());
  }

async getMembers() {
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/weatherForecast'));
    } catch (error) {
      throw error
    }
  }

}
