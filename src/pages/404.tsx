import {AnchorLink, LayoutBlank} from '@components';

const LinkNotFound = () => (
  <LayoutBlank className="flex-column flex-center">
    <h1 className="flex-column">
      <span className="prelude-compact">Error 404:</span>
      Page not found!
    </h1>
    <p style={{maxWidth: 500, textAlign: 'center', marginBottom: 35}}>
      Seems like you followed a faulty link. No worries, just go back 
      to my homepage below and you&apos;ll be sure to find what you were 
      looking for!
    </p>

    <p>
      <AnchorLink>MarioVillacreses.com</AnchorLink>
    </p>
  </LayoutBlank>
);

export default LinkNotFound;
