
document.addEventListener('DOMContentLoaded', function () {
                          
                          var myS1 = document.getElementById('MYSESSION 1');
                          var myS2 = document.getElementById('MYSESSION 2');
                          var myS3 = document.getElementById('MYSESSION 3');
                          var myS4 = document.getElementById('MYSESSION 4');
                          var myS5 = document.getElementById('MYSESSION 5');
                          
                          var dialogVar = "Empty";
                          var dialogVarElem = document.createElement('div');
                          dialogVarElem.appendChild(document.createTextNode(dialogVar));                                                              
                          
                          function sessionChooser(myS, newChoice){
                          var newChoiceRegexp = new RegExp(newChoice, "gi");
                          
                          while( dialogVarElem.lastChild )
                                dialogVarElem.removeChild(dialogVarElem.lastChild);
                          
                          dialogVarElem.appendChild(document.createTextNode(dialogVar));
                          
                          var dialogContent = document.getElementById('dialogContent');
                          
                          while( dialogContent.lastChild )
                          dialogContent.removeChild( dialogContent.lastChild );                          
                          
                          if(myS.innerHTML.match(/NA/gi)){
                          dialogContent.appendChild(document.createTextNode("Do you want to add " + newChoice + "to your agenda?"));                
                          
                          var twoButtons = document.getElementById('twoButtons');
                          twoButtons.setAttribute('style','display:');
                          
                          var oneButton = document.getElementById('oneButton');
                          oneButton.setAttribute('style','display:none');
                          
                          }else if(myS.innerHTML.match(newChoiceRegexp)){
                          
                            dialogContent.appendChild(document.createTextNode("You have already chosen " + newChoice + "."));                
                          
                          var twoButtons = document.getElementById('twoButtons');
                          twoButtons.setAttribute('style','display: none');
                          
                          var oneButton = document.getElementById('oneButton');
                          oneButton.setAttribute('style','display:');
                          
                          }else{
                        
                          dialogContent.appendChild(document.createTextNode("Do you want to replace " + myS.innerText + " with " + newChoice + "?"));                
                          
                          var twoButtons = document.getElementById('twoButtons');
                          twoButtons.setAttribute('style','display:');

                          var oneButton = document.getElementById('oneButton');
                          oneButton.setAttribute('style','display:none');
                          
                          }
                          
                          }
                          
                          document.getElementById('SESSION 1-A').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 1 for Android";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-iOS').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 1 for iOS";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-WP').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 1 for Windows Phone";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-CP').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 1 for Cross Platform";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-A').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 2 for Android";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-iOS').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 2 for iOS";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-WP').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 2 for Windows Phone";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-CP').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 2 for Cross Platform";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-A').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 3 for Android";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-iOS').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 3 for iOS";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-WP').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 3 for Windows Phone";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-CP').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 3 for Cross Platform";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-A').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 4 for Android";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-iOS').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 4 for iOS";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-WP').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 4 for Windows Phone";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-CP').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 4 for Cross Platform";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 5-A').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 5 for Android";
                                           sessionChooser(myS5, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 5-iOS').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 5 for iOS";
                                           sessionChooser(myS5, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 5-WP').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 5 for Windows Phone";
                                           sessionChooser(myS5, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 5-CP').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 5 for Cross Platform";
                                           sessionChooser(myS5, dialogVar);
                                           return false;
                                           }, false);
                          
                          
                          var l = window.localStorage.length;
                          var i = 0;
                          var storedListName;
                          function addNewListItem(newItem) {

                          if(newItem.match(/1/gi)){
                          myS1.innerHTML = newItem;
                          }else if(newItem.match(/2/gi)){
                          myS2.innerHTML = newItem;
                          }else if(newItem.match(/3/gi)){
                          myS3.innerHTML = newItem;
                          }else if(newItem.match(/4/gi)){
                          myS4.innerHTML = newItem;
                          }else if(newItem.match(/5/gi)){
                          myS5.innerHTML = newItem;
                          }
                          
                          }
                          
                          for (i; i < l; i++) {
                          storedListName = window.localStorage.key(i);
                          if (storedListName.match(/^item[.]/))
                          addNewListItem(window.localStorage.getItem(storedListName));
                          }
                          
                          document.getElementById('yesButton').
                          addEventListener('click', function (evt) {
                                           var newListValue = dialogVarElem.innerHTML;
                                           
                                           var itemKey = "item." + (window.localStorage.length + 1);
                                           
                                           addNewListItem(newListValue);
                                           window.localStorage.setItem(itemKey, newListValue);
                                           
                                           return false;
                                           }, false);
                          
                          });