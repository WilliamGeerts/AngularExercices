import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keepNumberOrString'
})
export class KeepNumberOrStringPipe implements PipeTransform {

  transform(value: string, keepNumber: boolean = true): string {
    if(keepNumber)
      return value.replace(/[^0-9]/g, '');
    else
      return value.replace(/[0-9]/g, '');
  }

}
