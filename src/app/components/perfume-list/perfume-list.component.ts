import { Component, OnInit } from '@angular/core';
import { PerfumeService } from '../../services/perfume.service';

@Component({
  selector: 'app-perfume-list',
  templateUrl: './perfume-list.component.html'
})
export class PerfumeListComponent implements OnInit {
  perfumes: any[] = [];

  constructor(private perfumeService: PerfumeService) { }

  ngOnInit(): void {
    this.perfumeService.getPerfumes().subscribe(data => {
      this.perfumes = data;
    });
  }
}
