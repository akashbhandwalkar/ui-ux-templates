const colors = [{
    mainstart: "#36b7ff",
    mainend: "#63afff",
    mainfinish: "#fb92ff",
    leftstart: "#35ffff",
    leftend: "#4cc7fe",
    leftinitial: "#b8ffff"
},
{
    mainstart: "#F95950",
    mainend: "#FF9558",
    mainfinish: "#FF9558",

    leftstart: "#BA5EFF",
    leftend: "#6633B0",
    leftinitial: "#BA5EFF"
}, {
    mainstart: "#38D787",
    mainend: "#38D787",
    mainfinish: "#4E67EB",

    leftstart: "#FFA4ED",
    leftend: "#FFDDEC",
    leftinitial: "#FFA4ED"
}]

setInterval(() => {
    var random = Math.floor(Math.random() * 100) % 2;
    document.documentElement.style.setProperty("--mainstart", colors[random].mainstart);
    document.documentElement.style.setProperty("--mainend", colors[random].mainend);
    document.documentElement.style.setProperty("--mainfinish", colors[random].mainfinish);

    document.documentElement.style.setProperty("--leftstart", colors[random].leftstart);
    document.documentElement.style.setProperty("--leftend", colors[random].leftend);
    document.documentElement.style.setProperty("--leftinitial", colors[random].leftinitial);


    console.log('*')
        

}, 1000);

// --mainstart: #36b7ff;
// --mainend: #63afff;
// --mainfinish: #fb92ff;
// --leftstart: #35ffff;
// --leftend: #4cc7fe;

// #371D31-#563C50-#F95950-#EDD1CB