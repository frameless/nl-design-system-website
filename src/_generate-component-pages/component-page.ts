import { COMPONENT_STATES, COMPONENT_TYPES, ComponentImplementation } from '@nl-design-system/component-index';

export const getStateDescription = ({ state }) => {
  let description = '';

  switch (state) {
    case COMPONENT_STATES.TODO:
      description =
        'Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.';
      break;
    case COMPONENT_STATES.COMMUNITY:
      description =
        'Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.';
      break;
    case COMPONENT_STATES.NL_STABLE:
      description =
        'Het component is een kandidaat voor onze "Hall of fame". Heb je hem gebruikt en ben je enthousiast? Hebben jullie gebruikersonderzoek gedaan en goede feedback? Laat het ons dan weten!';
      break;
    default:
      description =
        'Dit component is onderdeel van de NL Design System Hall of fame en wordt al door anderen succesvol in productie ingezet';
      break;
  }

  return `Dit component heeft de "${state}" status: ${description}

`;
};

export const componentPage = ({ id, name, state, story, customDoc }) => {
  return `---
title: ${name}
hide_title: true
hide_table_of_contents: false
sidebar_label: ${name}
pagination_label: ${name}
description: UX richtlijnen voor ${name} component
slug: /${id}
tags:
  - ${state}
---

<!-- @license CC0-1.0 -->
<!-- File is automatically generated based on @nl-design-system/component-index and custom documentation files starting with __<component-id>  -->
${
  story
    ? `import { Story } from "../../../src/components/Story";
`
    : ''
}${
    customDoc
      ? `import { Markdown } from "../../../src/components/Markdown";
import CustomDoc from "${customDoc}";
`
      : ''
  }
# ${name}

${getStateDescription({ state })}${
    story
      ? `## Voorbeeld

<Story label="${story.label}" href="${story.href}"/>

`
      : ''
  }${
    customDoc
      ? `## UX en toegankelijkheid

<Markdown omitH1>
  <CustomDoc />
</Markdown>

`
      : ''
  }`;
};

export const getImplementationsSection = () => `## Implementaties
`;

export const getImplementationTitle = ({ type }) => `### ${type}
`;

export const implementationDetails = ({
  name,
  organisation,
  implementation,
  story,
  type,
}: ComponentImplementation & { name: string }) => {
  if (type !== COMPONENT_TYPES.FIGMA) {
    return `#### ${organisation}

- Implementatie: [${name} ${type} implementatie van ${organisation}](${implementation})
- Storybook: ${story ? `[${name} ${type} storybook van ${organisation}](${story})` : '(nog) geen story beschikbaar'}

`;
  } else {
    return `#### ${organisation}

- Implementatie: [${name} ${type} implementatie van ${organisation}](${implementation})

`;
  }
};

export const getBacklogLink = ({ name, backlog }) => `## Levende Backlog

De ${name} component staat bij NL Design System in de [levende backlog](${backlog}), heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!

`;
