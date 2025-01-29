import { 
  Container, 
  Main, 
  Section, 
  ServiceOption, 
  Title, 
  Description, 
  Button, 
  ServicesContainer, 
  ServiceItem, 
  Image, 
  ButtonContainer, 
  NavigationButton 
} from "./Index.styles";
import { Link } from 'react-router-dom';
import Header from '../../Header/Header.jsx';
import Footer from '../../Footer/Footer.jsx';

const Index = () => {
  return (
      <Container>
          <Header />
          <Main>
              <Section>
                  <ServiceOption>
                      <Title>Cliente</Title>
                      <Description>Precisa de um serviço? Faça seu pedido agora mesmo.</Description>
                      <Link to="/cliente">
                          <Button>Pedir Serviço</Button>
                      </Link>
                  </ServiceOption>
              </Section>

              <Title>Serviços mais procurados</Title>
              <ServicesContainer>
                  <ServiceItem className="active">
                      <Image src="src/components/images/encanador.jpg" alt="Encanador" />
                  </ServiceItem>
                  <ServiceItem className="next">
                      <Image src="src/components/images/faxineira.jpg" alt="Faxineira" />
                  </ServiceItem>
                  <ServiceItem>
                      <Image src="src/components/images/jardineiro.jpg" alt="Jardineiro" />
                  </ServiceItem>
                  <ServiceItem>
                      <Image src="src/components/images/pedreiro.jpg" alt="Pedreiro" />
                  </ServiceItem>
                  <ServiceItem className="prev">
                      <Image src="src/components/images/pintor.jpg" alt="Pintor" />
                  </ServiceItem>

                  <ButtonContainer>
                      <NavigationButton>
                          <i className="fas fa-angle-left" />
                      </NavigationButton>
                      <NavigationButton>
                          <i className="fas fa-angle-right" />
                      </NavigationButton>
                  </ButtonContainer>
              </ServicesContainer>
          </Main>
          <Footer />
      </Container>
  );
};

export default Index;