// function getFromServer() {
//   fetch("https://nusbackendstub.herokuapp.com/user/all", { method: "GET" })
//     .then((response) => response.text())
//     .then((data) => {
//       $(".mypanel").html(data);
//     })
//     .catch((error) => console.log(error));
// }

function getFromServer() {
    fetch("https://nusbackendstub.herokuapp.com/user/all", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        var text = `<table>
          <tr>
          <th> User ID </th>
          <th> Name </th>
          <th> Email </th>
          <th> Phone </th>
          </tr>
        `;
        data.forEach((item) => {
          text += `
          <tr>
            <td> ${item.user_id} </td>
            <td> ${item.first_name} ${item.last_name}</td>
            <td> ${item.email} </td>
            <td> ${item.phone} </td>
          </tr>
          `;
        });
        text += `</table>`;
        $(".mypanel").html(text);
      })
      .catch((error) => console.log(error));
  }
  
  function post() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var fname = document.getElementById('first_name').value;
    var lname = document.getElementById('last_name').value;
  
    var raw = JSON.stringify({
      first_name: fname,
      last_name: lname,
      email: "joe@bloggsville.com",
      phone: "+65 1234 5678",
      plan_id: 1,
      signup_date: "13-Aug-2021",
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("https://nusbackendstub.herokuapp.com/user/add", requestOptions)
      .then((response) => response.text())
      .then((result) => $(".mypanel").html(result))
      .catch((error) => console.log("error", error));
  }
  
  // function postData() {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  
  //   // Populate this data from e.g. form.
  //   var raw = JSON.stringify({
  //     type: 0,
  //     name: "dixant mittal",
  //     email: "dixant@email.com",
  //     tolerance: 0.5,
  //     wallet: 100000,
  //   });
  
  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //   };
  
  //   fetch("http://localhost:3000/customer/add", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => $(".mypanel").html(result))
  //     .catch((error) => console.log("error", error));
  // }
  