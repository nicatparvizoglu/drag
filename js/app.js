var drp=document.querySelector(".dropArea .drop")
drp.addEventListener("dragover",function(e){
    e.preventDefault()
    this.classList.add("active");
})
drp.addEventListener("dragleave",function(){
    this.classList.remove("active");
})
drp.addEventListener("drop",function(e){
    e.preventDefault();
    this.classList.remove("active");

    FillTable(e.dataTransfer.files)

})
function FillTable(images){
    for(var img of images){
        if(img.type.match("image*")){
            const tr=document.createElement("tr");
            const reader=new FileReader();
            reader.onload=function(fl){
                const imageTd=document.createElement("td");
                const myImg=document.createElement("img")
                myImg.src=fl.target.result;
                myImg.width=200;
                myImg.height=200;

                imageTd.appendChild(myImg);
                tr.insertBefore(imageTd,tr.firstChild);
            }
            reader.readAsDataURL(img);
            const nameTd=document.createElement("td");
            nameTd.innerText=img.name;
            const lastDateTd=document.createElement("td")
            lastDateTd.innerText=img.lastModifiedDate
           
           const removeTd=document.createElement("td")
           removeTd.innerText=img.remove

           const typeTd=document.createElement("td")
           typeTd.innerText=img.type;   
           

              let iTag=document.createElement("i")
              iTag.className="fas fa-times"
              iTag.style="color:red; cursor:pointer;"
              removeTd.appendChild(iTag)

            tr.appendChild(nameTd)
            tr.appendChild(lastDateTd)
            tr.appendChild(typeTd)
            tr.appendChild(removeTd)
            document.querySelector(".mainTable tbody").appendChild(tr)

        }
 
    }
}