/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

     function citationData() {
          /*
           * Author field 
           */
           var firstName = document.getElementById("firstName").value;
           var middlename = document.getElementById("middleName").value;
           var lastName = document.getElementById("lastName").value;
           var articletitle = document.getElementById("articleTitle").value;
           var journalTitle = document.getElementById("journalTitle").value;
           var volume = document.getElementById("volume").value;
           var doi = document.getElementById("doi").value;
           var issue = document.getElementById("issue").value;
  
          // window.location= "citation.html";
           
     }
  function citation (){
     citationData();
  }
