const Student = (props) =>{
    return (
        <>
    <h2>Student compoenet</h2>
    <p>Name : {props.name}</p>
    <p>Class : {props.class}</p>
    {props.children}
        </>
    )
}

const Result = (props) => {
return <>

<h1>
    Result compoenent called
</h1>


</>
}
export{Result};
export default Student;