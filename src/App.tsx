import { useContext, useEffect, useState } from "react";
import { Article } from "./components/article/article";
import { SectionStack } from "./components/sectionstack/section.stack";
import { Container } from "./components/container/container";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { ModalCardEdit } from "./components/modal/modalcardedit";
import { ContextApi } from "./contextApi/contextApi";


interface IDataBase {
  id: string,
  link_imagem: string,
  link_video: string,
  titulo: string,
  categorie: string,
  description: string
}

export function App() {
  const { modal } = useContext(ContextApi);
  const [dataFront, setDataFront] = useState<IDataBase[]>([]);
  const [dataBack, setDataBack] = useState<IDataBase[]>([]);
  const [dataMobile, setDataMobile] = useState<IDataBase[]>([]);



  useEffect(() => {
    fetch('https://api-aluraflix.onrender.com/frontend')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setDataFront(data);
      });

    fetch('https://api-aluraflix.onrender.com/backend')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setDataBack(data);
      });

      fetch('https://api-aluraflix.onrender.com/mobile')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setDataMobile(data);
      });

  }, []);
  
  
  return (
    <>
      <div className="w-full min-h-screen bg-darkgray">
        <Header callPrps="/"/>
        <Article />
        <Container>
          <SectionStack 
            imageData={dataFront} 
            title={"Front End"} 
            bgButton={"bg-frontend"} 
          />
          <SectionStack 
            imageData={dataBack} 
            title={"Back End"} 
            bgButton={"bg-backend"} 
          />
          <SectionStack 
            imageData={dataMobile} 
            title={"Mobile"} 
            bgButton={"bg-inovgestao"} 
          />
        </Container>
        <Footer />

        {modal && <ModalCardEdit />}
      </div>
    </>
  )
}


