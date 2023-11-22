import {
  Component,
  ElementRef,
  Host,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search = false;
  isClosed = true;
  flag = false;
  render2 = inject(Renderer2);
  constructor(private route: Router, private dataService: DataService) {}

  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('search') searchElement!: ElementRef;
  @HostListener('document:scroll') onDocumentScroll = () => {
    // console.log(document.body.scrollTop, document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 0) {
      this.render2.setStyle(
        this.navbar.nativeElement,
        'background-color',
        '#000000'
      );
    } else {
      this.render2.setStyle(
        this.navbar.nativeElement,
        'background-color',
        'transparent'
      );
    }
  };
  onSearch() {
    console.log('click search');
    this.search = true;
    this.flag = true;
  }

  // @HostListener('document:click', ['$event.target']) onDocumentClick = (
  //   target: any
  // ) => {
  //   if (this.searchElement.nativeElement.contains(target)) {
  //     console.log('Nothing to do');
  //   } else {
  //     this.search = false;
  //   }
  // };

  onFocusOut() {
    console.log('focus out');
    this.search = false;
  }

  @HostListener('keyup') onFocusIn() {
    this.dataService.nameMovie.next(this.searchElement.nativeElement.value);
    // console.log(this.searchElement.nativeElement.value);
    this.route.navigateByUrl('/search');
  }
}
