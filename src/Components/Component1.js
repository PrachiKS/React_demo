import React from "react"

const Component1 = () => {
    let data = [
        {
            name: "A",
            title: "Worker"
        },
        {
            name: "B",
            title: "Worker"
        },
        {
            name: "C",
            title: "Worker"
        },
        {
            name: "D",
            title: "Worker"
        },
        {
            name: "E",
            title: "Worker"
        }
    ];

    return (
        <>
            {
                data.map((item) => {
                    let {name, title} = item;
                    return (
                        <>
                            <h1>{name}</h1>
                            <p>{title}</p>
                        </>
                    );
                })
            }
        </>
    );
};
export default Component1