//Prompt Answer

// let guessNum = 25;

// let userNum = prompt("Enter the numer");
// while(userNum != guessNum){
//      userNum = prompt("You entered wrong number");
// }
// alert("Yayyyyy");


//Strings
let a = "JavaScript"; //Coding standard
let b = 'Javascript';

//console.log(a[0]);   //array and string start pos from 0 always


const stu = {
    name: "Aman",
    class: 12
}



//Functions 

// function name(a) {
//     //Function def
//     let num = a;


//     return num;
// }


// name(18);



//Arrow function
const name = () => {

}


function add(name ()){
    console.log(a);

   return  add();
}

add(2);

//Example of hof and callback
let arry = [1,2,3,4,5];
arry.forEach(function printval(val, value, array)){
    console.log(val)
}


// forEach function takes 3 paramters =  index, value, array

//forOf loop

arry.forEach(idx, val, array){  

}


//Maps method - It will create new array
arry.map(callbackfunction(idx, val, array))

//Filter method - it returns true or false
arry.filter(val){
    return arr%2==0;
}

//Reduce method - it will take all array value and return only one value
//For example = sum of arry is 15


// Recursion
// It is a function calling itself


//Function in a function parameter is known as callback function (inside)
// The function which calls callback function is known as Higher order function(HOF).

//Object  -  Normal


//console.log("My name is", stu.name, "and i am in class", stu.class);

//Template Literals

let result = `My name is ${stu.name} and i am in class ${stu.class}`;

//${stu.name} is known as String interpolation
//console.log(result);


let name = "AmanJoshi" //Escape characters


//Strings in JS are immutable 
//Arrays and objects are mutable

//String methods

//.toUpperCase - Convert whole strng in upper case
//.toLowerCase
//.trim

//.slice
//.concat
//.replace
//.charAt(5)



//ARRAYS
//Collection of similar datatype - linear [1,5,6,54]


// console.log( typeof arr);

// arr[0] = 12;
// console.log(  arr);


arr.splice(1, 100)
console.log(arr);




//ARRAY Function 
// push() = add in end
//pop() = remove from end


let arr = ["bloomberg", "microsoft", "Uber", "Google", "IBM", "Netflix"];


let price = [240, 400, 300, 768, 900];
//10% discount 240 - 24 = 216

price = [212, 360, 270,]



