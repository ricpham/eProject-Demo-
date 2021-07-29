// Start: Modal > Member
$(document).ready(function () {
  $("#member").click(function () {
    $("#memberModal").modal();
  });
});
// End: Modal > Member

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.height = "70px";
    document.getElementById("header").style.padding = "1px";
    document.getElementById("header").style.background = "white";


  } else {
    document.getElementById("header").style.height = "110px";
    document.getElementById("header").style.padding = "30px";
    document.getElementById("header").style.background = "#ffe5d8";


  }
}


// json code
$(document).ready(function()
    {
        var data = [];
        $.getJSON("data-catagory.json", function(items)
        {
            data = items;

            showImage(data);
        });

        //FILTER BY BRANDS

        $("input[type=checkbox]").click(function()
        {
          let check = $("#check-brands:checked").map(function()
          {
            return $(this).val()
          }).toArray().toString();

          let subdata = (check.length==0)?data: data.filter(item => check.search(item.pdbrand) >= 0);
                
          showImage(subdata); 
        });
    });

function showImage(items)
{
  let s =``;
  
  $.each(items, function(e,json)
  {
    s += `<div class="element_gifts" data-id="${json.pdid}" data-item="${json.pdcatogery}">
          <img src="${json.pdimage}" alt="">
          <p>
            name: ${json.pdname} <br>
            price: ${json.pdprice}
          </p>
    </div>`;
  });
  $("#products").html(s);

  element_gifts = document.querySelectorAll(".element_gifts");

}
// END JSON CODE





//START CODE FILTER CATEGORIES

// const filter_button = document.querySelectorAll("#filter_button .btn");
// const element_gifts = document.querySelectorAll(".element_gifts");

// //filter theo click chuột vào id#filter_button

// filter_button.forEach(function(e)
// {
//     e.addEventListener("click",function(e1)
//     {
//         /* đổi màu đỏ dùng k khi click class red
//         for(let i=0 ;i<filter_button.length;i++)
//         {
//             filter_button[i].classList.remove("red");
//         }
//         //chuyển màu khi click
//         this.classList.add("red");
//         */

//         //sau khi click sẽ lấy data filter
//         let button_filter = e1.target.dataset.filter;

//         element_gifts.forEach(function(e2)
//         {
//             let element_filter = e2.dataset.item;
//             if(button_filter === element_filter || button_filter === "all" ) 
//             {
//                 e2.style.display = "block";
//             }
//             else
//             {
//                 e2.style.display = "none";
//             }
//         });
//     });
   
// });
var element_gifts = document.querySelectorAll(".element_gifts");
const filter_button = document.querySelectorAll("#filter_button .filter");
//console.log(filter_button2);


//filter theo click chuột vào id#filter_button

filter_button.forEach(function(e)
{
    e.addEventListener("click",function(e1)
    {
        //element_gifts = document.querySelectorAll(".element_gifts");

        /* đổi màu đỏ dùng k khi click class red
        for(let i=0 ;i<filter_button.length;i++)
        {
            filter_button[i].classList.remove("red");
        }
        //chuyển màu khi click
        this.classList.add("red");
        */

        //sau khi click sẽ lấy data filter
        let button_filter = e1.target.dataset.filter;
        //console.log(button_filter);
        element_gifts.forEach(function(e2)
        {
            let element_filter = e2.dataset.item;
            

            if(button_filter === element_filter || button_filter === "all" ) 
            {
                e2.style.display = "block";
            }
            else
            {
                e2.style.display = "none";
            }
        });
    });
   
});