import ProjectCard from "../others/ProjectCard";
import '../../Style/Project.css'
import Foto1 from '../../img/photo_2025-01-18_00-52-49.jpg'
import Foto2 from '../../img/20240710_184115.jpg'
import Foto3 from '../../img/20240710_184253.jpg'
import Foto4 from '../../img/photo_2025-01-18_00-53-09.jpg'

export default function Project() {
    return (
        <section className="Project">
            <div className="Container">
                <h1 className="pro_title">Completed projects</h1>
                <div className="project_wrapper">
                    <ProjectCard title="Project number 14. Puncture under the railway" img={Foto1} date="14/12/2021" Length="100m" />
                    <ProjectCard title="Project number 15. Puncture under the railway" img={Foto2} date="14/12/2021" Length="99m" />
                    <ProjectCard title="Project number 16. Puncture under the railway" img={Foto3} date="14/12/2021" Length="9999m" />
                    <ProjectCard title="Project number 17. Puncture under the railway" img={Foto4} date="14/12/2021" Length="1009m" />
                </div>
            </div>
        </section>
    )
}