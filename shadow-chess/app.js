/* change and update camera movements
   such as transform, rotate, scale.
 */
function apply(i,o,u)
{
var output;
if(u){output = i.value + (u + '')}
else{output = Number(i.value)}
document.documentElement.style.setProperty(o, output);
i.nextElementSibling.innerHTML = output;
}

window.addEventListener('load', function(){
setTimeout(function(){
// apply default values
apply(x_axis, '--x', 'deg');
apply(y_axis, '--y', 'deg');
apply(z_axis, '--z', 'deg');
apply(tx_axis, '--tx', 'px');
apply(ty_axis, '--ty', 'px');
apply(tz_axis, '--tz', 'px');
apply(perspective, '--p', 'px');
apply(scale, '--s');

setTimeout(function(){
document.documentElement.classList.add("scalable");
}, 1000);
}, 1000);

// print the number of DIVs used
console.info(document.querySelectorAll("div").length + " DIVs used!");
});