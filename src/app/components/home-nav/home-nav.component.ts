import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, OnInit} from '@angular/core';
import {VERSION} from '@angular/material';
import { NavItem } from 'src/app/model/nav-item';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'] 
})
export class HomeNavComponent implements  OnInit {
  

  constructor(private navService: NavService) {
  }
  ngOnInit() {
  }
  appitems = [
    {
        label: 'Dashboard',
        //imageIcon: '/assets/batman.jpg',
        faIcon: 'fab fa-500px',
        link: '/dashbaord',
        externalRedirect: false
    },
    {
        label: 'Master Setup',
        faIcon: 'build',
        items: [
            {
                label: 'Product Setup',
                link: '/item-1-1',
                faIcon: 'fab fa-accusoft'
            },
            {
                label: 'Attribute Setup',
                faIcon: 'fab fa-accessible-icon',
                disabled: false,
                items: [
                    {
                        label: 'Brand Setup',
                        link: '/brand',
                        faIcon: 'fa-allergies' // Font awesome default prefix is fas
                    },
                    {
                        label: 'Size setup',
                        faIcon: 'fas fa-ambulance',
                        items: [
                            {
                                label: 'Item 1.2.2.1',
                                faIcon: 'fas fa-anchor',  // Still you can specify if you want to
                                onSelected: function() {
                                    console.log('Item 1.2.2.1');
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
     
];
config = {
  paddingAtStart: true,
  interfaceWithRoute: true,
 classname: 'selected-amml-item',
//  listBackgroundColor: `rgb(208, 241, 239)`,
  fontColor: `rgb(8, 54, 71)`,
  //backgroundColor: `rgb(74, 20, 140)`,
  selectedListFontColor: `blue`,
  highlightOnSelect: true,
  collapseOnSelect: true,
  rtlLayout: false
};
}
