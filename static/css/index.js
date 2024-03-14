let i=0;
let speed=9;
let txt;
let upload=document.querySelector(".submit")
// let hide=document.getElementById('loading')
// window.onload=function(){
//    hide.style.display="none"
// }
document.onreadystatechange = function() {
   if (document.readyState !== "complete") {
      //  document.querySelector("body").style.visibility = "hidden";
       document.querySelector("#loading").style.visibility = "visible";
   } else {
       document.querySelector("#loading").style.display = "none";
      //  document.querySelector("body").style.visibility = "visible";
   }
};

upload.addEventListener("click",()=>{
   console.log("uploadedddd")
})

function typewriter1(){
   let txt="To manage bacterial leaf blight (BLB) in paddy, several remedies can be employed. Firstly, use disease-free seeds and plant resistant varieties whenever possible. Secondly, practice crop rotation and avoid continuous cropping of rice to reduce the buildup of pathogen populations in the soil. Thirdly, ensure proper field drainage and avoid waterlogging, as excess moisture can promote the development and spread of BLB. Additionally, maintain proper spacing between plants to improve air circulation and reduce humidity levels, which can help prevent the spread of the disease. If BLB is detected, apply copper-based fungicides or bactericides according to label instructions. However, it is essential to use these chemicals judiciously to minimize environmental impact. Finally, consult with agricultural experts for specific recommendations tailored to your region and rice-growing conditions."
    if(i<txt.length){
       document.querySelector(".para").innerHTML+=txt.charAt(i);
       i++;
       setTimeout(typewriter1,speed);
    }
}
function typewriter2(){
    let txt2="To manage leaf smut in rice plants, several remedies can be applied. Firstly, plant resistant rice varieties that are less susceptible to leaf smut. Secondly, practice crop rotation with non-host crops to break the disease cycle and reduce pathogen buildup in the soil. Thirdly, maintain proper field sanitation by removing and destroying infected plant debris. Additionally, treat seeds with fungicides before planting to reduce the risk of infection, and use fungicidal sprays when necessary, following label instructions carefully. Implementing proper field management practices, such as maintaining proper field drainage and avoiding waterlogging, can also help reduce the risk of leaf smut. Lastly, consult with agricultural experts for tailored recommendations and consider integrated pest management approaches for comprehensive control."
    if(i<txt2.length){
       document.querySelector(".para").innerHTML+=txt2.charAt(i);
       i++;
       setTimeout(typewriter2,speed);
    }

}
function typewriter(){
    txt="This disease is characterized by a wide range of symptoms. However, the presence of circular or oval brown spots with a yellow halo during the tillering stage is the most visible sign of the infection. As they enlarge, a gray center develops in the middle of these spots and a reddish-brown margin becomes visible. Stems also become discolored. On susceptible varieties, lesions may reach a length of 5-14 mm and can cause leaves to wilt. On resistant varieties, the lesions are yellow-brown and pinhead-sized. The infection of florets leads to incomplete or disrupted grain filling and a reduction in grain quality.";

   if(i<txt.length){
      document.querySelector(".para").innerHTML+=txt.charAt(i);
      i++;
      setTimeout(typewriter,speed);
   }
}
