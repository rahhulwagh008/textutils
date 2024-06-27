import React, { useState } from 'react';

export default function About() {
    const [currentStyle, setCurrentStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });

    const toggleMode = () => {
        if (currentStyle.color === "black") {
            setCurrentStyle({
                color: "white",
                backgroundColor: "black"
            });
        } else {
            setCurrentStyle({
                color: "black",
                backgroundColor: "white"
            });
        }
    };

    return (
        <div className='container' style={currentStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={currentStyle}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={currentStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={currentStyle}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={currentStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={currentStyle}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={currentStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type="button" onClick={toggleMode} className="btn btn-primary">{currentStyle.color === 'black' ? 'Enable Dark Mode' : 'Enable Light Mode'}</button>
            </div>
        </div>
    );
}




// import React, { useState } from 'react'

// export default function About() {

//     let myStyle = {
//         color: "black",
//         backgroundColor: "white"
//     }

//     let setStyle = {
//         color: "white",
//         backgroundColor: "black"
//     }

//     const [btnText, makeBtnText] = useState("Enable Dark Mode");

//     const [currentStyle, setCurrentStyle] = useState(myStyle);

//     const toggleMode = () => {
//         if (currentStyle.color === "black") {
//             setCurrentStyle(setStyle);
//             makeBtnText("Enable Light Mode");
//         }
//         else {
//             setCurrentStyle(myStyle);
//             makeBtnText("Enable Dark Mode");
//         }
//     }

//     return (
//         <div className='container' style={currentStyle}>
//             <h1 className='my-3'>About Us</h1>
//             <div className="accordion" id="accordionPanelsStayOpenExample">
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button" style={currentStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
//                             Accordion Item #1
//                         </button>
//                     </h2>
//                     <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
//                         <div className="accordion-body" style={currentStyle} >
//                             <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={currentStyle} >
//                             Accordion Item #2
//                         </button>
//                     </h2>
//                     <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
//                         <div className="accordion-body" style={currentStyle} >
//                             <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item">
//                     <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={currentStyle} >
//                             Accordion Item #3
//                         </button>
//                     </h2>
//                     <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
//                         <div className="accordion-body" style={currentStyle} >
//                             <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="container my-3">
//                 <button type="button" onClick={toggleMode} className="btn btn-primary">{btnText}</button>
//             </div>
//         </div>
//     )
// }
