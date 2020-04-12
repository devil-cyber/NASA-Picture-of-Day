 // used your own API KEY

function displayImage(data){
  var p=$("#para");
   p.text(data.explanation);
console.log(data.explanation);


     $("#im").attr("src",data.url);
}
$(".btn").click(function(){
    var p=$(".in").val();
    console.log(p);
    
$.ajax({
    url:"https://api.nasa.gov/planetary/apod?api_key=f3JN8xm2jRgxw8Ah4zAfiZHQn9fa82xtclYNxsbj"+"&date="+p,
    method:"get",
    success:displayImage
        
}).fail(function(){
    window.alert("Bad Request! Check The Date Format or the year you have entred year should be in the range of 1995 to current (eg.2018-10-12) for further enquiry Contact:Manikant kumar at mani2474695@gmail.com")
});
});


