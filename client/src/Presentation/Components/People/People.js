import './People.css';

const data = [
    {
        name:"Name",
        image:"",
        position:"President",
        content:"The CEO (Chief Executive Officer) of an NGO is responsible for overseeing the organization's overall operations, ensuring alignment with its mission, and managing day-to-day activities. They report to the board of directors and lead the team in achieving strategic goals and securing funding."
    },
    {
        name:"Name",
        image:"",
        position:"Vice President",
        content:"The CEO (Chief Executive Officer) of an NGO is responsible for overseeing the organization's overall operations, ensuring alignment with its mission, and managing day-to-day activities. They report to the board of directors and lead the team in achieving strategic goals and securing funding."
    },
    {
        name:"Name",
        image:"",
        position:"Secretary",
        content:"The CEO (Chief Executive Officer) of an NGO is responsible for overseeing the organization's overall operations, ensuring alignment with its mission, and managing day-to-day activities. They report to the board of directors and lead the team in achieving strategic goals and securing funding."
    },
    {
        name:"Name",
        image:"",
        position:"Treasurer",
        content:"The CEO (Chief Executive Officer) of an NGO is responsible for overseeing the organization's overall operations, ensuring alignment with its mission, and managing day-to-day activities. They report to the board of directors and lead the team in achieving strategic goals and securing funding."
    }
]

const People = () =>{
    return (
        <div id="people-container">
            {data.map((item,index)=>{
                return (
                    <div className="people-item">
                        <img src="https://th.bing.com/th/id/OIP.Wr2MLtwPvVohc4WkyoArYAHaHj?w=175&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" className="people-image" alt="image" />
                        <div className="people-bottom">
                            <h1 className="people-name">{item.name}</h1>
                            <h1 className="people-position">{item.position}</h1>
                        </div>
                        <div className="people-content">
                            <h1 className="people-name">{item.name}</h1>
                            <h1 className="people-position">{item.position}</h1>
                            <p className="people-content-1">{item.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default People;