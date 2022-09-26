import styled from "styled-components";
import WomanPC from "../img/WomanPC.png";

export const Column = styled.div`
  display: flex;

  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const NewSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  display: flex;
  flex-direction: row;
  height: 93vh;
  width: auto;
  @media only screen and (max-width: 40em) {
    display: none;
  }
`;

export const ImagePhone = styled.img`
  display: none;
  @media only screen and (max-width: 40em) {
    display: block;
    height: 70vh;
    width: auto;
  }
`;

export const PaddingDiv = styled.div`
  padding: 40px 30px;
  @media only screen and (max-width: 40em) {
    padding: 0px;
  }
`;

export const PSTyle = styled.div`
  align-items: center;
`;

export const MainContentDiv = styled.div`
  padding: 0px 30px;
`;

const AboutPage = () => {
  return (
    <>
      <PaddingDiv>
        <Container>
          <NewSection>
            <Column>
              <Image src={WomanPC} alt="Woman on a PC" />
              <Container>
                <MainContentDiv>
                  <h1>Kodehode</h1>
                  <h2>
                    En praktisk og ferdighetsbasert utdanning i IT-utvikling
                  </h2>
                  <ImagePhone src={WomanPC} alt="Woman on a PC" />
                  <PSTyle>
                    <p>
                      Få erfaringen du trenger for å bli attraktiv på
                      arbeidsmarkedet som utvikler!
                    </p>
                    <p>
                      Sammen med oppstartsmiljøet tilknyttet Bergen.Works
                      coworkingspace har JobLoop de siste årene utviklet en
                      alternativ plattform for kvalifisering og rekruttering av
                      junior utviklere og innholdsprodusenter. Hensikten er å
                      dekke det voksende kompetansegapet på IT-markedet og
                      samtidig inkludere flere unge som har falt utenfor arbeid
                      og utdanning. Samarbeidet ble i senere tid døp “Kodehode”
                      og videreutviklet med Arbeids- og Velferdsetaten NAV.
                    </p>
                    <p>
                      I dag leveres versjoner av Kodehode som amo-tiltak i
                      Vestland og Rogaland sammen med vår gode samarbeidspartner
                      Podium. Tiltaket kombinerer teoretisk og praktisk
                      opplæring med arbeidstrening innen digitale fagområder som
                      IT, design, programmering og utvikling.Formålet er å gi
                      arbeidssøkere med stor interesse for data, programmering,
                      utvikling av spill, nettsider og lignende dagsaktuell
                      erfaring og kunnskap som kvalifiserer til arbeid.
                    </p>
                    <p>
                      Tiltakene har ulik varighet og faglig sammensetning. Vi
                      benytter rammeverk som er etterspurt lokalt fra store og
                      små virksomheter. Deltakerne vil uavhengig av lokasjon
                      innom flere ulike fagområder og derfra opparbeide seg et
                      godt grunnlag for senere fordypning også i nye språk og
                      rammeverk som benyttes på den aktuelle arbeidsplassen.
                      Felles for tiltakene er også at arbeidslivets spilleregler
                      ligger til grunne og at deltakere på kurs er i aktiv lære
                      tilsvarende fulltids arbeidsuker. Undervisningen
                      kombinerer tradisjonell undervisning med digitale
                      læringsverktøy og prosjektarbeid og tilpasses også enkelte
                      deltakers nivå og utvikling.
                    </p>
                    <p>
                      Opplæringsløpet i Kodehode består av to deler: del 1 er en
                      “teori-fase” og del 2 er en “praksis-fase”. Gjennom del I
                      av tiltaket vil deltakerne tilegne seg den faglige og
                      sosiale kompetansen de trenger for å kvalifisere seg til
                      praksisarbeid innen front-end, systemdrift, back-end,
                      eller innholdsproduksjon. Underveis i opplæringsløpet
                      koples deltakerne med relevante arbeidsgivere. I del II av
                      tiltaket vil deltakerne praktisere sine ferdigheter i
                      praksis hos relevante arbeidsgivere. Våre veiledere
                      fortsetter å bistå med faglig støtte og spisset
                      kompetanseheving gjennom hele tiltaksperioden.
                    </p>
                    <p>
                      Kodehode kvalifiserer deltakere til å gå over i
                      IT-relaterte stillinger som markedet etterspør samtidig
                      som det bidrar til at deltakerne dokumenterer sine
                      ferdigheter og etablerer relasjoner til fagmiljø og
                      bedrifter.{" "}
                    </p>
                  </PSTyle>
                </MainContentDiv>
              </Container>
            </Column>
          </NewSection>
        </Container>
      </PaddingDiv>
    </>
  );
};

export default AboutPage;
