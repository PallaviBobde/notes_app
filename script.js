let big_btn = document.querySelector(".big_button");
let add_btn = document.querySelector(".add");
let skip_btn = document.querySelector(".skip");
let notes_container = document.querySelector(".notes_container");
let prompt = document.querySelector(".prompt");
let start = document.querySelector(".start");

big_btn.addEventListener("click",()=>{
    start.style.display = "none";
    prompt.style.display = "block";
})

add_btn.addEventListener("click",()=>{
    let topic = document.querySelector("#topic");
    let note = document.querySelector("#note");

    if((topic.value != "") && (note.value != "")){
         let new_note = document.createElement("div");
         let note_topic = document.createElement("h2");
         let note_para = document.createElement("div");

         note_topic.innerText = topic.value;
         note_para.innerText = note.value;

         new_note.setAttribute("class","note");
         note_topic.setAttribute("class","topic");
         note_para.setAttribute("class","note_para");

         notes_container.appendChild(new_note);
         new_note.appendChild(note_topic);
         new_note.appendChild(note_para);

         prompt.style.display = "none";
         topic.value  = "";
         note.value = "";
    }
})

skip_btn.addEventListener("click",()=>{
    prompt.style.display = "none";
})

// .note{
//     .topic
//     .note_para
// }