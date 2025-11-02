'use client';

export default function Portfolio() {
  return (
    <main style={{ width: '100%', overflowX: 'hidden', margin: 0, padding: 0 }}>
      {/* SECCIÓN 1: HERO */}
      <section style={{
        minHeight: '100vh',
        background: '#05020e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(60px, 10vw, 120px)',
            fontWeight: '900',
            color: '#ffffff',
            marginBottom: '20px',
            letterSpacing: '-2px',
            lineHeight: '1'
          }}>
            PORTAFOLIO
          </h1>
          <p style={{
            color: '#ffffff',
            fontSize: 'clamp(10px, 3vw, 25px)',
            letterSpacing: '1em',
            fontWeight: '300'
          }}>
            CRISTIAN MERCADO
          </p>
        </div>
      </section>


{/* SECCIÓN 2: SOBRE MÍ */}
<section
  style={{
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    background: "#fff",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  }}
>
  {/* CINTA DE HABILIDADES */}
  <div
    style={{
      position: "relative",
      width: "100%",
      overflow: "hidden",
      padding: "10px 0",
      background: "#fff",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "25px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        padding: "20px 30px",
      }}
    >
      <h2
        style={{
          flexShrink: 0,
          fontSize: "28px",
          fontWeight: "700",
          color: "#000",
          whiteSpace: "nowrap",
        }}
      >
        Habilidades
      </h2>

      {[
        "Liderazgo",
        "Comunicación",
        "Resolución de problemas",
        "Adaptabilidad",
        "Pensamiento crítico",
        "Creatividad",
        "Colaboración",
        "Innovación",
        "Organización",
      ].map((skill, i) => (
        <div
          key={i}
          style={{
            flex: "0 0 auto",
            background: "#f5f5f5",
            borderRadius: "25px",
            padding: "10px 22px",
            fontSize: "15px",
            fontWeight: "500",
            color: "#000",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            whiteSpace: "nowrap",
          }}
        >
          {skill}
        </div>
      ))}
    </div>

    {/* Oculta la barra de scroll */}
    <style>
      {`
        div[style*="overflow-x: auto"]::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
  </div>

  {/* CONTENEDOR PRINCIPAL */}
  <div
    style={{
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      maxWidth: "100%",
      flexGrow: 1,
    }}
  >
    {/* IMAGEN */}
    <div
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <img
        src="/perfil.png"
        alt="Cristian Mercado"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          filter: "grayscale(100%)",
          objectFit: "contain",
          position: "absolute",
          bottom: "0",
          left: "55%",
          transform: "translateX(-50%)",
        }}
      />

      {/* Rectángulo blanco con íconos */}
      <div
        style={{
          position: "absolute",
          bottom: "35px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#fff",
          borderRadius: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          padding: "10px 30px",
          display: "flex",
          gap: "25px",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        {["/python.png", "/excel.png", "/word.png", "/grafico.png"].map(
          (icon, i) => (
            <img
              key={i}
              src={icon}
              alt=""
              style={{
                width: "35px",
                height: "35px",
                objectFit: "contain",
              }}
            />
          )
        )}
      </div>
    </div>

    {/* TEXTO */}
    <div style={{ color: "#000", textAlign: "center" }}>
      <div
        style={{
          background: "#05020e",
          color: "#fff",
          borderRadius: "30px 30px 30px 30px",
          padding: "5px 110px 5px 100px",
          display: "inline-block",
          marginBottom: "40px",
          maxWidth: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "700",
            margin: "0",
            whiteSpace: "nowrap",
          }}
        >
          Cristian Mercado
        </h2>
      </div>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          marginTop: "30px",
          textAlign: "left",
          marginRight: "10px",
          marginBottom: "30px",
          wordWrap: "break-word",
          overflowWrap: "break-word"


        }}
      >
        Soy una persona comprometida, creativa y con muchas ganas de aprender.
        Me gusta mucho el diseño y las matemáticas. Me destaco por trabajar bien
        en equipo, analizar problemas y buscar siempre soluciones creativas.
        Actualmente me encuentro en formación, con el objetivo de desarrollar
        mis habilidades y crecer profesionalmente.
      </p>

      <h3
        style={{
          fontSize: "26px",
          fontWeight: "700",
          marginBottom: "40px",
          textAlign: "left"
        }}
      >
        Educación
      </h3>

      <div style={{ display: "flex", alignItems: "left", gap: "1" }}>
        <div
          style={{
            background: "#000",
            color: "#fff",
            padding: "10px 6px",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontSize: "11px",
            fontWeight: "500",
            letterSpacing: "1px",
            minWidth: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          2024-2025
        </div>
        <div style={{ paddingLeft: "15px", paddingTop: "10px" }}>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "8px",
              textAlign: "left",

            }}
          >
            BACHILLERATO GENERAL
          </h4>
          <p
            style={{
              fontSize: "13px",
              fontStyle: "italic",
              margin: "0",
            }}
          >
            COMPLEJO EDUCATIVO SOLDADO OSCAR ANTONIO ORTIZ REYES
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* RESPONSIVE */}
  <style>
    {`
      @media (max-width: 900px) {
        div[style*="grid-template-columns"] {
          grid-template-columns: 1fr !important;
          gap: 40px !important;
          text-align: center !important;
        }

        img[alt="Cristian Mercado"] {
          position: relative !important;
          width: 80% !important;
          height: auto !important;
          transform: translateX(0) !important;
          left: 0 !important;
          margin: 0 auto !important;
        }

        div[style*="border-radius: 40px"] {
          position: relative !important;
          bottom: 0 !important;
          margin: 20px auto 0 auto !important;
          left: 0 !important;
          transform: none !important;
        }

        div[style*="Cristian Mercado"] {
          margin: 0 auto !important;
          display: block !important;
        }

        h2, p, h3, h4, p {
          text-align: center !important;
        }

        
      }
    `}
  </style>
</section>


      {/* SECCIÓN 3: PROYECTOS */}
      <section style={{
        minHeight: '100vh',
        background: '#05020e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        paddingLeft: "50px",
        padding: '60px 20px'
      }}>
        <div style={{ maxWidth: '900px', width: '100%', paddingLeft: "50px" }}>
          <h2 style={{
            fontSize: 'clamp(50px, 7vw, 128px)',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '40px',
            lineHeight: '1'
          }}>
            Proyectos
          </h2>
          <div style={{ color: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <span style={{ fontSize: 'clamp(36px, 6vw, 35px)', fontWeight: 'bold' }}>01</span>
              <span style={{ fontSize: 'clamp(28px, 5vw, 35px)', fontWeight: '300', letterSpacing: '0.1em' }}>
                DEXPERT
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: 'clamp(36px, 6vw, 35px)', fontWeight: 'bold' }}>02</span>
              <span style={{ fontSize: 'clamp(28px, 5vw, 35px)', fontWeight: '300', letterSpacing: '0.1em' }}>
                CHAMBI
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: DEXPERT */}
<section style={{
  minHeight: '100vh',
  background: '#fff',
  padding: '60px 20px',
  position: 'relative',
  overflow: 'hidden'
}}>
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0
  }} className="grid-2-cols">
    
    {/* Columna de la imagen con fondo - IZQUIERDA */}
    <div style={{ position: 'relative', height: '100%' }}>  {/* <-- QUITÉ className="order-2-mobile" */}
      {/* Imagen de fondo oscura - más a la izquierda */}
      <div style={{
        position: 'absolute',
        bottom: '-55%',
        top: '-20%',
        left: '-15%',
        right: '-5%',
        display: "block",
        zIndex: 0,
        overflow: 'hidden',
      }}>
        <img 
          src="/expo-tech-background.jpg"
          alt="Background" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center bottom',
          }}
        />
        
        {/* Textos dentro de la imagen de fondo */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '20px',
          zIndex: 3
        }}>
          <p style={{ 
            fontSize: 'clamp(15px, 2vw, 13px)',
            fontWeight: 'bold', 
            margin: 0,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            letterSpacing: '0.5px'
          }}>
            PROGRAMA EMPRESARIAL ¡SUPÉRATE!
          </p>
          <p style={{ 
            fontSize: 'clamp(14px, 2vw, 13px)',
            fontStyle: 'italic', 
            margin: '5px 0 0 0',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
          }}>
            Ganadores Expo Tech 2025
          </p>
        </div>
      </div>

      {/* Imagen principal de Dexpert */}
      <div style={{ 
        position: 'absolute',
        top: '100px',
        left: '30%',
        width: '85%',
        zIndex: 2 
      }}>
        <img 
          src="/dexpert.png" 
          alt="Dexpert Project" 
          style={{
            width: '100%',
            borderRadius: '20px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
          }}
        />
      </div>
    </div>

    {/* Descripción - DERECHA */}
<div style={{}}>
  <h2 style={{
    fontSize: 'clamp(50px, 8vw, 70px)',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#000',
    textAlign: 'center'  // <-- Solo esto para centrar "Dexpert"
  }}>
    Dexpert
  </h2>
  <p style={{
  fontSize: 'clamp(16px, 2.5vw, 20px)',
  lineHeight: '1.5',
  color: '#000',
  paddingLeft: '60px'  // <-- Agrega esto (ajusta el valor que necesites)
}}>
  Dexpert es una plataforma que conecta a jóvenes sin experiencia con pequeñas 
  empresas para trabajar en proyectos reales. Busca darles su primera experiencia 
  laboral, permitiéndoles aprender, aplicar sus conocimientos y obtener un certificado. 
  Es inclusiva, abierta a personas con discapacidad, y también ayuda a emprendedores 
  a hacer crecer sus negocios con apoyo joven.
</p>
</div>
  </div>
</section>

      {/* SECCIÓN 5: CHAMBI */}
      <section style={{
        minHeight: '100vh',
        background: 'black',
        padding: '60px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '60px',
          alignItems: 'center'
        }} className="grid-2-cols">
          {/* Descripción */}
          <div style={{}} className="order-2-mobile">
            <h2 style={{
              fontSize: 'clamp(50px, 8vw, 70px)',
              fontWeight: 'bold',
              marginBottom: '40px',
              color: '#000'
            }}>
              CHAMBI
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              lineHeight: '1.8',
              color: '#000'
            }}>
              CHAMBI es una plataforma que conecta a personas con calificadas para reparaciones 
              del hogar de forma rápida y segura. Usa localización para encontrar las personas 
              más cercanas y confiables. También ayuda a que los trabajadores tengan más 
              reconocimiento en sus comunidades.
            </p>
          </div>

          {/* Imagen del proyecto */}
          <div style={{ position: 'relative' }} className="order-1-mobile">
            <img 
              src="/chambi.jpg" 
              alt="Chambi Project" 
              style={{
                width: '100%',
                borderRadius: '20px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              color: 'white',
              textAlign: 'right'
            }}>
              <p style={{ fontSize: 'clamp(14px, 2.5vw, 20px)', fontWeight: 'bold', margin: 0 }}>
                PROGRAMA EMPRESARIAL ¡SUPÉRATE!
              </p>
              <p style={{ fontSize: 'clamp(12px, 2vw, 18px)', fontStyle: 'italic', margin: 0 }}>
                Expo de logros 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CERTIFICADOS */}
      <section style={{
        minHeight: '100vh',
        background: '#05020e',
        padding: '60px 20px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(50px, 8vw, 70px)',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '60px',
            textAlign: 'center'
          }}>
            Certificados
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px'
          }} className="grid-3-cols">
            {/* Certificado 1 */}
            <div style={{
              background: '#000',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
            }}>
              <img 
                src="/cert1.jpg" 
                alt="Microsoft Office Specialist" 
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <p style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  fontStyle: 'italic',
                  color: '#fff'
                }}>
                  Microsoft Excel (Microsoft 365 Apps)
                </p>
              </div>
            </div>

            {/* Certificado 2 */}
            <div style={{
              background: 'black',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
            }}>
              <img 
                src="/cert2.jpg" 
                alt="IT Specialist Python" 
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <p style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  fontStyle: 'italic',
                  color: '#fff'
                }}>
                  Information Techonology Specialist in Python
                </p>
              </div>
            </div>

            {/* Certificado 3 */}
            <div style={{
              background: 'black',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
            }}>
              <img 
                src="/cert3.jpg" 
                alt="TELUS Digital" 
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '25px' }}>
                <p style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  fontStyle: 'italic',
                  color: '#fff'
                }}>
                  TELUS Digital English Conversation Club
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: CONTACTO */}
      <section style={{
        minHeight: '100vh',
        background: '#0f0f1e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(50px, 10vw, 90px)',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '40px',
            lineHeight: '1.5'
          }}>
            Muchas gracias
          </h2>
          
          <p style={{
            color: '#ffffff',
            fontSize: 'clamp(16px, 3vw, 24px)',
            marginBottom: '60px',
            wordBreak: 'break-all'
          }}>
            cristianmercadoaz@gmail.com
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
            {/* Instagram */}
            <a href="https://instagram.com/cralmz17?igsh=eDA2dWZyOWNnMmE1" target="_blank" rel="noopener noreferrer" style={{ opacity: 1, transition: 'opacity 0.3s' }}>
              <svg style={{ width: 'clamp(50px, 8vw, 80px)', height: 'clamp(50px, 8vw, 80px)' }} viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ opacity: 1, transition: 'opacity 0.3s' }}>
              <svg style={{ width: 'clamp(50px, 8vw, 80px)', height: 'clamp(50px, 8vw, 80px)' }} viewBox="0 0 24 24" fill="#ffffff">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 1024px) {
          .grid-2-cols {
            grid-template-columns: 1fr 1fr !important;
          }
          .order-1-mobile {
            order: 1;
          }
          .order-2-mobile {
            order: 2;
          }
          .grid-3-cols {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .grid-3-cols {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 1023px) {
          .order-1-mobile {
            order: 1;
          }
          .order-2-mobile {
            order: 2;
          }
        }
      `}</style>
    </main>
  );
}