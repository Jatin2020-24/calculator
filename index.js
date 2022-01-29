// alert("Welcome to Ninja Maths Calculator")
const ce = document.getElementById('ce').addEventListener('click', ()=>{
    let a = document.getElementById('value').value;
    a = a.substring(0, a.length - 1);
    document.getElementById('value').value = a;
    console.log(a);
});

const feedback = document.getElementById('feedback').addEventListener('click', ()=>{
    window.open("https://forms.gle/crhhH3R235ejoYicA", '_blank');
})