const Referencias = () => {
    const references = [
        {
            name: "Jesus David Zapata Betancourt",
            // position: "",
            phone: "312 8091832",
            // email: ""
            name2: "Jesus Zapata Muñoz",
            phone2: "318 6582410",
        }
    ];

    return (
        <section className="section">
        <h2>REFERENCIAS PERSONALES Y FAMILIARES</h2>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <h3>1. {ref.name}</h3>
              {/* <p>{ref.position}</p> */}
              {/* {ref.description && <p>{ref.description}</p>} */}
              <p>Teléfono: {ref.phone}</p>
              {/* {ref.email && <p>Email: {ref.email}</p>} */}
              <h3>2. {ref.name2}</h3>
              <p>Teléfono: {ref.phone2}</p>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Referencias;