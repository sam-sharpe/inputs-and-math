$("body").on("keyup keydown keypress change", ".item input", function(e){
  let pre_tariff_total_sum = 0;
  let post_tariff_total_sum = 0;

//finds each item within a table row
  $("tr.item").each(function () {
    const $this_row = $(this);
//finds the quantity in the row
    const quantity_field = $this_row.find(".qty");
//defines qty as the value in quantity_field
    let qty = quantity_field.val();
//same as qty
    const cost_field = $this_row.find(".cost");
//same as qty
    let cost = cost_field.val();
//grab the data for the tarriff for each row
    const tariff_pct = $this_row.data("tariff-percent");
//make it into a number
    let pct = parseFloat(tariff_pct);
//and make it a percentage instead of a whole number
    pct = pct / 100;

//add the if statement – **BEFORE THE FLOATS** –for the function to skip rows without an input. this prevents the HTML from throwing a NaN
if(qty === "" || cost === "") {
  return false;
}

//make them into numbers. we want floats because the input might not always be a whole #
    qty = parseFloat(qty);
    cost = parseFloat(cost);

    const pre_tariff_total = qty * cost;

    const post_tariff_total = (pre_tariff_total + (pre_tariff_total * pct));

    pre_tariff_total_sum = pre_tariff_total_sum + pre_tariff_total;
    post_tariff_total_sum = post_tariff_total_sum + post_tariff_total;

    console.log("pre tarriff total");
    console.log(pre_tariff_total);

//insert the pre-total into each td's span
    $this_row.find("td.pre_total span").text(pre_tariff_total);
    //insert the post-total into each td's span
    $this_row.find("td.post_total span").text(post_tariff_total);

    console.log("post tarriff total");
    console.log(post_tariff_total);

  }); //THIS ENDS THE EACH LOOP

    console.log("pre tarriff total sum");
    console.log(pre_tariff_total_sum);

    //insert sum total into span below
    $("#pre_total span").text(pre_tariff_total_sum);

    console.log("post tarriff total sum");
    console.log(post_tariff_total_sum);

    //insert sum total into span below
    $("#post_total span").text(post_tariff_total_sum);

}); //THIS ENDS THE KEYPRESS LISTENER