jQuery(document).ready(function ($) {
    var currentUrl = window.location.href;

    // Function to append coupon tag
    function appendCouponTag(selector, html, flagVar) {
        if (!window[flagVar]) {
            $(selector).find(".product_title").append(html);
            window[flagVar] = true;
        }
    }

    // Function to prepend coupon tag
    function prependCouponTag(selector, html, flagVar) {
        if (!window[flagVar]) {
            $(selector).find(".product_title").prepend(html);
            window[flagVar] = true;
        }
    }

    //     Check for Anker 2 Pro Speicher product
    if (currentUrl.includes('https://epp.solar/product/')) {
        appendCouponTag(".product_cat-anker-2-pro-speicher",
            "<div class='arky_anker_text-area'><p class='arky_anker_text'> </p></div>",
            "arky_anker_textAppended"
        );

        prependCouponTag(".product_cat-balkonkraftwerke",
            "<div class='star_rating-area'><p class='reviews_customer-sec'><a href='#reviews_customer'><img src='https://stegbackdotcomcdn.b-cdn.net/root/storage/media/2024_04_26/1714137666-0.png' class='rating-reviews-img'><span class='review_count'>(968 Bewertungen) </span></a></p></div>",
            "starAppended"
        );

        appendCouponTag(".product_cat-spring-verkauf",
            "<div class='arky_coupontag'><span class='tag_title'>Nur mit diesem Produkt kompatibel: </span><span title='Klicken Sie, um den Code zu kopieren.' class='themainTag' style='cursor: pointer; user-select: all;' onclick='copyToClipboard(this)'>FRÜHLING50</span></div>",
            "couponAppended11"
        );
    }

    // Display reviews_customer if both classes exist
    var hasSingleProduct = document.querySelector('.single-product-page') !== null;
    var hasBalkonkraftwerke = document.querySelector('div.product_cat-balkonkraftwerke') !== null;
    if (hasSingleProduct && hasBalkonkraftwerke) {
        var reviewsCustomer = document.getElementById('reviews_customer');
        if (reviewsCustomer) {
            reviewsCustomer.style.display = 'block';
        }
    }

    // Add Sale tab
    if (currentUrl === "https://epp.solar/" || /^https:\/\/epp\.solar\/product\-category\//.test(currentUrl)) {
        var div = document.createElement("div");
        div.innerHTML = "<div id='rabatt_tab_img' class='sf_visible'><a href='https://epp.solar/sale/'><img src='https://stegbackdotcomcdn.b-cdn.net/root/storage/media/2024_05_29/1716964892-0.jpeg'></a><div class='close_btn' onclick='toggle_rabatt_tab()'>x</div></div><div id='rabatt_tab' class='' onclick='toggle_rabatt_tab()'> Sale</div>";
        document.body.appendChild(div);
    }

    // Hide specific categories
    const elementsToHide = $(".posted_in a, .category-list a");
    elementsToHide.each(function () {
        const text = $(this).text();
        if (text.includes('Bestseller') || text.includes('Balkonkraftwerk 1000euro-1500euro') || text.includes('Germany Free') || text.includes('Anker 2 Pro Speicher')) {
            $(this).hide();
        }
    });

    // Replace images after timeout
    setTimeout(() => {
        const myList = document.getElementById("rk_icon_sec_btm");
        if (myList) {
            Array.from(myList.getElementsByTagName("img")).forEach((img) => {
                if (img.src.includes("https://stegback.com/root/storage/uploads/01671193749-pic1.png")) {
                    img.src = "https://stegback-com.b-cdn.net/root/storage/media/2024_01_12/1705064950-0.png";
                }
            });
        }
    }, 2000);

    // Update text after timeout
    setTimeout(() => {
        const old_txt = document.getElementById("rk_icon_content-1_btm");
        if (old_txt) {
            const new_txt = old_txt.getElementsByTagName("div")[0];
            if (new_txt) {
                new_txt.innerText = "5 Sterne auf Trustami: Über 800 positive Bewertungen";
            }
        }
    }, 2000);

    // Handle pickup date not chosen
    const urlParams = new URLSearchParams(window.location.search);
    const pickupChooseValue = urlParams.get('pickup_choose');
    if (pickupChooseValue === "no") {
        const orderNo = urlParams.get('order_no');
        const validateUrl = `https://stegback.com/api/validate_selfpickup_date_choosen?order_id=${orderNo}`;
        const iframeHtml = `<iframe src="https://stegback.com/local_pickup_not_choosen_iframe?order_id=${orderNo}" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>`;
        $.ajax({
            type: 'get',
            url: validateUrl,
            beforeSend: function () {
                $("#selfPickup_col").append(`<span style="font-size:60px;text-align:center;color:#323232;" class="pickup-loader"><i class="fa fa-spinner fa-spin"></i></span>`);
            },
            success: function (response) {
                $(".pickup-loader").remove();
                if (response.success) {
                    $("#selfPickup_col").append(iframeHtml);
                }
            },
            error: function (err) {
                console.error(err);
            }
        });
    }

    // Base64 encoding/decoding utility
    var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (input) {
            var output = "", chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
            input = Base64._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charat(enc3) + this._keyStr.charat(enc4);
            }
            return output;
        },
        decode: function (input) {
            var output = "", chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = Base64._utf8_decode(output);
            return output;
        },
        _utf8_encode: function (string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        },
        _utf8_decode: function (utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        }
    }

    // Code for short description ProductIcon
    setTimeout(function () {
        var productIframe = document.getElementById("product-icon");
        if (productIframe) {
            var productView = Base64.decode(productIframe.innerHTML || productIframe.getAttribute("data-stegback"));
            productIframe.innerHTML = productView;
        }
    }, 1000);

    //     // Code for dataSheet
    //     var wplinksTab = document.getElementById("wplinks_tab");
    //     if (wplinksTab) {
    //         var wplinksTabContent = wplinksTab.innerHTML || wplinksTab.getAttribute("data-stegback");
    //         wplinksTab.innerHTML = Base64.decode(wplinksTabContent);
    //     }

    // code for dataSheet
    var wplinksTab = document.getElementById("wplinks_tab"), wplinksTabContent = wplinksTab.innerHTML; if (wplinksTabContent) { wplinksTab.innerHTML = Base64.decode(wplinksTabContent); } else { wplinksTab.innerHTML = Base64.decode(wplinksTab.getAttribute("data-stegback")); }

    // PDF download modification
    setTimeout(function () {
        $(".rk_container a[href^='https://ik.imagekit.io']").each(function () {
            let oldHref = $(this).attr("href");
            $(this).attr("href", oldHref + "?download.pdf");
        });
    }, 5000);
});








