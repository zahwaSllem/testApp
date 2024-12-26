import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-popelar-top',
  standalone: true,
  imports: [CarouselModule ],
  templateUrl: './popelar-top.component.html',
  styleUrl: './popelar-top.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


 
export class PopelarTopComponent {
 

  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;

  ngAfterViewInit() {
    const swiperElement = this.swiperRef.nativeElement;
    swiperElement.spaceBetween = 10; // المسافة بين الشرائح
    swiperElement.loop = true; // تفعيل التكرار
    swiperElement.style.width = '100%'; // العرض الكامل
    swiperElement.style.height = 'auto';

    swiperElement.breakpoints = {
      576: { slidesPerView: 1, spaceBetween: 10 }, 
      768: { slidesPerView: 2, spaceBetween: 10 },
     992: { slidesPerView: 3, spaceBetween: 10 },
      1024: { slidesPerView: 5, spaceBetween: 10 } //  سطح المكتب
    };
       
  }



  
}
