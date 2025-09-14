const Referencias = () => {
    const references = [
        {
            name: "Jesus David Zapata Betancourt",
            // position: "",
            phone: "312 8091832",
            // email: ""
        }
    ];

    return (
        <section className="section">
        <h2>REFERENCIAS PROFESIONALES</h2>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <h3>{ref.name}</h3>
              {/* <p>{ref.position}</p> */}
              {/* {ref.description && <p>{ref.description}</p>} */}
              <p>Teléfono: {ref.phone}</p>
              {/* {ref.email && <p>Email: {ref.email}</p>} */}
            </div>
          ))}
        </div>
      </section>
    );
};

export default Referencias;