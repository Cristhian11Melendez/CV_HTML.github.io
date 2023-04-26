//menu lateral
var menu_visible=false;
let menu=document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display="block";
        menu_visible=true;
    }
    else{
        menu.style.display="none";
        menu_visible=false;
    }
}
let links=document.querySelectorAll("nav a");
for(var x=0; x<links.length;x++){
    links[x].onclick=function(){
        menu.style.display="none";
        menu_visible=false;
    }
}
// animaciones
function Barra(id_barra){
for(i=0;i<=17;i++){
    let div=document.createElement("div");
    div.className="e";
    id_barra.appendChild(div);
}
}
let html=document.getElementById("html");
Barra(html);
let javascript=document.getElementById("javascript");
Barra(javascript);
let java=document.getElementById("java");
Barra(java);
let javaweb=document.getElementById("javaweb");
Barra(javaweb);
let c=document.getElementById("C#");
Barra(c);
let visualbasic=document.getElementById("vba");
Barra(visualbasic);
let mysql=document.getElementById("mysql");
Barra(mysql);
let sql=document.getElementById("sql");
Barra(sql);

// cantidad
let contadores=[-1,-1,-1,-1,-1,-1,-1,-1];
let start=false;
function efectoHabilidades(){
    var habilidades=document.getElementById("habilidades");
    var distancia_skills=window.innerHeight-habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && start==false){
        start=true;
        const intervalHtml=setInterval(function(){
            pintarbarra(html,9,0,intervalHtml);
        },100);
        const intervaljavascript=setInterval(function(){
            pintarbarra(javascript,5,1,intervaljavascript);
        },100);
        const intervaljava=setInterval(function(){
            pintarbarra(java,8,2,intervaljava);
        },100);
        const intervaljavaweb=setInterval(function(){
            pintarbarra(javaweb,6,3,intervaljavaweb);
        },100);
        const intervalc=setInterval(function(){
            pintarbarra(c,11,4,intervalc);
        },100);
        const intervalvba=setInterval(function(){
            pintarbarra(visualbasic,13,5,intervalvba);
        },100);
        const intervalmysql=setInterval(function(){
            pintarbarra(mysql,14,6,intervalmysql);
        },100);
        const intervalsql=setInterval(function(){
            pintarbarra(sql,14,7,intervalsql);
        },100);
        
    }
}

// cantidad adecuada
function pintarbarra(id_barra,cantidad,indice,interval){
    contadores[indice]++;
    x=contadores[indice];
    if(x<cantidad){
        let elemento=id_barra.getElementsByClassName("e");
        elemento[x].style.backgroundColor="#940253";
    }else{
        clearInterval(interval)
    }
}

// detectar el scrolling
window.onscroll=function(){
    efectoHabilidades();
}