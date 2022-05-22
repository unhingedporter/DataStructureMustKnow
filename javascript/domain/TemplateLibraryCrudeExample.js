var template = document.getElementById("template-list-item");
var templateHtml = template.innerHTML;

// Ajax Call
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == XMLHttpRequest.DONE) {
    // On success
    if (xhr.state == 200) {
      // Convert JSON string response to an Object
      var dataObject = JSON.parse(xhr.responseText);

      document.getElementById("list").innerHTML = listCreateHtml(dataObject);
    }
  }
}

xhr.open("GET", "/url/to/get-data/", true);
xhr.send();

// Function to generate and returns the HTML.
// Accepts an object as a parameter
function listCreateHtml(dataObject) {
  var listHtml = "";

  for (key in dataObject) {
    listHtml += templateHtml.replace(/{{id}}/g, dataObject[key]["id"])
                            .replace(/{{name}}/g, dataObject[key]["name"])
                            .replace(/{{city}}/g, dataObject[key]["city"])
                            .replace(/{{state}}/g, dataObject[key]["state"])
                            .replace(/{{url}}/g, dataObject[key]["url"]);
  }

  return listHtml;
}

/*

0: {
  "id": 5,
  "name": "Basecamp",
  "city": "Chicago",
  "state": "IL",
  "url": "https://basecamp.com/"
},
1: {
  "id": 17,
  "name": "Google",
  "city": "Mountain View",
  "state": "CA",
  "url": "http://google.com/"
}

<ul id="list">
  <!--Generated list items will go here-->
</ul>

<script id="template-list-item" type="text/template">
  <li>
    <a href="{{url}}">{{name}}</a>, {{city}}, {{state}}
  </li> */
  