import { Component, OnInit } from '@angular/core';
import { DataContractsService } from 'src/app/core/api/data-contracts.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  public dataContr: any; 
  public newObject: any;
  public newContract: any = {};
 
  constructor(public dataContractsService: DataContractsService) { 
    dataContractsService.getList().subscribe(data => {
      this.dataContr = data;
      var metaData = this.dataContr.data.metaData
      var rows = this.dataContr.data.rows
      this.newObject = rows.map(function(num) {
        var result = {};
        metaData.forEach((key, i) => result[key.name] = num[i]);
        return result;
      });
      return this.newObject;
    })

  }

  delItem(item, index) {
    this.newObject.splice(index, 1);
    return this.newObject;
  }

  addItemCopy(item, index) {
    this.newObject.push(item);
    return this.newObject;
  }


  addItem() {
    this.newObject.push(Object.assign({}, this.newContract));
    return this.newObject;
  }

  ngOnInit() {
  }

}
