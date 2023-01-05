import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, AfterViewInit, OnDestroy{
  name = 'Wally'
  sum = 0

  @ViewChild('renato') div: any

  constructor() {}
  ngOnInit(): void {
    //this.sum = 5
    console.log('on init')
    console.log(this.div)
  }
  ngAfterViewInit(): void {
    console.log('after view init')
    console.log(this.div)
  }
  ngOnDestroy(): void {
    console.log('on destroy')
  }
  
  getName = (): string => {
    return 'Hello2'
  }

  addSum(x: number, y: number) {
    this.sum = x + y
  }

}
