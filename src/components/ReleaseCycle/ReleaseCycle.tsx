import { FC } from 'react';
import { Column, Grid } from '@carbon/react';

import styles from './ReleaseCycle.module.scss';
import ReleaseCycleDiagram from './graphics/ReleaseCycleDiagram';

type ReleaseCycleProps = {
  //
};

const ReleaseCycle: FC<ReleaseCycleProps> = () => (
  <section>
    <Grid>
      <Column
        className={styles.content}
        xlg={{ span: 6, offset: 1 }}
        lg={{ span: 7 }}
        sm={{ span: 4 }}
      >
        <h2>Weekly release cycle for models and data</h2>
        <p>
          Each week, the InstructLab model will be updated with the latest
          contributions and shared on Hugging Face. All synthetic data generated
          by the project to date will also be made available.
        </p>
      </Column>
      <Column
        className={styles.graphicsWrapper}
        xlg={{ span: 7, offset: 8 }}
        lg={{ span: 8, offset: 8 }}
        md={{ span: 4, offset: 4 }}
        sm={{ span: 4 }}
      >
        <ReleaseCycleDiagram />
      </Column>
    </Grid>
  </section>
);

export default ReleaseCycle;
