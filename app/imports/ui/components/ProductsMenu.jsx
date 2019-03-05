import React from 'react';
import { Image, Container, Grid, Divider } from 'semantic-ui-react';

export default class ProductsMenu extends React.Component {
  render() {
    return (
        <Grid centered columns={2}>
          <Container className="productsmenu">
            <div className="productdivider">
              <Divider horizontal><b>LATEST ADDITIONS</b></Divider>
              <Grid centered columns={3} className="gap">
                <column>
                  <row>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0077/5352/products/Stealth_Monogram_Snapback_01_large.jpg?v=1548259654"
                        className="productitem"/>
                  </row>
                  <row>
                    <div className="text producttext"><b>SYNDICATE ORIGINAL US</b></div>
                    <div className="text producttext"><b>STEALTH MONOGRAM SNAPBACK HAT</b></div>
                    <div className="text pricetext producttext"><b>$25.00</b></div>
                  </row>
                </column>
                <column>
                  <row>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0077/5352/products/blueprint-front_large.jpg?v=1541708200"
                        className="productitem"/>
                  </row>
                  <row>
                    <div className="text producttext"><b>SYNDICATE ORIGINAL</b></div>
                    <div className="text producttext"><b>BLUEPRINT HOODIE</b></div>
                    <div className="text pricetext producttext"><b>$55.00</b></div>
                  </row>
                </column>
                <column>
                  <row>
                    <Image
                        label={{ as: 'a', color: 'black', corner: 'right', content: 'SOLD OUT' }}
                        src="https://cdn.shopify.com/s/files/1/0077/5352/products/mens_CoA_hoodie_back_large.jpg?v=1539785708"
                        className="productitem"/>
                  </row>
                  <row>
                    <div className="text producttext"><b>SYNDICATE ORIGINAL</b></div>
                    <div className="text producttext"><b>&quot;COATS OF ARMS&quot; HOODIE</b></div>
                    <div className="text pricetext producttext"><b>FROM $50.00-$56.00</b></div>
                  </row>
                </column>
              </Grid>
            </div>
            <div className="productdivider2">
              <Divider horizontal><b>FEATURED COLLECTIONS</b></Divider>
              <Grid centered columns={2} className="gap">
                <column>
                  <div className="fce1 pd2">
                    <div className="ui grid productitem">
                      <div className="middle aligned column">
                        <div className="white-background">
                          <div className="ui grid">
                            <div className="center aligned column">
                              <div className="text"><b>MEN</b></div>
                              <div className="text">33 ITEMS</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </column>
                <column>
                  <div className="fce2 pd2">
                    <div className="ui grid productitem">
                      <div className="middle aligned column">
                        <div className="white-background">
                          <div className="ui grid">
                            <div className="center aligned column">
                              <div className="text"><b>WOMEN</b></div>
                              <div className="text">6 ITEMS</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </column>
              </Grid>
            </div>
          </Container>
        </Grid>
    );
  }
}
