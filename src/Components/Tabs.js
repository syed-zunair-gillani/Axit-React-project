import React, {useState} from 'react';
import '../Components/Tabs.css';
import TabImg from '../Images/tab.png'

const Tabs = () => {

    const [tabToggle, SetTabToggle] = useState(1);
    
    const togglefun = (val) =>{
        SetTabToggle(val);
    }

    return (
        <div className="tab">
            <div className="container flex justify-between tab-wrapper">
                <div className="flex tab-content item-center">
                    <div className="tab-block">
                        <div className={tabToggle === 1 ? "tab-btn tab-active" : "tab-btn"}
                        onClick = {()=>togglefun(1)}
                        >Tab 1</div>
                        <div className={tabToggle === 2 ? "tab-btn tab-active" : "tab-btn"}
                        onClick = {()=>togglefun(2)}
                        >Tab 2</div>
                        <div className={tabToggle === 3 ? "tab-btn tab-active" : "tab-btn"}
                        onClick = {()=>togglefun(3)}
                        >Tab 3</div>
                    </div>
                    <div className="content-block">
                        <div className={tabToggle === 1 ? "content content-active" : "content" }>
                            <h5>Tab 1</h5>
                            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex incidunt magni delectus animi consequatur tempora temporibus expedita veritatis! Hic molestiae maiores laudantium! adipisicing elit. Et, enim?</p>
                            <button>
                                Download
                            </button>
                        </div>
                        <div className={tabToggle === 2 ? "content content-active" : "content" }>
                            <h5>Tab 2</h5>
                            <p>Lorem ipsum consectetur adipisicing dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non vitae eius expedita molestiae inventore! Laborum hic facere deleniti ipsa esse! consectetur adipisicing elit. Et, enim?</p>
                            <button>
                                Download
                            </button>
                        </div>
                        <div className={tabToggle === 3 ? "content content-active" : "content" }>
                            <h5>Tab 3</h5>
                            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi enim cum nihil accusantium dolorem cumque recusandae blanditiis repellendus eaque! adipisicing elit. amet consectetur adipisicing eli Et, enim?</p>
                            <button>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tab-img">
                    <img src={TabImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Tabs
