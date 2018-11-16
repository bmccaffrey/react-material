import React from 'react';
import { Card } from 'Elements';
import styled from 'styled-components';
import waterfall from '../images/waterfall.jpeg';

const SampleCard = () => (
  <Card title="Sample">
    Without any styling, a card is pretty much worthless. If you're using a{' '}
    <code>div</code>, as I am here, you're going to have to grapple with
    block-styling, in order to turn this into something mangable.
  </Card>
);
const ManualCard = () => (
  <Card title="Manually Set">
    Now, you can keep the same card component, and just modify the style
    properties as needed.
  </Card>
);
const CodeExample = () => (
  <Card title="Example" style={{ width: '300px', height: '100px' }}>
    <code>
      &lt;Card style&#61;&#123;&#123; width: '300px', height: '100px'
      &#125;&#125;&gt;
    </code>
  </Card>
);

const AlternativesCard = () => (
  <Card title="Alternatives" style={{ width: '400px', height: '200px' }}>
    A similar and less tedious level of control can be achieved by
    controlling.the environment your cards flow into and/or by passing your
    components props which trigger a different appearance.
  </Card>
);

const ImageCard = () => (
  <Card title="Water">
    <img src={waterfall} />
    <hr />
    Something Beautiful here.
  </Card>
);

const CardPage = () => (
  <div>
    <h2>Cards</h2>
    <SampleCard />
    <br />
    <Container>
      <ManualCard />
      <CodeExample />
      <br />
      <AlternativesCard />
    </Container>
    <Grid>
      <Card>
        <img src={waterfall} />
      </Card>

      <Card title="Water">
        <img src={waterfall} />
      </Card>

      <Card title="Water">
        <img src={waterfall} />
        <hr />
        <b>falls</b>
      </Card>

      <Card>
        <img src={waterfall} />
        <hr />
        <b>falls</b>
      </Card>
    </Grid>
  </div>
);

const Container = styled.div`
  display: inline-grid;
  grid-template-columns: 250px 300px;
  grid-template-rows: 150px;
  grid-column-gap: 15px;
  height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 300px 300px;
`;

export default CardPage;
