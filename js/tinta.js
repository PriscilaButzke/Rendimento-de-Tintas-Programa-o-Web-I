const nome = document.querySelector("#nome");
const tel = document.querySelector("#tel");
const email = document.querySelector("#email");
const a = document.querySelector("#a");
const c = document.querySelector("#c");
const quan = document.querySelector("#quan");
const rendi = document.getElementById("rendi");
const demao = document.getElementById("demao");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const r = document.querySelector(".resp");

const aj = document.querySelector("#aj");
const cj = document.querySelector("#cj");
const qj = document.querySelector("#qj");

const ap = document.querySelector("#ap");
const cp = document.querySelector("#cp");
const qp = document.querySelector("#qp");


b2.addEventListener('click', limpar);
        function limpar(){
            nome.value ="";
            tel.value="";
            email.value="";
            a.value ="";
            c.value ="";
            demao.value = "";
            rendi.value = "";
            aj.value = "";
            cj.value ="";
            qj.value ="";
            ap.value ="";
            cp.value= "";
            qp.value ="";
            r.innerHTML= (`Campos limpos com sucesso!`);
        }
b1.addEventListener('click', ()=>{
        let al = (a.value);
        let co = (c.value);
        let q =(quan.value);
            if( q <=0){
                q =1;
            }else
                q = (quan.value);
            
        let rend =(rendi.value);
            if( rend <=0){
                rend = 200;
            }else 
                rend = (rendi.value);

        let dem = (demao.value);
            if( dem <=0){
                dem = 2;
            }else 
                dem = (demao.value);

        let aja = (aj.value);
        let cja = (cj.value);
        let qja = (qj.value);
        let metrosjanela =(aja * cja * qja);

        let apo = (ap.value);
        let cpo = (cp.value);
        let qpo = (qp.value);
        let metrosporta = ( apo * cpo * qpo); 

        let m = (((al * co)*q)-metrosporta - metrosjanela );

        let rendimento = ( rend/dem);
        let resul = ( m / rendimento);

        r.innerHTML=` Quantidade de tinta necessária:
        ${resul}  litros.`
        })