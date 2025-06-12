const Educacion = () => {
    const formacionAcademica = [
        {
            year: "2017",
            title: "Basica Primaria",
            institucion: "Escuela Vereda El Águila"
        },
        {
            year: "2023",
            title: "Bachiller Técnico en Sistemas y Énfasis en Contabilidad",
            institucion: "Colegio Técnico Carlos J Huelgos"
        }
    ];

    return (
        <section className="section">
            <h2>Educación</h2>
            <div className="education-list">
                {formacionAcademica.map((edu, index) => (
                <div key={index} className="education-item">
                <div className="year">{edu.year}</div>
                <div className="education-details">
                    <h3>{edu.title}</h3>
                    <p>{edu.institucion}</p>
                </div>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Educacion;