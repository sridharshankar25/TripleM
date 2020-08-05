import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traditional',
  templateUrl: './traditional.component.html',
  styleUrls: ['./traditional.component.css']
})
export class TraditionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

myFunction() {
  var x = document.getElementById("navDemo");
 if (x.className.indexOf("w3-show") == -1) {
   x.className += " w3-show";
 } else {
   x.className = x.className.replace(" w3-show", "");
 }
}

myFunction2() {
var x = document.getElementById("Demo");
if (x.className.indexOf("w3-show") == -1) {
  x.className += " w3-show";
} else {
  x.className = x.className.replace(" w3-show", "");
}
}

w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}

 w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}


myAccFun() {
  var x = document.getElementById("demoAc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

}
