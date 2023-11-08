import { NativeDateAdapter } from '@angular/material/core';

export class CustomDateAdapter extends NativeDateAdapter {
  override format(date: Date): string {
    if (date) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${this._pad(month)}/${this._pad(day)}/${year}`;
    }
    return '';
  }

  private _pad(n: number): string {
    return (n < 10 ? '0' : '') + n;
  }
}