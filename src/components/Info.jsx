const Info = ({data, error}) => {

    if (error === true)
        return ( <div><h1> Estos no son los droides que está buscando </h1>
        <img src="https://cde.laprensa.e3.pe/ima/0/0/2/2/8/228908.jpg" alt="obi_one_image" />
        </div>
        )

    return (
        <div className="container-fluid"> 
            <h1>{data?.name}</h1>
            <h1>{data?.title}</h1>

            <p>{data?.gender}</p>
            <p>{data?.hair_color}</p>
            <p>{data?.eye_color}</p>
            <p>{data?.skin_color}</p>

            <p>{data?.population}</p>
            <p>{data?.climate}</p>
            <p>{data?.terrain}</p>

            <p>{data?.model}</p>
            <p>{data?.manufacturer}</p>
            <p>{data?.crew}</p>

            <p>{data?.episode_id}</p>
            <p>{data?.director}</p>
            <p>{data?.release_date}</p>

        </div>
    )
}

export default Info;