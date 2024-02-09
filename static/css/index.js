let i=0;
let speed=9;
let txt;
let upload=document.querySelector(".submit")
let hide=document.getElementById('loading')
window.onload=function(){
   hide.style.display="none"
   
}
upload.addEventListener("click",()=>{
   console.log("uploadedddd")
})

function typewriter1(){
   let txt="Bacterial leaf blight is a deadly bacterial disease that is among the most destructive afflictions of cultivated rice (Oryza sativa and O. glaberrima). In severe epidemics, crop loss may be as high as 75 percent, and millions of hectares of rice are infected annually. The disease was first observed in 1884–85 in Kyushu, Japan, and the causal agent, the bacterium Xanthomonas oryzae pathovar oryzae (also referred to as Xoo), was identified in 1911, at that time having been named Bacillus oryzae. Thriving in warm, humid environments, bacterial blight has been observed in rice-growing regions of Asia, the western coast of Africa, Australia, Latin America, and the Caribbean. Although not commonly found in the United States, a bacterial strain related to Xoo has been listed as an agricultural select agent by the U.S. Department of Agriculture, a designation that places it under strict regulations."
    if(i<txt.length){
       document.querySelector(".para").innerHTML+=txt.charAt(i);
       i++;
       setTimeout(typewriter1,speed);
    }
}
function typewriter2(){
    let txt2="Rice leaf smut is a fungal disease caused by the pathogen Tilletia barclayana (syn. Tilletia horrida). It affects rice plants by forming characteristic smut galls or spore balls on the leaves, leaf sheaths, and sometimes the panicles. These galls are initially green but turn black as the disease progresses. The smut spores are carried by wind and water, spreading the disease to healthy plants. Rice leaf smut can significantly reduce crop yields if left uncontrolled, making it a concern for rice farmers worldwide. Control measures include using disease-resistant rice varieties, proper crop rotation, and fungicidal treatments."
    if(i<txt2.length){
       document.querySelector(".para").innerHTML+=txt2.charAt(i);
       i++;
       setTimeout(typewriter2,speed);
    }

}
function typewriter(){
    txt="Brownspot (Bipolaris oryzae) is the causal agent of rice brown spot disease and is responsible for significant economic losses. In order to control this disease, three phenolic antioxidants were tested (salicylic acid, benzoic acid and hydroquinone).The antifungal activity of the tested substances were investigated against B. oryzae at different concentrations in vitro, as well as the efficacy of their exogenous application in controlling rice brown spot disease under field conditions. In vitro, benzoic acid or salicylic acid at 9 mM completely inhibited the growth of B. oryzae. Under fieldconditions, spraying of benzoic acid at 20 mM led to a significant reduction in disease severity (DS) and disease incidence (DI) on the plant leaves, in addition to a significant increase in the grain yield and its components. Some biochemical responses were also detected, where the application of the previous treatment led to a significant increase in the total photosynthetic pigments(chlorophyll a an        d b and carotenoids) in rice leaves and in the total carbohydrate and protein contents of the yielded grains.";

   if(i<txt.length){
      document.querySelector(".para").innerHTML+=txt.charAt(i);
      i++;
      setTimeout(typewriter,speed);
   }
}
