const Habilidades = () => {
    const habilidad = [
        "Trabajo en equipo",
        "Capacidad de escucha",
        "Habilidad de análisis",
        "Toma de decisiones", 
        "Capacidad de aprendizaje",
    ];

    return (
        <section className="section">
            <h2>Habilidades</h2>
            <ul className="skills-list">
                {habilidad.map((habilidad, index) => (
                    <li key={index}>{habilidad}</li>
                ))}
            </ul>
        </section>
    );
};

export default Habilidades;