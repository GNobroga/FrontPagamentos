import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringDelimiter',
})
export class StringDelimiterPipe implements PipeTransform {

  transform(value: string, limit: number): unknown {
    return value.substring(0, limit);
  }

}
