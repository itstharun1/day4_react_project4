const ProjectItem=(props)=>{
    const {each}=props
    const {imageURL,title}=each
    return(
        <div>
            <img className="img1" src={imageURL}  alt="img" />
            <h1>{title}</h1>
        </div>
    )
}

export default ProjectItem;