import React, { useState } from 'react';

export default function TextFrom(props) {
    const [text, setText] = useState("");

    const handleUPClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (text) {
            props.showAlert("Converted to Uppercase", "success");
        }
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (text) {
            props.showAlert("Converted to Lowercase", "success");
        }
    };

    const handleClearOnClick = () => {
        setText("");
        if (text) {
            props.showAlert("Text is cleared", "success");
        }

    };

    const handleReverse = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        if (text) {
            props.showAlert("Text is Reversed", "success");
        }
    };

    const handleCopy = () => {
        let textarea = document.getElementById("myBox");
        textarea.select();
        navigator.clipboard.writeText(textarea.value);
        if (text) {
            props.showAlert("Copied to Clipboard", "success");
        }
    };

    const handleExtraSpaces = () => {
        let splitText = text.split(/[ ]+/);
        let newText = splitText.join(" ");
        setText(newText);
        if (newText !== text) {
            props.showAlert("Extraspaces has been removed", "success");
        }
    };

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const wordCount = text ? text.split(" ").filter((str) => str !== "").length : 0;

    return (
        <>
            <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style={{ backgroundColor: props.mode === "light" ? "white" : "#343a40", color: props.mode === "light" ? "black" : "white" }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearOnClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Delete Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>Your Text Summary</h1>
                <p>{wordCount} words, {text.length} characters</p>
                <p>It will take {wordCount * 0.008} mins to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text to Preview"}</p>
            </div>
        </>
    );
}











// import React, { useState } from 'react'

// export default function TextFrom(props) {

//     const handleUPClick = () => {
//         let newText = text.toUpperCase();
//         setText(newText);
//     }
//     const handleLowClick = () => {
//         let newText = text.toLowerCase();
//         console.log(typeof (newText));
//         setText(newText);
//     }
//     const handleClearOnClick = (e) => {
//         setText("");
//     }
//     const handleReverse = (e) => {
//         let newText = text.split("").reverse().join("");
//         setText(newText);
//     }
//     const handleCopy = (e) => {
//         let texxt = document.getElementById("myBox");
//         texxt.select();
//         navigator.clipboard.writeText(texxt.value);
//     }

//     const handleExtraSpaces = () => {
//         let newText = text.split(/[ ]+/);
//         setText(newText.join(" "));
//     }
//     const handleOnChange = (e) => {
//         setText(e.target.value);
//     }


//     // text = "new Text";  wrong way
//     // setText("new text"); correct way
//     const [text, setText] = useState("");

//     const wordCount = text ? text.split(" ").length : 0;
//     return (
//         <>
//             <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }}>
//                 <div className="mb-3">
//                     <h1>{props.heading}</h1>
//                     <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style={{ backgroundColor: props.mode === "light" ? "white" : "#343a40",color: props.mode === "light" ? "black" : "white" }}></textarea>
//                 </div>
//                 <button className="btn btn-primary mx-2" onClick={handleUPClick} >Convert To Uppercase</button>
//                 <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert To Lowercase</button>
//                 <button className="btn btn-primary mx-2" onClick={handleClearOnClick} >clear</button>
//                 <button className="btn btn-primary mx-2" onClick={handleReverse} >Reverse</button>
//                 <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy</button>
//                 <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Delete Extra Spaces</button>
//             </div>
//             <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
//                 <h1>Your Text Summary</h1>
//                 <p>{wordCount} words, {text.length} characters</p>
//                 <p>It will take {wordCount * 0.008} mins to read</p>
//                 <h2>Preview</h2>
//                 <p>{text.length > 0 ? text : "Enter text to Preview"}</p>
//             </div>

//         </>

//     )
// }
