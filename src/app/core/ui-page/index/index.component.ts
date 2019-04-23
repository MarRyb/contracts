import { Component, OnInit } from '@angular/core';
import { DataContractsService } from 'src/app/core/api/data-contracts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  public dataContr: any; 
  public metaData: any;
  public rows: any;

  constructor(public dataContractsService: DataContractsService) { 
    dataContractsService.getList().subscribe(data => {
      this.dataContr = data;

      this.metaData = this.dataContr.data.metaData
      this.rows = this.dataContr.data.rows
      console.log(this.metaData)
      console.log(this.rows)
      debugger

      return this.dataContr;
    })
  }

  ngOnInit() {
  }

}
