import React from 'react';
import { Container, Grid, Icon, Divider } from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    return (
        <div className="grey-background topfooter">
          <Container>
            <Grid columns={4}>
              <Grid.Row>
                <Grid.Column>
                  <h4 className="text nobottom">NAVIGATION</h4>
                  <Divider className="notop"/>
                  <div className="text">Search</div>
                  <div className="text">About Us</div>
                  <div className="text">Privacy</div>
                  <div className="text">Contact</div>
                  <div className="text">Shipping, Returns & Exchanges</div>
                  <div className="text">Sizing Chart</div>
                </Grid.Column>
                <Grid.Column>
                  <h4 className="text nobottom">FEATURED COLLECTIONS</h4>
                  <Divider className="notop"/>
                  <div className="text">Mens</div>
                  <div className="text">Womens</div>
                  <div className="text">Kids</div>
                  <div className="text">Accessories</div>
                </Grid.Column>
                <Grid.Column>
                  <h4 className="text nobottom">MORE SYNDICATE</h4>
                  <Divider className="notop"/>
                  <div className="text">Tom&apos;s Vlogs</div>
                </Grid.Column>
                <Grid.Column>
                  <Divider hidden/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider hidden/>
            <Divider/>
            <Divider hidden/>
            <Grid centered>
              <Grid.Row>
                <Icon inverted color="grey" name="facebook f" size="big"/>
                <Icon inverted color="grey" name="twitter" size="big"/>
                <Icon inverted color="grey" name="youtube" size="big"/>
                <Icon inverted color="grey" name="instagram" size="big"/>
                <Icon inverted color="grey" name="rss" size="big"/>
              </Grid.Row>
              <Grid.Row>
                <Divider hidden />
              </Grid.Row>
              <Grid.Row>
                <div className="text">
                  YOU&apos;RE VIEWING THE US SHOP. JUMP TO <a href="http://uk.syndicateoriginal.com/"><u>UK
                  SHOP.</u></a>
                </div>
              </Grid.Row>
              <Grid.Row>
                <div className="text">COPYRIGHT © 2019 SYNDICATE ORIGINAL US</div>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}
