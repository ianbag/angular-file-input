import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent implements OnInit {

  filesUpload: any = new Array;

  constructor() { }

  ngOnInit() {
  }

  uploadStorageClient(event) {
    const lengthArray = event.target.files.length;

    for (let index = 0; index < lengthArray; index++) {
      const fileActive = event.target.files[index];
      this.filesUpload.push(fileActive);
      this.transformFileBase64(fileActive);
    }

    console.log("array file upload -> ", this.filesUpload);
  }

  removeFileLocal(index) {
    this.filesUpload.splice(index, 1);
    console.log("file upload before remove ->", this.filesUpload);
  }

  transformFileBase64(file) {
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      file.data = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
