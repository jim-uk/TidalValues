import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup;
  strSearch: string;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.searchForm=new FormGroup ({
      'search':new FormControl (null)
    });

  }


  search(){

    var searchValue=encodeURIComponent (this.searchForm.get('search').value);
    console.log("Search Clicked: " + searchValue);



    this.router.navigate(["/search/" + searchValue]);
  }
}
