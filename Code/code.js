const CodeBtn = document.querySelector(".C-btn");
const NoteBtn = document.querySelector(".N-btn");
const pagecontent = document.querySelector(".page-content");
CodeBtn.addEventListener('click',()=>{
    // Create Division
    let Box = document.createElement("div");
    let itembox = document.createElement("div");
    let CodeBox = document.createElement("div");
    let errorbox = document.createElement("div");
    // Set class name
    Box.setAttribute('class','box');
    itembox.setAttribute('class','item');
    CodeBox.setAttribute('class','CodeBox');
    CodeBox.setAttribute('contenteditable','true');
    errorbox.setAttribute('class','error');
    CodeBox.innerText = "Write Code Here.....";
    // crete img
    let run = document.createElement("i");
    run.setAttribute('class','fa-solid fa-play');
    run.id = "run";
    let compile = document.createElement("i");
    compile.setAttribute('class','fa-solid fa-forward');
    compile.setAttribute('id','compile');
    let up = document.createElement("i");
    up.setAttribute('class','fa-solid fa-arrow-up');
    up.setAttribute('id','up');
    let down = document.createElement("i");
    down.setAttribute('class','fa-solid fa-arrow-down');
    down.setAttribute('id','down');
    let edit = document.createElement("i");
    edit.setAttribute('class','fa-solid fa-pen');
    edit.setAttribute('id','edit');
    let setting = document.createElement("i");
    setting.setAttribute('class','fa-solid fa-gear');
    setting.setAttribute('id','setting');
    let copy = document.createElement("i");
    copy.setAttribute('class','fa-solid fa-copy');
    copy.setAttribute('id','copy');
    let del = document.createElement("i");
    del.setAttribute('class','fa-solid fa-trash-can');
    del.setAttribute('id','del');
    itembox.appendChild(run);
    itembox.appendChild(compile);
    itembox.appendChild(up);
    itembox.appendChild(down);
    itembox.appendChild(edit);
    itembox.appendChild(setting);
    itembox.appendChild(del);
    itembox.appendChild(copy);
    Box.appendChild(itembox);
    Box.appendChild(CodeBox);
    Box.appendChild(errorbox);
    pagecontent.appendChild(Box);
    run.addEventListener('click',()=>{
        alert("Hello");
    })
    del.addEventListener('click',()=>{
        let x = confirm("Do You Really want to delete ");
        if(x){
            Box.style.display = "none";
        }
    })
})
NoteBtn.addEventListener('click',()=>{
    // Create Division
    let Box = document.createElement("div");
    let itembox = document.createElement("div");
    let CodeBox = document.createElement("div");
    let errorbox = document.createElement("div");
    // Set class name
    Box.setAttribute('class','box');
    itembox.setAttribute('class','item');
    CodeBox.setAttribute('class','CodeBox');
    CodeBox.setAttribute('contenteditable','true');
    errorbox.setAttribute('class','error');
    CodeBox.innerText = "Write Code Here.....";
    // crete i
    let up = document.createElement("i");
    up.setAttribute('class','fa-solid fa-arrow-up');
    up.setAttribute('id','up');
    let down = document.createElement("i");
    down.setAttribute('class','fa-solid fa-arrow-down');
    down.setAttribute('id','down');
    let edit = document.createElement("i");
    edit.setAttribute('class','fa-solid fa-pen');
    edit.setAttribute('id','edit');
    let copy = document.createElement("i");
    copy.setAttribute('class','fa-solid fa-copy');
    copy.setAttribute('id','copy');
    let del = document.createElement("i");
    del.setAttribute('class','fa-solid fa-trash-can');
    del.setAttribute('id','del');
    itembox.appendChild(up);
    itembox.appendChild(down);
    itembox.appendChild(edit);
    itembox.appendChild(copy);
    itembox.appendChild(del);
    Box.appendChild(itembox);
    Box.appendChild(CodeBox);
    Box.appendChild(errorbox);
    pagecontent.appendChild(Box);
    del.addEventListener('click',()=>{
        let x = confirm("Do You Really want to delete ");
        if(x){
            Box.style.display = "none";
        }
    })
})