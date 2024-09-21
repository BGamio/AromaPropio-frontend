import { Component, OnInit } from '@angular/core';
import { PerfumeService } from '../../services/perfume.service';
import { OlfactoryFamilyService } from '../../services/olfactory-family.service';

@Component({
  selector: 'app-perfume-form',
  templateUrl: './perfume-form.component.html'
})
export class PerfumeFormComponent implements OnInit {
  perfume = {
    name: '',
    description: '',
    price: 0,
    olfactoryFamilyId: null
  };
  olfactoryFamilies: any[] = [];

  constructor(
    private perfumeService: PerfumeService,
    private olfactoryFamilyService: OlfactoryFamilyService
  ) {}

  ngOnInit(): void {
    this.olfactoryFamilyService.getOlfactoryFamilies().subscribe(data => {
      this.olfactoryFamilies = data;
    });
  }

  onSubmit(): void {
    this.perfumeService.createPerfume(this.perfume).subscribe(response => {
      console.log('Perfume creado:', response);
    });
  }
}
