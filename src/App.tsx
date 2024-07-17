import { useContext, useEffect, useLayoutEffect, useState } from "react";
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
  const { modal, dataVideos } = useContext(ContextApi);
  const [dataFront, setDataFront] = useState<IDataBase[]>([]);
  const [dataBack, setDataBack] = useState<IDataBase[]>([]);
  const [dataMobile, setDataMobile] = useState<IDataBase[]>([]);


  useLayoutEffect(() => {
    setDataFront(dataVideos.frontend);
    setDataBack(dataVideos.backend);
    setDataMobile(dataVideos.mobile);
  }, [dataVideos]);
  

  return (
    <>
      <div className="w-full min-h-screen bg-darkgray">
        <Header callPrps="/"/>
        <Article />
        <Container>
          <SectionStack 
            dataBase={dataFront} 
            title={"Front End"} 
            bgButton={"bg-frontend"} 
          />
          <SectionStack 
            dataBase={dataBack} 
            title={"Back End"} 
            bgButton={"bg-backend"} 
          />
          <SectionStack 
            dataBase={dataMobile} 
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


