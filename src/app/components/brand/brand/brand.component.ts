import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/model/brand';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  ngOnInit() {
  }
  displayedColumns = ['id', 'name', 'createdBy','details'];// 'update', 'delete'
  dataSource: MatTableDataSource<Brand>;

  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:false}) sort: MatSort;

  constructor(private formBuilder: FormBuilder,private router: Router,public api: BrandService) {
 
    const users: Brand[] = []; 
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;   // Assign the data to the data source for the table to render
  }

  getBrands(){
    this.api.getBrands()
    .subscribe((res: any) => {     
      this.dataSource = new MatTableDataSource(res);  
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;     
    }, err => {
      console.log(err);     
    });
  }

}
 
 
