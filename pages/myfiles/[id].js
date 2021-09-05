export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(file => {
        return {
            params: {id: file.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {file: data}
    }
}

const Details = ({file}) => {
    return ( 
        <div className="detail">
            <h1>{file.name}</h1>
            <p>{file.email}</p>
            <p>{file.website}</p>
            <p>{file.address.city}</p>
            <p>{file.company.name}</p>
        </div>
     );
}
 
export default Details;