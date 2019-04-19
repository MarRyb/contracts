import { Component, OnInit } from '@angular/core';
import { DataContractsService } from 'src/app/core/api/data-contracts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  public dataContr: any; 
  constructor(public dataContractsService: DataContractsService) { 
    dataContractsService.getList().subscribe(data => {
      this.dataContr = data;
      console.log(this.dataContr);
      debugger
      return this.dataContr;
    })
  }

  ngOnInit() {
  }

}
