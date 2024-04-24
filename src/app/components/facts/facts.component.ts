import { Component } from '@angular/core';
import { CuteCatsService } from '../../shared/cute-cats.service';
import { FactsService } from '../../shared/facts.service';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [SkeletonModule],
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.css'
})
export class FactsComponent {
  cuteCats: any = [];
  catFacts: any = [];

  constructor(public cuteCatsService: CuteCatsService, public factsService: FactsService) {
    this.retrieveData();
  }

  retrieveData(): void {
    console.log("Connecting to Cats API");
    this.cuteCatsService.toReturn().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {console.log(err)}
    });
    console.log("Connecting to Facts API");
    this.factsService.toReturn().subscribe({
      next: this.successRequestFacts.bind(this),
      error: (err) => {console.log(err)}
    });
  }

  successRequest(data: any): void {
    console.log(data);
    this.cuteCats = data;
    console.log(this.cuteCats);
  }

  successRequestFacts(data: any): void {
    console.log(data);
    this.catFacts = data.data;
    console.log(this.catFacts);
  }
}
