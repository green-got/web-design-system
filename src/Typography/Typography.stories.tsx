import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default ({
  title: 'Foundations / Typography',
} satisfies StoryDefault);

export const Typography: Story = () => (
  <>
    <GlobalStyles />

    <h1>Typography</h1>

    <hr />

    <p>Typographic styles are defined in the GlobalStyles scss file.</p>

    <hr />

    <h1>h1 . Faucibus vitae orci at proin est mi rhoncus.</h1>
    <h2>h2 . Faucibus vitae orci at proin est mi rhoncus.</h2>
    <h3>h3 . Faucibus vitae orci at proin est mi rhoncus.</h3>
    <h4>h4 . Faucibus vitae orci at proin est mi rhoncus.</h4>
    <h5>h5 . Faucibus vitae orci at proin est mi rhoncus.</h5>
    <h6>h6 . Faucibus vitae orci at proin est mi rhoncus.</h6>

    <hr />

    <p>
      Aliquam vivamus bibendum cras arcu. Ornare laoreet id lectus suspendisse
      risus, lacinia in. Metus justo cras sed volutpat luctus vivamus
      ullamcorper. Sit lobortis sed cras pharetra. Eget pharetra, eu vulputate
      eu. Donec gravida elit commodo, arcu, id diam sed turpis.
    </p>
    <p className="strong">
      .strong : Aliquam vivamus bibendum cras arcu. Ornare laoreet id lectus
      suspendisse risus, lacinia in. Metus justo cras sed volutpat luctus
      vivamus ullamcorper. Sit lobortis sed cras pharetra. Eget pharetra, eu
      vulputate eu. Donec gravida elit commodo, arcu, id diam sed turpis.
    </p>
    <p className="caption">
      .caption : Aliquam vivamus bibendum cras arcu. Ornare laoreet id lectus
      suspendisse risus, lacinia in. Metus justo cras sed volutpat luctus
      vivamus ullamcorper. Sit lobortis sed cras pharetra. Eget pharetra, eu
      vulputate eu. Donec gravida elit commodo, arcu, id diam sed turpis.
    </p>
    <p className="captionBold">
      .captionBold : Aliquam vivamus bibendum cras arcu. Ornare laoreet id
      lectus suspendisse risus, lacinia in. Metus justo cras sed volutpat luctus
      vivamus ullamcorper. Sit lobortis sed cras pharetra. Eget pharetra, eu
      vulputate eu. Donec gravida elit commodo, arcu, id diam sed turpis.
    </p>
  </>
);
