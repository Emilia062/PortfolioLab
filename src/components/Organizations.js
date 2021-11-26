import React, {useState} from 'react';

const Organizations = () => {
    const organizationsArray = [
        {title:"Lorem Ipsum 1", text1: "Egestas, sed, tempus", text2:"Quis varius quam quisque id diam vel quam elementum pulvinar."},
        {title:"Lorem Ipsum 2", text1: "Ut, aliquam, purus, sit, amet", text2: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."},
        {title: "Lorem Ipsum 3", text1: "Mi, quis, hendrerit, dolor", text2: "Scelerisque in dictum non consectetur a erat nam."},
        {title:"Lorem Ipsum 4", text1: "Egestas, sed, tempus", text2:"Quis varius quam quisque id diam vel quam elementum pulvinar."},
        {title:"Lorem Ipsum 5", text1: "Ut, aliquam, purus, sit, amet", text2: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."},
        {title: "Lorem Ipsum 6", text1: "Mi, quis, hendrerit, dolor", text2: "Scelerisque in dictum non consectetur a erat nam."},
    ]

    const [organizations, setOrganizations] = useState(organizationsArray);

    return (
            <>
                {organizations.map((item, index) => {
                    return(
                        <div key={index} className={"help__list"}>
                            <div className={"help__list--titles"}>
                                <p className={"help__list--title"}>Zbiórka "{item.title}"</p>
                                <p className={"help__list--text1"}>{item.text1}</p>
                            </div>
                            <p className={"help__list--text2"}>{item.text2}</p>
                        </div>
                    )
                })}
            </>
    );
};

export default Organizations;