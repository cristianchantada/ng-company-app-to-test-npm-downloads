import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './summary-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SummaryPageComponent { }
