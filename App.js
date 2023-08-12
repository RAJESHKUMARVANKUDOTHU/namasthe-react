// 
// 

const parent =React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[React.createElement("h1",{},"hello iam h1 tage"),React.createElement("h2",{},"hello iam h2 tage")],
)
)


const heading  = React.createElement("h1",{id:"heading",xyz:"abc"},"hello ract !"); 
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);