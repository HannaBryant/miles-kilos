function convert(){
    let kilometers= document.getElementById("kilometers").value;
      let miles= kilometers / 1.60934;
      document.getElementById("result").innerText= "Miles:" + miles;
}
