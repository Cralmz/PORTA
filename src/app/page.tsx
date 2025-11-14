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
        id="sobre-mi"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
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
            flexShrink: 0,
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
            padding: "20px 0",
            maxHeight: "calc(100vh - 100px)",
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
                maxWidth: "1000px",
                height: "auto",
                filter: "grayscale(100%)",
                objectFit: "contain",
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "25px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#fff",
                borderRadius: "40px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                padding: "12px 30px",
                display: "flex",
                gap: "20px",
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
                      width: "30px",
                      height: "30px",
                      objectFit: "contain",
                      flexShrink: 0,
                    }}
                  />
                )
              )}
            </div>
          </div>

          {/* TEXTO */}
          <div style={{ color: "#000", textAlign: "center", maxHeight: "100%", overflowY: "auto" }}>
            <div
              style={{
                background: "#05020e",
                color: "#fff",
                borderRadius: "30px 30px 30px 30px",
                padding: "5px 80px 5px 80px",
                display: "inline-block",
                marginBottom: "30px",
                maxWidth: "100%",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(28px, 3vw, 42px)",
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
                fontSize: "clamp(14px, 1.5vw, 18px)",
                lineHeight: "1.6",
                marginTop: "20px",
                textAlign: "left",
                marginRight: "10px",
                marginBottom: "20px",
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
                fontSize: "clamp(20px, 2vw, 26px)",
                fontWeight: "700",
                marginBottom: "25px",
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
                    fontSize: "clamp(14px, 1.2vw, 16px)",
                    fontWeight: "700",
                    marginBottom: "8px",
                    textAlign: "left",
                  }}
                >
                  BACHILLERATO GENERAL
                </h4>
                <p
                  style={{
                    fontSize: "clamp(11px, 1vw, 13px)",
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

        <style>
          {`
            @media (max-width: 900px) {
              #sobre-mi {
                height: auto !important;
                min-height: 100vh !important;
              }

              #sobre-mi > div:last-of-type {
                grid-template-columns: 1fr !important;
                gap: 30px !important;
                padding: 20px !important;
                max-height: none !important;
              }

              #sobre-mi > div:first-of-type > div {
                padding: 15px 20px !important;
              }

              #sobre-mi h2:first-of-type {
                font-size: 22px !important;
              }

              #sobre-mi > div:first-of-type div[style*="border-radius: 25px"] {
                font-size: 13px !important;
                padding: 8px 16px !important;
              }

              #sobre-mi > div:last-of-type > div:first-child {
                order: 1;
                height: auto !important;
                max-height: none !important;
                padding: 0 20px;
                display: flex !important;
                flex-direction: column !important;
                justify-content: center !important;
                align-items: center !important;
              }

              #sobre-mi img[alt="Cristian Mercado"] {
                position: relative !important;
                width: 100% !important;
                max-width: 350px !important;
                left: 0 !important;
                transform: none !important;
                bottom: 0 !important;
                margin: 0 auto !important;
                display: block !important;
              }

              #sobre-mi > div:last-of-type > div:first-child > div {
                position: relative !important;
                bottom: auto !important;
                left: auto !important;
                transform: none !important;
                margin: -40px auto 0 auto !important;
                padding: 10px 20px !important;
                gap: 12px !important;
                width: auto !important;
                max-width: 85% !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
              }

              #sobre-mi > div:last-of-type > div:first-child > div img {
                width: 26px !important;
                height: 26px !important;
                flex-shrink: 0 !important;
              }

              #sobre-mi > div:last-of-type > div:last-child {
                order: 2;
                padding: 0 20px;
                max-height: none !important;
                overflow-y: visible !important;
              }

              #sobre-mi > div:last-of-type > div:last-child > div:first-child {
                padding: 5px 40px !important;
                margin-bottom: 25px !important;
              }

              #sobre-mi > div:last-of-type > div:last-child h2 {
                font-size: 28px !important;
              }

              #sobre-mi > div:last-of-type > div:last-child > p {
                text-align: center !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                font-size: 16px !important;
              }

              #sobre-mi > div:last-of-type > div:last-child > h3 {
                text-align: center !important;
                font-size: 22px !important;
                margin-bottom: 20px !important;
              }

              #sobre-mi > div:last-of-type > div:last-child > div:last-child {
                flex-direction: column !important;
                align-items: center !important;
              }

              #sobre-mi > div:last-of-type > div:last-child > div:last-child > div:first-child {
                writing-mode: horizontal-tb !important;
                text-orientation: mixed !important;
                padding: 6px 20px !important;
                min-width: auto !important;
                width: fit-content !important;
              }

              #sobre-mi > div:last-of-type > div:last-child > div:last-child > div:last-child {
                padding-left: 0 !important;
                padding-top: 15px !important;
                text-align: center !important;
              }

              #sobre-mi > div:last-of-type > div:last-child > div:last-child h4 {
                text-align: center !important;
                font-size: 15px !important;
              }

              #sobre-mi > div:last-of-type > div:last-child > div:last-child p {
                text-align: center !important;
                font-size: 12px !important;
              }
            }
          `}
        </style>
      </section>

      {/* SECCIÓN 3: PROYECTOS */}
      <section style={{
        height: '100vh',
        background: '#05020e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        paddingLeft: "50px",
        padding: '60px 20px',
        overflow: 'hidden'
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
      <section id="dexpert-section" style={{
        minHeight: '100vh',
        background: '#fff',
        padding: '60px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <style>{`
          @media (min-width: 769px) {
            #dexpert-section {
              height: 100vh !important;
              min-height: 100vh !important;
              max-height: 100vh !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              padding: 0 20px !important;
              box-sizing: border-box !important;
              overflow: hidden !important;
            }
            
            .grid-dexpert {
              max-height: 100% !important;
              width: 100% !important;
              overflow: hidden !important;
            }
            
            .dexpert-image-container {
              height: 85vh !important;
              max-height: 85vh !important;
              overflow: hidden !important;
              paddingLeft: 30px !important;
            }
            
            .dexpert-background {
              height: 85vh !important;
              max-height: 85vh !important;
            }
            
            .dexpert-main-image {
              top: 50% !important;
              left: 50% !important;
              transform: translate(-50%, -50%) !important;
              width: 60% !important;
              max-width: 450px !important;
            }
            
            .dexpert-title {
              font-size: clamp(40px, 5vw, 70px) !important;
              margin-bottom: clamp(20px, 2.5vh, 35px) !important;
            }
            
            .dexpert-description p {
              font-size: clamp(14px, 1.3vw, 20px) !important;
              line-height: 1.65 !important;
              padding-left: 0 !important;
            }
          }
          
          @media (max-width: 768px) {
            .grid-dexpert {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .dexpert-title {
              text-align: center !important;
            }
            .dexpert-description {
              order: 2;
              text-align: center;
              padding: 0 20px;
            }
            .dexpert-description p {
              padding-left: 0 !important;
            }
            .dexpert-image-container {
              order: 1;
              height: 500px !important;
              margin: 0 auto;
              max-width: 700px;
            }
            .dexpert-background {
              position: relative !important;
              bottom: auto !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              width: 100% !important;
              height: 100% !important;
              margin: 0 auto;
            }
            .dexpert-main-image {
              top: 50% !important;
              left: 50% !important;
              transform: translate(-50%, -50%) !important;
              width: 90% !important;
              max-width: 500px !important;
            }
            .dexpert-footer-text {
              bottom: 20px !important;
              left: 20px !important;
            }
          }
        `}</style>

        <div className="grid-dexpert" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 0
        }}>
          
          <div className="dexpert-image-container" style={{ position: 'relative', height: '100%' }}>
            <div className="dexpert-background" style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
              display: "block",
              zIndex: 0,
              overflow: 'hidden',
              borderRadius: '20px'
            }}>
              <img 
                src="/expo-tech-background.jpg"
                alt="Background" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
              
              <div className="dexpert-footer-text" style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                zIndex: 3
              }}>
                <p style={{ 
                  fontSize: '14px',
                  fontWeight: 'bold', 
                  margin: 0,
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                  letterSpacing: '0.5px'
                }}>
                  PROGRAMA EMPRESARIAL ¡SUPÉRATE!
                </p>
                <p style={{ 
                  fontSize: '13px',
                  fontStyle: 'italic', 
                  margin: '5px 0 0 0',
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                }}>
                  Ganadores Expo Tech 2025
                </p>
              </div>
            </div>

            <div className="dexpert-main-image" style={{ 
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

          <div className="dexpert-description">
            <h2 className="dexpert-title" style={{
              fontSize: 'clamp(50px, 8vw, 70px)',
              fontWeight: 'bold',
              marginBottom: '40px',
              color: '#000',
              textAlign: 'center'
            }}>
              Dexpert
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              lineHeight: '1.5',
              color: '#000',
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
<section id="chambi-section" style={{
  minHeight: '100vh',
  background: '#fff',
  padding: '60px 20px',
  position: 'relative',
  overflow: 'hidden'
}}>
  <style>{`
    @media (min-width: 769px) {
      #chambi-section {
        height: 100vh !important;
        min-height: 100vh !important;
        max-height: 100vh !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0 20px !important;
        box-sizing: border-box !important;
        overflow: hidden !important;
      }
      
      .grid-chambi {
        max-height: 100% !important;
        width: 100% !important;
        overflow: hidden !important;
      }
      
      .chambi-image-container {
        height: 85vh !important;
        max-height: 85vh !important;
        overflow: hidden !important;
      }
      
      .chambi-background {
        height: 85vh !important;
        max-height: 85vh !important;
      }
      
      .chambi-login-image {
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        width: 60% !important;
        max-width: 450px !important;
      }
      
      .chambi-title {
        font-size: clamp(40px, 5vw, 70px) !important;
        margin-bottom: clamp(20px, 2.5vh, 35px) !important;
      }
      
      .chambi-description p {
        font-size: clamp(14px, 1.3vw, 20px) !important;
        line-height: 1.65 !important;
      }
      
      .chambi-footer-text {
        bottom: 20px !important;
      }
      
      .chambi-footer-text p:first-child {
        font-size: clamp(11px, 1vw, 14px) !important;
      }
      
      .chambi-footer-text p:last-child {
        font-size: clamp(10px, 0.9vw, 13px) !important;
      }
    }
    
    @media (max-width: 768px) {
      .grid-chambi {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      .chambi-title {
        text-align: center !important;
        padding-right: 0 !important;
        order: 2;
      }
      .chambi-description {
        order: 2;
        text-align: center;
        padding: 0 20px;
      }
      .chambi-image-container {
        order: 1;
        height: 500px !important;
        margin: 0 auto;
        max-width: 700px;
      }
      .chambi-background {
        position: relative !important;
        top: 0 !important;
        right: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        margin: 0 auto;
      }
      .chambi-login-image {
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        width: 90% !important;
        max-width: 500px !important;
      }
      .chambi-footer-text {
        bottom: 20px !important;
        right: 20px !important;
      }
    }
  `}</style>

  <div className="grid-chambi" style={{
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0
  }}>
    
    <div className="chambi-description">
      <h2 className="chambi-title" style={{
        fontSize: 'clamp(50px, 8vw, 70px)',
        fontWeight: 'bold',
        marginBottom: '40px',
        color: '#000',
        textAlign: 'center'
      }}>
        CHAMBI
      </h2>
      <p style={{
        fontSize: 'clamp(16px, 2vw, 20px)',
        lineHeight: '1.8',
        color: '#000'
      }}>
        CHAMBI es una plataforma que conecta a personas con
        calificadas para reparaciones del hogar de forma rápida y segura.
        Usa localización para encontrar las personas más cercanas y confiables.
        También ayuda a que los trabajadores tengan más reconocimiento en sus comunidades.
      </p>
    </div>

    <div className="chambi-image-container" style={{ 
      position: 'relative', 
      height: '100%',
    }}>
      <div className="chambi-background" style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        display: "block",
        zIndex: 0,
        overflow: 'hidden',
        borderRadius: '20px'
      }}>
        <img 
          src="/CHAMBI.jpg"
          alt="Background" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        
        <div className="chambi-footer-text" style={{
          position: 'absolute',
          bottom: '30px',
          right: '30px',
          zIndex: 3
        }}>
          <p style={{ 
            fontSize: '14px',
            fontWeight: 'bold', 
            margin: 0,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            letterSpacing: '0.5px',
            textAlign: 'right'
          }}>
            PROGRAMA EMPRESARIAL ¡SUPÉRATE!
          </p>
          <p style={{ 
            fontSize: '13px',
            fontStyle: 'italic', 
            margin: '5px 0 0 0',
            textAlign: 'right',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
          }}>
            Expo de logros 2024
          </p>
        </div>
      </div>

      <div className="chambi-login-image" style={{ 
        position: 'absolute',
        top: '100px',
        right: '30%',
        width: '85%',
        zIndex: 2 
      }}>
        <img 
          src="/chambilogin.png" 
          alt="Chambi Login" 
          style={{
            width: '100%',
            borderRadius: '20px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
          }}
        />
      </div>
    </div>
  </div>
</section>

      {/* SECCIÓN 6: CERTIFICADOS */}
<section style={{
  minHeight: '100vh',
  background: '#fff',
  padding: '60px 20px'
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '60px'
    }}>
      <div style={{
        background: '#000',
        color: '#fff',
        borderRadius: '50px',
        padding: '5px 50px',
        display: 'inline-block'
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 3vw, 42px)',
          fontWeight: 'bold',
          margin: '0',
          whiteSpace: 'nowrap'
        }}>
          Certificados
        </h2>
      </div>
    </div>

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

  {/* FOOTER */}
<footer style={{
  background: 'linear-gradient(180deg, #05020e 0%, #05020e 100%)',
  padding: '80px 20px 40px 20px',
  position: 'relative',
  overflow: 'hidden'
}}>
  <style>{`
    @media (max-width: 768px) {
      .footer-content {
        text-align: center !important;
      }
    }
  `}</style>

  {/* Decoración de ondas en la parte superior */}
  <div style={{
    position: 'absolute',
    top: '-100px',
    left: 0,
    right: 0,
    height: '150px',
    background: 'linear-gradient(180deg, rgba(138, 43, 226, 0.3) 0%, transparent 100%)',
    borderRadius: '50%',
    transform: 'scaleX(3)'
  }}></div>

  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
  }}>
    {/* Contenido centrado */}
    <div className="footer-content" style={{
      textAlign: 'center',
      marginBottom: '60px'
    }}>
      {/* Redes Sociales */}
      <div style={{
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '30px'
      }}>
        {/* GitHub */}
        <a 
          href="https://github.com/tuusuario" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: '#b8b8d1',
            transition: 'color 0.3s',
            fontSize: '24px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ff1493'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#b8b8d1'}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com/cralmz17?igsh=eDA2dWZyOWNnMmE1" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: '#b8b8d1',
            transition: 'color 0.3s',
            fontSize: '24px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ff1493'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#b8b8d1'}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/in/tuusuario" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: '#b8b8d1',
            transition: 'color 0.3s',
            fontSize: '24px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ff1493'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#b8b8d1'}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>

      {/* Email */}
      <p style={{
        fontSize: '18px',
        color: '#b8b8d1',
        marginBottom: '0',
        wordBreak: 'break-word'
      }}>
        cristianmercadoaz@gmail.com
      </p>
    </div>

    {/* Línea divisoria */}
    <div style={{
      height: '1px',
      background: 'linear-gradient(90deg, transparent, #fff, transparent)',
      marginBottom: '30px'
    }}></div>

    {/* Copyright */}
    <div style={{
      textAlign: 'center'
    }}>
      <p style={{
        fontSize: '14px',
        color: '#7a7a9e',
        margin: 0
      }}>
        © Copyright 2025 | Cristian Mercado
      </p>
    </div>
  </div>
</footer>

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