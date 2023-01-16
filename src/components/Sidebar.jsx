import React from 'react';
import styles from"./Sidebar.module.css"

const filterData = [
    {name:"Colour",parameter:["Red","Blue","Green"]},
    {name:"Gender",parameter:["Men","Women"]},
    {name:"Price",parameter:['0-250','250-451','451']},
    {name:"Type",parameter:['Polo','Hoodie','Basic']}
]

const Sidebar = ({handleFilter}) => {
    return (
        <div id={styles.main}>
           {
            filterData.map((el)=>(
                <div className={styles.names}>
                    <h3 key={el.name}>{el.name}</h3>
                    <div>
                        {
                        el.parameter.map((i)=>(
                            <div className={styles.parameters}>
                                <input onChange={(e)=>handleFilter(e.currentTarget.value)} value={i} type='checkbox'/>
                                <h3 key={i}>{i}</h3>
                            </div>
                        ))
                        }
                    </div>
                </div>
            ))
           } 
        </div>
    );
};

export default Sidebar;