///全てはドラッグアンドドロップです。


let dragged = null

const keys = document.querySelectorAll(".key");

keys.forEach((key)=>{
    key.addEventListener("dragstart", (event) =>{
    dragged = event.target
    })
}
    
    
);

const target = document.getElementById("droptarget");
target.addEventListener("dragover",(event)=>{
    event.preventDefault();
});


target.addEventListener("drop", (event) => {
  event.preventDefault();
    dragged.remove();

  target.textContent = dragged.textContent;
  

  const content = document.getElementById(`${dragged.id}-content`);
///${}と``を組み合わせると要素を探せる？
  if(content) {
    content.style.display = "block";
  }

  if(dragged.id === "key4"){
    const key5flag = document.getElementById("key5");
    if(key5flag){
        key5flag.style.display = "block";
    }
  }
    
 
});


///もっと色々仕込みたかった...。
