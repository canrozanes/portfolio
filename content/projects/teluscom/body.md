## Motivation

I joined a team called Experience Platform and Tools (EPT) within Telus Digital. This team was mainly in charge of a product called Site Builer as well as few other tools that are meant to increase efficiencies in building and maintaining public facing TELUS branded websites.

Telus.com is the main public facing website of TELUS and holds over a 1000 static pages. While building a static website from scratch using frameworks like React are not that complicated, maintaining over a 1000 pages can get complicated. As an organization we have to ask:

- How do we ensure design consistency across all these pages?
- How do we minimize developer time in building and launching pages that have to be updated weekly and sometimes daily?
- How do we make sure we don't reinvent the wheel every time a different team decides to launch a website?

TELUS's answer to these challenges is [Site Builder](https://www.telus.com/en/digital/our-work/site-builder), a server-side rendered React application, with Node.js in the backend and Contentful as it's CMS. We manage Site Builder like an open-source project within the TELUS and different teams within the organization are welcomed to use existing React component or if they don't suffice, welcomed to contribute more React components and build Telus branded static websites.

When I joined this team in May 2020, Site Builder was over 4 years old, laden with tech debt and in desperate need of a rewrite.

We started the journey of rewrite and building Site Builder 2.0 with the following objectives:

- We'd make minimal changes to how we manage content. Contentful would still be our CMS of choice.
- We'd improve the performance of Telus.com from a lighthouse score of around 50 to at least 90.
- We'd improve the content editors experience by moving content management from Contentful to the browser. Content editors would inline-edit content directly on the page they were looking to make changes.
- We'd improve developer experience by using the latest open source projects like Next.js or Gatsby.

In the end we decided on using Next.js as our framework and also decided to experiment with [Tina CMS](https://tina.io/) as our inline-editing framework.

As of time of writing, Site Builder 2.0 project is moving full speed and we are very close to MVP. Content editors are able to build Telus Branded websites from scratch using the Telus Design System and are able to make almost all the changes to an existing page without ever visiting Contentful.
