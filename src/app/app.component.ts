import { Component } from '@angular/core';
import { FCMNG } from 'fcm-ng';
import { Platform } from '@ionic/angular';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private fcm: FCMNG, private platform: Platform, private rootData: CommonService) {
    this.platform.ready().then(() => {
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          this.rootData.updateMessage(JSON.stringify(data));
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        };
      });
    });
  }
}
