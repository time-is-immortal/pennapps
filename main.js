$(document).ready(function(){
  var authURL = "https://auth.claustrophobia78.hasura-app.io/user/logout";
  var dataURL = "https://auth.claustrophobia78.hasura-app.io/user/logout";
var token;
var userID;
//register click

$(Register).click(function(){
  //ajax request for auth url
    $.ajax({
      url: authUrl+"signup",
      method: "post",
      header: {'Content-Type':"application/json"},
      data: JSON.stringify({
        "username":$("#email").val(),
        "password": $("#pwd").val()
        })
    }).done(function(){
      //user login
      alert("user logged in");


    }).fail(function(document){
       console.error(data);
       alert("fail:"+JSON.parse(data.responseText).message)
    })

//onclick login
$(login).click(function(){
  $.ajax({
    urk: authUrl + "login",
    method: "post",
    headers: {"Content-Type": "application/json"},
    data: JSON.stringify({
      "username":$("#email").val(),
      "password": $("#pwd").val()
    })
  }).done(function(data){
    token = data.auth_token;
    userID = data.hasura_id;
  })

  window.location = "/app";

  //set cookie?
  var d = new Date();
  d.setTime(d.getTime()* (24*60*70*10000));
  var expires = "expires =" + d.toUTCString();

  document.cookie = "cookie_name" + "=" + token + ";"+ expies + ";path~/";


});




})


});
