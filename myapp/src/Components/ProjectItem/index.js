const ProjectItem=(props)=>{
    const {each}=props
    const {category}=each
    return(
        <div>
            <h1>{category}</h1>
        </div>
    )
}

export default ProjectItem;