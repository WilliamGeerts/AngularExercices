import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keepNumber'
})
export class KeepNumberPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/[^\d]/g, '');
  }

}
