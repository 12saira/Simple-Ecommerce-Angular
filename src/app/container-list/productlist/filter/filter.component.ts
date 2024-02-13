import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
@Input()
all:number=0;
@Input()
inStock:number=0;
@Input()
outofStock:number=0;
@Output()
selectedFilterRadioButtonChanged: EventEmitter<string>= new EventEmitter<string>();

selectedFilterRadioButton: string='all';

onSelectedFilterRadioButtonChanged(){
  // console.log('Selectedfilterradiobuttonchanged');
  this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
}
}
