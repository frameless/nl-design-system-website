import Layout from '@theme/Layout';
import {
  UtrechtFormFieldDescription,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtPageContent,
  UtrechtParagraph,
  UtrechtFormFieldTextarea,
  UtrechtFormFieldTextbox,
  UtrechtButton,
} from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React from 'react';

const WmebvPage = () => {
  return (
    <Layout>
      <UtrechtPageContent className={clsx('voorbeeld-theme')}>
        <main>
          <UtrechtHeading1>Melding openbare ruimte</UtrechtHeading1>
          <UtrechtParagraph lead>Vul alle velden in. als een veld optioneel is, staat dit erbij</UtrechtParagraph>
          <UtrechtHeading2>Wat wilt u melden?</UtrechtHeading2>
          <UtrechtParagraph>Kies een categorie die bij uw melding past</UtrechtParagraph>
          <UtrechtFormFieldTextbox></UtrechtFormFieldTextbox>
          <UtrechtFormFieldTextbox></UtrechtFormFieldTextbox>
          <UtrechtFormFieldDescription>
            Beschrijf hier wat er aan de hand is en eventueel wat er aan gedaan kan worden.
          </UtrechtFormFieldDescription>
          <UtrechtFormFieldTextarea></UtrechtFormFieldTextarea>
          <UtrechtButton appearance="secondary-action-button">Bestand kiezen</UtrechtButton>
          <UtrechtParagraph>(optioneel)</UtrechtParagraph>
          <UtrechtHeading2>Op welke locatie heeft de melding betrekking? </UtrechtHeading2>
          <UtrechtParagraph></UtrechtParagraph>
          <UtrechtFormFieldTextbox></UtrechtFormFieldTextbox>
          <UtrechtFormFieldTextbox></UtrechtFormFieldTextbox>
          <UtrechtFormFieldTextarea></UtrechtFormFieldTextarea>
          <UtrechtHeading2>Hoe kunnen we u bereiken voor meer informatie?</UtrechtHeading2>
          <UtrechtFormFieldDescription>
            Als u iets anoniem meld kunnen we u niet informeren over het verloop van de afhandeling voor deze melding.
          </UtrechtFormFieldDescription>
          <UtrechtFormFieldTextbox></UtrechtFormFieldTextbox>
          <UtrechtFormFieldTextbox></UtrechtFormFieldTextbox>
          <UtrechtFormFieldTextbox></UtrechtFormFieldTextbox>
          <UtrechtButton appearance="primary-action-button">Versturen</UtrechtButton>
        </main>
      </UtrechtPageContent>
    </Layout>
  );
};

export default WmebvPage;
