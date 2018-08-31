import {Component, Input, OnInit} from '@angular/core';
import {AuthToken} from '../../models/AuthToken';
import {S3AuthService} from '../../services/s3-auth.service';
import * as S3 from 'aws-sdk/clients/s3';
// import * from '../../aws-sdk/clients/s3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() accessKey: string;
  @Input() secretKey: string;

  authToken: AuthToken = new AuthToken();

  constructor(private s3AuthService: S3AuthService) {
  }

  ngOnInit() {
  }

  save() {
    console.log('save()');
    // s3AuthService.
    const client = new S3();
    const config = client.config;
    config.secretAccessKey = this.authToken.secretKey;
    config.accessKeyId = this.authToken.accessKey;
    client.config = config;
    //
    //
    // client.listObjects(function (err, data) {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(data);
    // });
  }
}
