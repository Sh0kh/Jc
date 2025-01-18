

export default function ProjectCard({img,title,Length,date}) {
    return(
        <div className="project_card rounded-[5px]">
            <img className="w-[150px] object-cover rounded-[10px] h-[100px]" src={img} alt="" />
            <div className="project_content">
                <h1>{title}</h1>
                <ul>
                    <li>Length:</li>
                    <li>{Length}</li>
                </ul>
                <ul>
                    <li>Project date:</li>
                    <li>{date}</li>
                </ul>
            </div>
        </div>
    )
}