import { Clipboard } from '@angular/cdk/clipboard';
import { Component, Input } from '@angular/core';
import { faClipboard, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.sass']
})
export class CopyToClipboardComponent {
  faClipboard = faClipboard;
  faCheck = faCheck;

  @Input()
  public value: string;

  @Input()
  public buttonText: string;

  @Input()
  public buttonClickedText: string;

  public buttonActive = false;

  constructor(private clipboard: Clipboard) {
  }

  public copyToClipboard() {
    console.log('in method', this.buttonActive);
    this.buttonActive = true;
    this.clipboard.copy(this.value);
    // this.buttonActive = false;
    console.log('in method', this.buttonActive);
  }
}