//Stegpearl.de global js
<script>
jQuery(document).ready(function () {
	    var arky_coupon_code_new = window.location.href;
  
    if (arky_coupon_code_new.includes('https://stegpearl.de/produkt/')) {
        // Use a flag to check if the coupon tag has been appended
        var couponAppended11 = false;
  
        document.querySelectorAll(".product_cat-spring-verkauf").forEach(function (element) {
            // Check if the coupon tag has not been appended before
            if (!couponAppended11) {
                var arky_coupon_code1_new = "<div class='arky_coupontag'><span class='tag_title'>Gutscheincode: </span><span title='Klicken Sie, um den Code zu kopieren.' class='themainTag' style='cursor: pointer; user-select: all;' onclick='copyToClipboard(this)'>FRÜHLING50</span><p style='font-size: 16px;margin-top: 1rem;margin-bottom: 0;'>Nur mit diesem Produkt kompatibel.</p></div>";
                jQuery(element).find(".product_title").append(arky_coupon_code1_new);
  
                // Set the flag to true after appending the coupon tag
                couponAppended = true;
            }
        });
    }
  });
   
  
  
  // Script for Remove Cross-Selling Product while its added in cart and change page URL
  
             jQuery(document).ready(function () {
                    var bestseller_cat = window.location.href;
                    if (bestseller_cat.includes('https://stegpearl.de/produkt-kategorie/') || bestseller_cat.includes('https://stegpearl.de/sale/')) {
                            // console.log('yeah its working!');
                            jQuery('.product_cat-bestseller .product-wrapper').append('<div class="custom_label_bestseller"><span class= "display_hide_prod" > Bestseller</span ></div > ');
                            }
                    if (bestseller_cat.includes('https://stegpearl.de/produkt/')) {
                            // console.log('yeah its working again!');
                            jQuery('.product_cat-bestseller .product-image-wrap').append('<div class="custom_label_bestseller"><span class= "display_hide_prod" > Bestseller</span ></div > ');
                            }
                    if (bestseller_cat.includes('https://stegpearl.de/')) {
                            // console.log('yeah its working again!');
                            jQuery('.product_cat-bestseller .product-wrapper').append('<div class="custom_label_bestseller"><span class= "display_hide_prod" > Bestseller</span ></div > ');
                            }
            });
  
// 	setTimeout(() => {
// // 		console.log('1sec timeout');
// 		var aaaa = document.getElementById("product-icon").innerHTML;
// 		var ffff =  b64DecodeUnicode(aaaa);
// 		document.getElementById("product-icon").innerHTML = ffff;
// 	},1000);


/**

*

*  Base64 encode / decode

*  http://www.webtoolkit.info/

**/
  /* Current year in Copyright */	
  document.getElementById("year").innerHTML = new Date().getFullYear();
  /* Current year in Copyright */
  
// Base64 encoding/decoding utility
    var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (input) {
            var output = "", chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
            input = Base64._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charat(enc3) + this._keyStr.charat(enc4);
            }
            return output;
        },
        decode: function (input) {
            var output = "", chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = Base64._utf8_decode(output);
            return output;
        },
        _utf8_encode: function (string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        },
        _utf8_decode: function (utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        }
    }
  
// code for short description ProductIcon
//     setTimeout(function () { var productIframe = document.getElementById("product-icon").innerHTML; if (productIframe) { var productView = Base64.decode(productIframe); document.getElementById("product-icon").innerHTML = productView } else { var productTag = document.getElementById("product-icon").getAttribute("data-stegback"), productViewNew = Base64.decode(productTag); document.getElementById("product-icon").innerHTML = productViewNew } }, 1000);
 
// code for dataSheet
// 	var wplinksTab = document.getElementById("wplinks_tab"), wplinksTabContent = wplinksTab.innerHTML; if (wplinksTabContent) { wplinksTab.innerHTML = Base64.decode(wplinksTabContent); } else { wplinksTab.innerHTML = Base64.decode(wplinksTab.getAttribute("data-stegback")); }

// code for dataSheet
	var wplinksTab = document.getElementById("wplinks_tab"), wplinksTabContent = wplinksTab.innerHTML; 	if (wplinksTabContent) { wplinksTab.innerHTML = Base64.decode(wplinksTabContent); } else { wplinksTab.innerHTML = Base64.decode(wplinksTab.getAttribute("data-stegback")); }
	
	


  function formatDateMonth(date) {
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	return new Intl.DateTimeFormat('en-US', options).format(date);
}
  
  function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
	
</script>