// Start: Modal > Member
$(document).ready(function () {
  $("#member").click(function () {
    $("#memberModal").modal();
  });
});
// End: Modal > Member

$(".sub-menu ul").hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

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

        //Modal click imgae
        $(document).on("click",".element_gifts",function() 
        {
            
            let id = $(this).data("id");
            
            let product = data.filter(ele => ele.pdid == id);
           
            showModal(product[0]);
            $("#showModal").modal("show");
        });

        //FILTER BY BRANDS

        // $("input[type=checkbox]").click(function()
        // {
        //   let check = $("#check-brands:checked").map(function()
        //   {
        //     return $(this).val()
        //   }).toArray().toString();

        //   let subdata = (check.length==0)?data: data.filter(item => check.search(item.pdbrand) >= 0);
      
        //   showImage(subdata); 
        // });
    });

function showImage(items)
{
  let s =``;
  
  $.each(items, function(e,json)
  {
    s += `<div class="element_gifts" data-id="${json.pdid}" data-item="${json.pdcatogery}" data-brand="${json.pdbrand}">
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

//Modal
function showModal(json)
{
    let s = `
    <div class="row">
        <div class="col-md-8">
            <div><img src="${json.pdimage}" style="width: 100%;"  alt=""></div>
        </div>
        <div class="col-md-4">
            <h3><b>${json.pdname}</b></h3>
            <h4><b>Price:</b> ${json.pdprice}</h4>
            <h4><b>ID:</b> ${json.pdid}</h4>
            <h4><b>Catogery:</b> ${json.pdcatogery}</h4>
            <h4>Brands: ${json.pdbrand}</h4>
            <h4>Material: ${json.pdmaterial}</h4>
            <h4>Color: ${json.pdcolor}</h4>
            <h4>Size: ${json.pdsize}</h4>
            <h4>Weight: ${json.pdweight}</h4>
            <h4>Package: ${json.pdpackage}</h4>
            <h4>Details: ${json.pdspec}</h4>
            
        </div>
    </div>           
    `;
    
    $('.modal-body').html(s);

}

//START FILTER CATEGORIES

var element_gifts = document.querySelectorAll(".element_gifts");
const filter_button = document.querySelectorAll("#filter_button .filter");
const filter_brand = document.querySelectorAll(".filter-brand");
//console.log(filter_button);


//FILLTER BY EVENT CLICK id#filter_button

filter_button.forEach(function(e)
{
    e.addEventListener("click",function(e1)
    {
      
        //Click to get data filter
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

//FILTER BY BRANDS
filter_brand.forEach(function(e)
{
    e.addEventListener("click",function(e1)
    {
        
        let button_brand = e1.target.dataset.filter;
        //console.log(button_brand);
        element_gifts.forEach(function(e2)
        {
            let element_filter = e2.dataset.brand;
            //console.log(element_filter);
            

            if(button_brand === element_filter || button_brand === "all" ) 
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
