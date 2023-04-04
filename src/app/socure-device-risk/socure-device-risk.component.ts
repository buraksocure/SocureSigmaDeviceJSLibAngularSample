import { Component, OnInit, ElementRef } from '@angular/core';
declare var devicer: any;

@Component({
  selector: 'app-socure-device-risk',
  templateUrl: './socure-device-risk.component.html',
  styleUrls: ['./socure-device-risk.component.css']
})
export class SocureDeviceRiskComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const deviceFPOptions = {
      publicKey: 'SDK_KEY',
      userConsent: true,
      context: 'signup'
    };

    devicer.run(deviceFPOptions, (response: any) => { // Add explicit type here
      console.log(response);
      Object.entries(response).forEach(([key, value]) => {
        if (key === "result") {
          this.elementRef.nativeElement.querySelector('#FingerPrintResult').textContent = value;
        }
        if (key === "sessionId") {
          this.elementRef.nativeElement.querySelector('#SessionId').textContent = value;
        }
      });
    });
  }
}
